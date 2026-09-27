"use client";

import React, { useState } from "react";
import HeroScrollBanner from "./components/HeroScrollBanner";
import {
  Phone,
  PhoneCall,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Star,
  Activity,
  Stethoscope,
  HeartPulse,
  Brain,
  Bone,
  Eye,
  Scan,
  ShieldAlert,
  Ear,
  Scissors,
  Users,
  Building2,
  Heart,
  Target,
  Send,
  MessageCircle,
  ExternalLink,
  Ambulance,
  Sparkles,
  Baby,
  Smile,
  ShieldCheck,
  Compass
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDoctor, setModalDoctor] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [testIdx, setTestIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Amit Kumar",
      quote: "Very good hospital with supportive staff and experienced doctors. Clean facilities and 24x7 emergency service is really helpful. Highly recommended in Gaya.",
      rating: 5
    },
    {
      name: "Sunita Kumari",
      quote: "Excellent maternity care and pediatrician support. The nursing team was attentive throughout my delivery and recovery. Best hospital in Gaya.",
      rating: 5
    },
    {
      name: "Rameshwar Prasad",
      quote: "Prompt emergency response when my uncle had a critical condition. The ICU doctors and life support systems are truly state-of-the-art.",
      rating: 5
    }
  ];

  const handleOpenBooking = (docName?: string) => {
    setModalDoctor(docName || "");
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="site-wrapper">
      {/* ========================================================
          TRANSPARENT NAVBAR OVER VIDEO BANNER
          ======================================================== */}
      <nav className={`navbar-sticky ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <a href="#home" className="brand-logo-combo" aria-label="Pulse Hospital Home">
            <img
              src="/images/hospital_emblem.png"
              alt="Pulse Hospital Emblem"
              className="navbar-emblem"
            />
          </a>

          <ul className="nav-menu">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#departments" className="nav-link">Departments</a></li>
            <li><a href="#doctors" className="nav-link">Doctors</a></li>
            <li><a href="#facilities" className="nav-link">Facilities</a></li>
            <li><a href="#gallery" className="nav-link">Gallery</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="navbar-actions">
            <button
              onClick={() => handleOpenBooking()}
              className="btn-book-nav"
              id="header-book-btn"
            >
              <Calendar size={14} />
              <span className="btn-book-nav-text">Book Appointment</span>
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown inside fixed navbar */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-links">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item active">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">About</a>
              <a href="#departments" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Departments</a>
              <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Doctors</a>
              <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Facilities</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-nav-item">Contact</a>
            </div>

            <div className="mobile-drawer-cta">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenBooking();
                }}
                className="btn-mobile-drawer-book"
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </button>
              <a href="tel:07079150345" className="btn-mobile-drawer-call">
                <PhoneCall size={16} />
                <span>Emergency: 070791 50345</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ========================================================
          3. HERO SCROLL ANIMATION BANNER (300 FRAMES)
          ======================================================== */}
      <div id="home">
        <HeroScrollBanner onOpenBooking={() => handleOpenBooking()} />
      </div>

      {/* ========================================================
          4. FLOATING QUICK INFO BAR
          ======================================================== */}
      <div className="floating-infobar-wrap">
        <div className="floating-infobar">
          <div className="infobar-col">
            <div className="infobar-icon-circle">
              <MapPin size={22} />
            </div>
            <div className="infobar-text">
              <small>Our Location</small>
              <strong>5 No Gate Bypass Road, Khatkachak Rd, Magadh, Gaya, Naili, Bihar 823001</strong>
            </div>
          </div>

          <div className="infobar-col">
            <div className="infobar-icon-circle">
              <PhoneCall size={22} />
            </div>
            <div className="infobar-text">
              <small>Call Us</small>
              <strong>
                <a href="tel:07079150345">070791 50345</a> <br />
                <a href="tel:9523602816">9523602816</a>
              </strong>
            </div>
          </div>

          <div className="infobar-col">
            <div className="infobar-icon-circle">
              <Clock size={22} />
            </div>
            <div className="infobar-text">
              <small>Open 24 Hours</small>
              <strong>Emergency & OPD</strong>
            </div>
          </div>

          <div className="infobar-col">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Pulse+International+Hospital+Gaya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-directions"
            >
              <ExternalLink size={15} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================
          5. WELCOME / ABOUT US SECTION
          ======================================================== */}
      <section className="about-section" id="about">
        <div className="about-container">
          {/* Left: Doctor & Patient photo */}
          <div className="about-photo-box">
            <img
              src="/images/about_doctor_patient.jpg"
              alt="Compassionate patient care at Pulse Hospital"
              width={420}
              height={360}
              loading="lazy"
            />
          </div>

          {/* Middle: Welcome description & 4 features */}
          <div className="about-main-content">
            <span className="about-eyebrow">WELCOME TO</span>
            <h2 className="about-main-title">
              Pulse <span>International Hospital</span>
            </h2>
            <p className="about-p-desc">
              Pulse International Hospital, Gaya is a multi-speciality hospital committed to providing
              high-quality, affordable and compassionate healthcare services to every individual. Relentlessly committed to
              patient wellbeing with modern technology and a dedicated team of experienced doctors, nurses and support staff, we
              strive to serve the best possible care for you and your family.
            </p>

            <div className="about-features-row">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <ShieldCheck size={18} />
                </div>
                <div className="about-feature-label">Affordable Healthcare</div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <Building2 size={18} />
                </div>
                <div className="about-feature-label">Modern Infrastructure</div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <Heart size={18} />
                </div>
                <div className="about-feature-label">Compassionate Care</div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <Users size={18} />
                </div>
                <div className="about-feature-label">Experienced Medical Team</div>
              </div>
            </div>

            <button onClick={() => handleOpenBooking()} className="btn-about-more">
              <span>More About Us →</span>
            </button>
          </div>

          {/* Right: Vision & Mission */}
          <div className="vision-mission-sidebar">
            <div className="vm-box">
              <div className="vm-header">
                <div className="vm-icon-circle">
                  <Eye size={18} />
                </div>
                <h3 className="vm-title">Our Vision</h3>
              </div>
              <p className="vm-desc">
                To be a trusted healthcare institution providing accessible, affordable and advanced medical care for a healthier community.
              </p>
            </div>

            <div className="vm-box">
              <div className="vm-header">
                <div className="vm-icon-circle red">
                  <Target size={18} />
                </div>
                <h3 className="vm-title">Our Mission</h3>
              </div>
              <p className="vm-desc">
                To deliver compassionate, patient-centric and high-quality healthcare services with integrity and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. STATS COUNTER STRIP
          ======================================================== */}
      <section className="stats-bar-section">
        <div className="stats-bar-inner">
          <div className="stat-item">
            <div className="stat-icon-wrap"><HeartPulse size={24} style={{ margin: "0 auto" }} /></div>
            <div className="stat-number">10,000+</div>
            <div className="stat-title">Happy Patients</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrap"><Stethoscope size={24} style={{ margin: "0 auto" }} /></div>
            <div className="stat-number">30+</div>
            <div className="stat-title">Specialities & Services</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrap"><Users size={24} style={{ margin: "0 auto" }} /></div>
            <div className="stat-number">50+</div>
            <div className="stat-title">Experienced Doctors</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrap"><Building2 size={24} style={{ margin: "0 auto" }} /></div>
            <div className="stat-number">100+</div>
            <div className="stat-title">Bed Capacity</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrap"><Clock size={24} style={{ margin: "0 auto" }} /></div>
            <div className="stat-number">24/7</div>
            <div className="stat-title">Emergency Care</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-wrap"><Activity size={24} style={{ margin: "0 auto" }} /></div>
            <div className="stat-number">Advanced</div>
            <div className="stat-title">Diagnostic Facilities</div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. OUR DEPARTMENTS SECTION (12 Cards)
          ======================================================== */}
      <section className="departments-section" id="departments">
        <div className="section-head-bar">
          <h2 className="section-title-clean">
            Our <span>Departments</span>
          </h2>
          <a href="#appointment" onClick={() => handleOpenBooking()} className="btn-view-all-clean">
            <span>View All Departments →</span>
          </a>
        </div>

        <div className="departments-12-grid">
          {[
            { name: "General Medicine", icon: <Stethoscope size={26} /> },
            { name: "General Surgery", icon: <Scissors size={26} /> },
            { name: "Orthopedics", icon: <Bone size={26} /> },
            { name: "Gynecology & Obstetrics", icon: <HeartPulse size={26} /> },
            { name: "Pediatrics", icon: <Baby size={26} /> },
            { name: "Cardiology", icon: <Heart size={26} /> },
            { name: "Neurology", icon: <Brain size={26} /> },
            { name: "Urology", icon: <Activity size={26} /> },
            { name: "ENT", icon: <Ear size={26} /> },
            { name: "Dermatology", icon: <Sparkles size={26} /> },
            { name: "Ophthalmology (Eye Care)", icon: <Eye size={26} /> },
            { name: "Radiology & Imaging", icon: <Scan size={26} /> }
          ].map((dept, idx) => (
            <div
              key={idx}
              className="dept-box-card"
              onClick={() => handleOpenBooking(undefined)}
              title={`Book appointment in ${dept.name}`}
            >
              <div className="dept-circle-icon">{dept.icon}</div>
              <div className="dept-box-name">{dept.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. ADVANCED FACILITIES & TECH
          ======================================================== */}
      <section className="facilities-section" id="facilities">
        <div className="facilities-container">
          {/* Left Column */}
          <div className="facilities-left-col">
            <h2>Advanced <br />Facilities & Technology</h2>
            <p>
              We are equipped with modern medical infrastructure and advanced diagnostic and treatment facilities to provide accurate diagnosis and effective care.
            </p>

            <div className="facilities-checklist-2col">
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>ICU & NICU</span>
              </div>
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>24/7 Emergency Services</span>
              </div>
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>Modular Operation Theatre</span>
              </div>
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>In-House Pharmacy</span>
              </div>
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>Advanced Diagnostic Lab</span>
              </div>
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>Ambulance Service</span>
              </div>
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>Digital X-Ray & Imaging</span>
              </div>
              <div className="fac-check-item">
                <CheckCircle2 size={16} className="fac-check-icon" />
                <span>Comfortable IPD & General Wards</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Photos Grid */}
          <div className="facilities-photos-grid">
            <div className="fac-photo-card">
              <div className="fac-photo-img-wrap">
                <img src="/images/hospital_icu.jpg" alt="ICU" width={220} height={120} loading="lazy" />
              </div>
              <div className="fac-photo-title">ICU</div>
            </div>

            <div className="fac-photo-card">
              <div className="fac-photo-img-wrap">
                <img src="/images/operation_theatre.jpg" alt="Modular Operation Theatre" width={220} height={120} loading="lazy" />
              </div>
              <div className="fac-photo-title">Modular Operation Theatre</div>
            </div>

            <div className="fac-photo-card">
              <div className="fac-photo-img-wrap">
                <img src="/images/facility_nicu.jpg" alt="NICU" width={220} height={120} loading="lazy" />
              </div>
              <div className="fac-photo-title">NICU</div>
            </div>

            <div className="fac-photo-card">
              <div className="fac-photo-img-wrap">
                <img src="/images/facility_imaging.jpg" alt="Diagnostic Imaging" width={220} height={120} loading="lazy" />
              </div>
              <div className="fac-photo-title">Diagnostic Imaging</div>
            </div>

            <div className="fac-photo-card">
              <div className="fac-photo-img-wrap">
                <img src="/images/facility_lab.jpg" alt="Pathology Laboratory" width={220} height={120} loading="lazy" />
              </div>
              <div className="fac-photo-title">Pathology Laboratory</div>
            </div>

            <div className="fac-photo-card">
              <div className="fac-photo-img-wrap">
                <img src="/images/facility_pharmacy.jpg" alt="Pharmacy" width={220} height={120} loading="lazy" />
              </div>
              <div className="fac-photo-title">Pharmacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. OUR EXPERIENCED DOCTORS (5 Doctors)
          ======================================================== */}
      <section className="doctors-section" id="doctors">
        <div className="section-head-bar">
          <h2 className="section-title-clean">
            Our <span>Experienced</span> Doctors
          </h2>
          <a href="#appointment" onClick={() => handleOpenBooking()} className="btn-view-all-clean">
            <span>View All Doctors →</span>
          </a>
        </div>

        <div className="doctors-5-grid">
          {[
            {
              name: "Dr. Sudhir Kumar",
              degree: "MBBS (General Physician & Surgeon)",
              image: "/images/doctor_sudhir.jpg"
            },
            {
              name: "Dr. Prabhat Kumar",
              degree: "MBBS MD (Neuro Physician)",
              image: "/images/doctor_prabhat.jpg"
            },
            {
              name: "Dr. Anjali Verma",
              degree: "DGO, DNB (Obstetrics & Gynecology)",
              image: "/images/doctor_anjali.jpg"
            },
            {
              name: "Dr. Rajeev Singh",
              degree: "MS (Orthopedics)",
              image: "/images/doctor_rajeev.jpg"
            },
            {
              name: "Dr. Neha Sinha",
              degree: "MD (Pediatrics)",
              image: "/images/doctor_neha.jpg"
            }
          ].map((doc, idx) => (
            <div key={idx} className="doctor-item-card">
              <div className="doc-img-wrap">
                <img src={doc.image} alt={doc.name} width={240} height={200} loading="lazy" />
              </div>
              <div className="doc-card-body">
                <h3 className="doc-name">{doc.name}</h3>
                <p className="doc-sub">{doc.degree}</p>
                <button
                  onClick={() => handleOpenBooking(doc.name)}
                  className="btn-doc-book"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          10. WHY CHOOSE & PATIENT TESTIMONIALS
          ======================================================== */}
      <section className="why-testimonials-section" id="patient-guide">
        <div className="why-test-grid">
          {/* Left Column: Why Choose */}
          <div className="why-col-inner">
            <h2 className="why-headline">
              Why Choose <br />Pulse International Hospital?
            </h2>

            <div className="why-content-split">
              <div className="why-thumb-img">
                <img src="/images/hospital_banner.jpg" alt="Pulse Hospital" width={160} height={140} loading="lazy" />
              </div>

              <div className="why-bullets-grid">
                <div className="why-bullet-item">
                  <CheckCircle2 size={16} color="var(--red-main)" />
                  <span>24/7 Emergency & Critical Care</span>
                </div>
                <div className="why-bullet-item">
                  <CheckCircle2 size={16} color="var(--red-main)" />
                  <span>Affordable & Transparent Pricing</span>
                </div>
                <div className="why-bullet-item">
                  <CheckCircle2 size={16} color="var(--red-main)" />
                  <span>Experienced & Qualified Doctors</span>
                </div>
                <div className="why-bullet-item">
                  <CheckCircle2 size={16} color="var(--red-main)" />
                  <span>Patient-Centric Approach</span>
                </div>
                <div className="why-bullet-item">
                  <CheckCircle2 size={16} color="var(--red-main)" />
                  <span>Modern Technology & Infrastructure</span>
                </div>
                <div className="why-bullet-item">
                  <CheckCircle2 size={16} color="var(--red-main)" />
                  <span>Clean, Safe & Hygienic Environment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: What Our Patients Say */}
          <div className="test-col-box">
            <h2 className="test-title">
              What <span>Our Patients Say</span>
            </h2>

            <p className="test-quote-text">
              “{testimonials[testIdx].quote}”
            </p>

            <div className="test-user-row">
              <div className="test-user-left">
                <div className="test-user-avatar">
                  <div style={{
                    width: "100%",
                    height: "100%",
                    background: "#0c6fae",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    fontSize: "1.1rem"
                  }}>
                    {testimonials[testIdx].name.charAt(0)}
                  </div>
                </div>
                <div className="test-user-meta">
                  <h4>{testimonials[testIdx].name}</h4>
                  <div className="test-stars-row">
                    {[...Array(testimonials[testIdx].rating)].map((_, s) => (
                      <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="test-arrows">
                <button
                  className="test-arrow-btn"
                  onClick={() => setTestIdx((testIdx - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous review"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="test-arrow-btn"
                  onClick={() => setTestIdx((testIdx + 1) % testimonials.length)}
                  aria-label="Next review"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. 24/7 EMERGENCY BANNER
          ======================================================== */}
      <section className="emergency-red-strip">
        <div className="emergency-strip-inner">
          <div className="emergency-left-combo">
            <div className="emergency-thumb-van">
              <img src="/images/hospital_banner.jpg" alt="Ambulance" width={100} height={60} loading="lazy" />
            </div>
            <div className="emergency-big-tag">
              24/7
              <small>Emergency Service</small>
            </div>
          </div>

          <div className="emergency-phone-pill">
            <PhoneCall size={26} color="#fff" />
            <div className="emergency-pill-num">
              <a href="tel:07079150345" style={{ color: "#fff" }}>070791 50345</a> <br />
              <a href="tel:9523602816" style={{ color: "#fff" }}>9523602816</a>
            </div>
          </div>

          <div className="emergency-right-msg">
            <ShieldAlert size={28} color="#fff" />
            <div>
              <small>For Medical Emergencies</small>
              <strong>We Are Always Here Day & Night</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. LATEST NEWS & HEALTH TIPS + PHOTO GALLERY
          ======================================================== */}
      <section className="news-gallery-section" id="gallery">
        <div className="news-gallery-grid">
          {/* Left: News */}
          <div>
            <div className="section-head-bar" style={{ marginBottom: 16 }}>
              <h2 className="section-title-clean">
                Latest News & <span>Health Tips</span>
              </h2>
              <a href="#contact" className="btn-view-all-clean">
                <span>View All →</span>
              </a>
            </div>

            <div className="news-cards-3row">
              <div className="news-small-card">
                <div className="news-img-holder">
                  <img src="/images/about_doctor_patient.jpg" alt="Heart health tips" width={200} height={95} loading="lazy" />
                </div>
                <div className="news-body-content">
                  <h3 className="news-headline">Tips for a Healthy Heart</h3>
                  <div className="news-date">15 Aug 2025</div>
                  <a href="#contact" className="news-read-link">Read More →</a>
                </div>
              </div>

              <div className="news-small-card">
                <div className="news-img-holder">
                  <img src="/images/facility_lab.jpg" alt="Health Checkup" width={200} height={95} loading="lazy" />
                </div>
                <div className="news-body-content">
                  <h3 className="news-headline">Importance of Preventive Checkups</h3>
                  <div className="news-date">10 Aug 2025</div>
                  <a href="#contact" className="news-read-link">Read More →</a>
                </div>
              </div>

              <div className="news-small-card">
                <div className="news-img-holder">
                  <img src="/images/doctor_anjali.jpg" alt="Maternal Care" width={200} height={95} loading="lazy" />
                </div>
                <div className="news-body-content">
                  <h3 className="news-headline">Maternal Care for a Safer Tomorrow</h3>
                  <div className="news-date">05 Aug 2025</div>
                  <a href="#contact" className="news-read-link">Read More →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Photo Gallery */}
          <div>
            <div className="section-head-bar" style={{ marginBottom: 16 }}>
              <h2 className="section-title-clean">Photo Gallery</h2>
              <a href="#contact" className="btn-view-all-clean">
                <span>View All →</span>
              </a>
            </div>

            <div className="gallery-6-grid">
              <div className="gallery-grid-img">
                <img src="/images/hospital_banner.jpg" alt="Hospital Building" width={140} height={80} loading="lazy" />
              </div>
              <div className="gallery-grid-img">
                <img src="/images/hospital_icu.jpg" alt="ICU Ward" width={140} height={80} loading="lazy" />
              </div>
              <div className="gallery-grid-img">
                <img src="/images/operation_theatre.jpg" alt="Operation Theatre" width={140} height={80} loading="lazy" />
              </div>
              <div className="gallery-grid-img">
                <img src="/images/facility_imaging.jpg" alt="Diagnostic CT Scan" width={140} height={80} loading="lazy" />
              </div>
              <div className="gallery-grid-img">
                <img src="/images/facility_lab.jpg" alt="Pathology Lab" width={140} height={80} loading="lazy" />
              </div>
              <div className="gallery-grid-img">
                <img src="/images/facility_pharmacy.jpg" alt="Hospital Pharmacy" width={140} height={80} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          13. FOOTER
          ======================================================== */}
      <footer className="footer-dark" id="contact">
        <div className="footer-container">
          <div className="footer-4col-grid">
            {/* Col 1: Logo & Mission */}
            <div>
              <div className="brand-logo-combo" style={{ marginBottom: 14 }}>
                <img
                  src="/images/hospital_emblem.png"
                  alt="Pulse International Hospital"
                  className="navbar-emblem"
                  style={{ height: "46px" }}
                />
                <div className="navbar-brand-text">
                  <div className="brand-name" style={{ fontSize: "1.25rem" }}>PULSE <span>HOSPITAL</span></div>
                  <div className="brand-sub" style={{ color: "#9acbe8", fontSize: "0.68rem" }}>GAYA • KHATKACHAK</div>
                </div>
              </div>
              <p className="footer-p-desc">
                Providing quality healthcare with compassion, advanced technology and a commitment to a healthier community.
              </p>
              <div className="footer-social-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Facebook">f</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Instagram">ig</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="YouTube">yt</a>
                <a href="https://wa.me/917079150345" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="WhatsApp">wa</a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#departments">Departments</a></li>
                <li><a href="#doctors">Our Doctors</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#patient-guide">Patient Guide</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Col 3: Contact Information */}
            <div>
              <h3 className="footer-heading">Contact Information</h3>
              <div className="footer-contact-row">
                <MapPin size={16} style={{ color: "var(--red-main)", flexShrink: 0, marginTop: 2 }} />
                <span>5 No Gate Bypass Road, Khatkachak Rd, Magadh, Gaya, Naili, Bihar 823001</span>
              </div>
              <div className="footer-contact-row">
                <PhoneCall size={16} style={{ color: "#ff858d", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <a href="tel:07079150345">070791 50345</a> <br />
                  <a href="tel:9523602816">9523602816</a>
                </div>
              </div>
              <div className="footer-contact-row">
                <Clock size={16} style={{ color: "#60a5fa", flexShrink: 0, marginTop: 2 }} />
                <span>Open 24 Hours Emergency & OPD</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pulse+International+Hospital+Gaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-nav"
                  style={{ padding: "8px 16px", fontSize: "0.8rem", width: "100%", justifyContent: "center" }}
                >
                  <ExternalLink size={14} /> Get Directions
                </a>
              </div>
            </div>

            {/* Col 4: Google Maps Embed */}
            <div>
              <div className="footer-map-box">
                <iframe
                  title="Pulse International Hospital Gaya Map"
                  src="https://maps.google.com/maps?q=Pulse+International+Hospital+Gaya+Bihar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>© 2025 Pulse International Hospital, Gaya. All Rights Reserved.</div>
            <div>Privacy Policy | Terms & Conditions</div>
          </div>
        </div>
      </footer>

      {/* Floating Mobile Bottom Action Strip (Visible on mobile screens <= 768px) */}
      <div className="mobile-bottom-bar">
        <a href="tel:07079150345" className="mobile-bottom-btn emergency">
          <PhoneCall size={17} />
          <span>Emergency 24x7</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="mobile-bottom-btn book"
        >
          <Calendar size={17} />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* ========================================================
          14. APPOINTMENT BOOKING MODAL
          ======================================================== */}
      {modalOpen && (
        <div className="booking-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="booking-modal-card" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setModalOpen(false)}
              className="booking-modal-close"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {formSubmitted ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <CheckCircle2 size={44} color="#10b981" style={{ margin: "0 auto 12px" }} />
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--navy-title)", marginBottom: 8 }}>
                  Appointment Request Sent!
                </h3>
                <p style={{ color: "#4a5568", fontSize: "0.9rem", marginBottom: 20 }}>
                  Our hospital desk will call you shortly on your provided number to confirm your time slot.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="btn-hero-primary"
                  style={{ margin: "0 auto" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--navy-title)", marginBottom: 4 }}>
                  {modalDoctor ? `Book with ${modalDoctor}` : "Book Doctor Appointment"}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#64748b", marginBottom: 18 }}>
                  Pulse International Hospital, Khatkachak Rd, Gaya
                </p>

                <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, marginBottom: 4 }}>
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        border: "1px solid #cbd5e1",
                        borderRadius: 6
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, marginBottom: 4 }}>
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit phone number"
                      style={{
                        width: "100%",
                        padding: "10px 12px",
                        border: "1px solid #cbd5e1",
                        borderRadius: 6
                      }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, marginBottom: 4 }}>
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        style={{
                          width: "100%",
                          padding: "9px 10px",
                          border: "1px solid #cbd5e1",
                          borderRadius: 6
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, marginBottom: 4 }}>
                        Time Slot
                      </label>
                      <select style={{
                        width: "100%",
                        padding: "9px 10px",
                        border: "1px solid #cbd5e1",
                        borderRadius: 6,
                        background: "#fff"
                      }}>
                        <option>Morning (10 AM - 1 PM)</option>
                        <option>Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                    <button type="submit" className="btn-hero-primary" style={{ flex: 1, justifyContent: "center" }}>
                      Confirm Request
                    </button>
                    <a
                      href="https://wa.me/917079150345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero-call"
                      style={{ borderColor: "#25d366", color: "#15803d" }}
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
