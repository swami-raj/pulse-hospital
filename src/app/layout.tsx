import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#073554",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pulsehospitalgaya.com"),
  title: "Pulse International Hospital | Gaya's Leading Multi-Speciality Medical Center",
  description: "Pulse International Hospital, Gaya, Bihar — Reg No CE/GAY/2025/NH-538. 24/7 Emergency, ICU, NICU, Advanced Laparoscopy Surgery, Modern Diagnostics, and Experienced Specialist Doctors.",
  keywords: [
    "Pulse International Hospital",
    "Hospital in Gaya",
    "Best Hospital in Bihar",
    "24/7 Emergency Gaya",
    "ICU Hospital Gaya",
    "Specialist Doctors Gaya",
    "Khatkachak Hospital Gaya",
    "Dr Sudhir Kumar Gaya",
    "Dr Prabhat Kumar Gaya"
  ],
  authors: [{ name: "Pulse International Hospital" }],
  openGraph: {
    title: "Pulse International Hospital | Gaya, Bihar",
    description: "24/7 Emergency, ICU, NICU & Advanced Multi-Speciality Healthcare in Gaya.",
    url: "https://pulsehospitalgaya.com",
    siteName: "Pulse International Hospital",
    images: [
      {
        url: "/images/hospital_building.jpg",
        width: 1200,
        height: 675,
        alt: "Pulse International Hospital Building Gaya"
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
