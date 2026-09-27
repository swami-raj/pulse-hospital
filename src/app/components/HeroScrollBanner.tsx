"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroScrollBannerProps {
  onOpenBooking?: () => void;
}

const TOTAL_FRAMES = 300;

// Helper to calculate smooth fade and slide for cinematic floating text
function getCinematicStyle(
  progress: number,
  start: number,
  peakStart: number,
  peakEnd: number,
  end: number,
  direction: "left" | "right"
): React.CSSProperties {
  let opacity = 0;
  let offset = direction === "left" ? -40 : 40;

  if (progress >= start && progress < peakStart) {
    const t = (progress - start) / (peakStart - start);
    opacity = t;
    offset = (direction === "left" ? -40 : 40) * (1 - t);
  } else if (progress >= peakStart && progress <= peakEnd) {
    opacity = 1;
    offset = 0;
  } else if (progress > peakEnd && progress <= end) {
    const t = (progress - peakEnd) / (end - peakEnd);
    opacity = 1 - t;
    offset = (direction === "left" ? -40 : 40) * t;
  }

  return {
    opacity,
    transform: `translateY(-50%) translateX(${offset}px)`,
    pointerEvents: opacity > 0.1 ? "auto" : "none",
    visibility: opacity > 0.005 ? "visible" : "hidden",
    transition: "opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
  };
}

export default function HeroScrollBanner({ onOpenBooking }: HeroScrollBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [framesLoadedCount, setFramesLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Initialize and load frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    // Preload helper
    const loadFrame = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        const frameNum = String(index + 1).padStart(3, "0");
        img.src = `/egif/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
          setFramesLoadedCount((prev) => prev + 1);
          resolve(img);
        };
        img.onerror = () => {
          resolve(img);
        };
        images[index] = img;
      });
    };

    imagesRef.current = images;

    // Load initial 25 frames immediately for instant rendering
    const initialBatch = Array.from({ length: 25 }, (_, i) => loadFrame(i));

    Promise.all(initialBatch).then(() => {
      setIsReady(true);
      drawFrame(0);

      // Sequentially load the remaining frames in chunks
      let nextIndex = 25;
      const loadNextChunk = () => {
        if (nextIndex >= TOTAL_FRAMES) return;
        const chunk = [];
        const limit = Math.min(nextIndex + 15, TOTAL_FRAMES);
        for (let i = nextIndex; i < limit; i++) {
          chunk.push(loadFrame(i));
        }
        nextIndex = limit;
        Promise.all(chunk).then(() => {
          if (nextIndex < TOTAL_FRAMES) {
            setTimeout(loadNextChunk, 40);
          }
        });
      };
      loadNextChunk();
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Try target frame or fallback to closest loaded frame
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let i = frameIndex - 1; i >= 0; i--) {
        if (imagesRef.current[i]?.complete && imagesRef.current[i].naturalWidth > 0) {
          img = imagesRef.current[i];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Cover calculation
    const hRatio = width / img.naturalWidth;
    const vRatio = height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);
    const shiftX = (width - img.naturalWidth * ratio) / 2;
    const shiftY = (height - img.naturalHeight * ratio) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight,
      shiftX,
      shiftY,
      img.naturalWidth * ratio,
      img.naturalHeight * ratio
    );

    // Subtle dark gradient vignette for enhanced legibility
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, "rgba(5, 34, 56, 0.45)");
    grad.addColorStop(0.5, "rgba(5, 34, 56, 0.20)");
    grad.addColorStop(1, "rgba(5, 34, 56, 0.70)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();
  };

  // Scroll listener for sticky canvas
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Scroll fraction through this section
      const progress = -rect.top / (containerHeight - windowHeight);
      const clamped = Math.max(0, Math.min(1, progress));

      setScrollProgress(clamped);

      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(clamped * (TOTAL_FRAMES - 1))
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          drawFrame(targetFrame);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => drawFrame(currentFrameRef.current));
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => drawFrame(currentFrameRef.current));
    };
  }, []);

  // Center Headline: ONLY first text in the center, fades out when scrolling (0 to 0.16)
  const centerOpacity = Math.max(0, 1 - scrollProgress * 6.5);
  const centerTranslateY = -scrollProgress * 90;

  return (
    <div ref={containerRef} className="hero-scroll-container">
      <div className="hero-scroll-sticky">
        <canvas ref={canvasRef} className="hero-scroll-canvas" />

        {/* Center Initial Title: ONLY the first title & subtitle in center, fades out on scroll */}
        {centerOpacity > 0.01 && (
          <div
            className="hero-scroll-overlay"
            style={{
              opacity: centerOpacity,
              transform: `translateY(${centerTranslateY}px)`,
              pointerEvents: centerOpacity <= 0.05 ? "none" : "auto",
              transition: "opacity 0.15s ease-out, transform 0.15s ease-out"
            }}
          >
            <h1 className="hero-scroll-headline">
              Where Healthcare Meets Compassion
            </h1>
            <p className="hero-scroll-subheadline">
              A premier healthcare complex featuring a 100+ bed hospital, super-specialty
              trauma care, advanced diagnostics, and round-the-clock emergency medical services.
            </p>
          </div>
        )}

        {/* Floating Cinematic Typography (Matching Pathak Institute Reference Mockup) */}
        <div className="hero-cinematic-wrap">
          {/* ====================================================
              STAGE 1: LEFT SIDE (Exterior View - Screenshot 1)
              ==================================================== */}
          <div
            className="hero-cinematic-block left"
            style={getCinematicStyle(scrollProgress, 0.16, 0.22, 0.44, 0.50, "left")}
          >
            <h2 className="hero-cinematic-title">
              100+ Bed Multi–Specialty<br />Hospital
            </h2>
            <p className="hero-cinematic-desc">
              Equipped with cutting-edge medical technology and expert clinicians
              providing comprehensive diagnostic, surgical, and therapeutic
              treatments around the clock.
            </p>
          </div>

          {/* ====================================================
              STAGE 2: RIGHT SIDE (Approaching Entrance - Screenshot 2)
              ==================================================== */}
          <div
            className="hero-cinematic-block right"
            style={getCinematicStyle(scrollProgress, 0.50, 0.56, 0.76, 0.82, "right")}
          >
            <h2 className="hero-cinematic-title">
              Premier Multi–Specialty<br />Healthcare
            </h2>
            <p className="hero-cinematic-desc">
              Empowering patients with world-class clinical expertise, advanced
              modular operation theatres, 24/7 trauma emergency, and dedicated
              intensive care.
            </p>
          </div>

          {/* ====================================================
              STAGE 3: LEFT SIDE (Inside Reception Lobby)
              ==================================================== */}
          <div
            className="hero-cinematic-block left"
            style={getCinematicStyle(scrollProgress, 0.82, 0.88, 1.00, 1.00, "left")}
          >
            <h2 className="hero-cinematic-title">
              Modern Reception &<br />24x7 Diagnostics
            </h2>
            <p className="hero-cinematic-desc">
              24x7 instant OPD registration, cashless TPA insurance assistance,
              in-house pharmacy, and comprehensive diagnostic investigations
              under one roof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
