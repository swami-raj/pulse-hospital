export interface Doctor {
  id: string;
  name: string;
  speciality: string;
  qualifications: string;
  experience: string;
  image: string;
  timing: string;
  opdDays: string;
  about: string;
  featured?: boolean;
}

export interface Department {
  id: string;
  name: string;
  category: 'clinical' | 'surgical' | 'critical' | 'diagnostic';
  icon: string;
  shortDesc: string;
  detailedDesc: string;
  keyServices: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image?: string;
  highlight: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  quote: string;
  date: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  points: string[];
}

export const HOSPITAL_INFO = {
  name: "Pulse International Hospital",
  tagline: "Quality Healthcare for a Healthier Tomorrow",
  registration: "Reg. No. CE/GAY/2025/NH-538",
  address: "5 No Gate Bypass Road, Khatkachak Rd, Magadh, Gaya, Naili, Bihar - 823001",
  phones: ["070791 50345", "9523602816"],
  emergencyPhone: "07079150345",
  whatsappNumber: "+917079150345",
  email: "info@pulsehospitalgaya.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pulse+International+Hospital+Gaya",
  timings: "Open 24 Hours / 7 Days (Emergency, ICU & OPD)",
};

export const DEPARTMENTS: Department[] = [
  {
    id: "gen-med",
    name: "General Medicine",
    category: "clinical",
    icon: "Stethoscope",
    shortDesc: "Comprehensive diagnosis and non-surgical management of acute and chronic systemic diseases.",
    detailedDesc: "Our General Medicine department is staffed by experienced physicians handling hypertension, diabetes, seasonal fevers, respiratory infections, and complex multi-system disorders.",
    keyServices: ["Diabetes & Thyroid Management", "Hypertension & Lifestyle Disorders", "Infectious Disease Management", "Geriatric & Preventive Health"]
  },
  {
    id: "gen-surg",
    name: "General & Laparoscopic Surgery",
    category: "surgical",
    icon: "Scissors",
    shortDesc: "Advanced minimally invasive, laparoscopic, and open surgical procedures with sterile precision.",
    detailedDesc: "Equipped with state-of-the-art modular operation theatres, our surgical team specializes in minimally invasive laparoscopic procedures ensuring faster patient recovery.",
    keyServices: ["Laparoscopic Gallbladder & Appendix", "Hernia Repairs (Mesh/Lap)", "Trauma & Emergency Abdominal Surgery", "Anorectal & Soft Tissue Surgeries"]
  },
  {
    id: "neuro",
    name: "Neurology & Neurosciences",
    category: "clinical",
    icon: "Brain",
    shortDesc: "Specialized tertiary care for stroke, epilepsy, neuromuscular disorders, and spine conditions.",
    detailedDesc: "Full-spectrum neurological diagnosis and medical treatment supported by advanced neuro-imaging, stroke protocol, and neuro-intensive critical care.",
    keyServices: ["Acute Stroke Thrombolysis Protocol", "Epilepsy & Seizure Clinic", "Headache & Migraine Center", "Neuropathy & Movement Disorders"]
  },
  {
    id: "ortho",
    name: "Orthopedics & Joint Replacement",
    category: "surgical",
    icon: "Bone",
    shortDesc: "Complete bone, joint, trauma, fracture management, and joint restoration surgeries.",
    detailedDesc: "Expert orthopedic surgeons performing complex trauma reconstructions, arthroscopic repairs, and treatment for sports injuries and degenerative joint diseases.",
    keyServices: ["Complex Fracture & Trauma Care", "Arthritis & Joint Preservation", "Spine Care & Disc Problems", "Pediatric Orthopedics & Sports Medicine"]
  },
  {
    id: "gynae",
    name: "Obstetrics & Gynecology",
    category: "clinical",
    icon: "UserHeart",
    shortDesc: "Dedicated women's health, maternity care, high-risk pregnancies, and gynecological surgeries.",
    detailedDesc: "From pre-pregnancy counseling and painless labor delivery to advanced laparoscopic gynecological surgeries, we provide tender and modern care for women at every stage.",
    keyServices: ["Antenatal & High-Risk Pregnancy Care", "Normal & Cesarean Deliveries", "Infertility Evaluation", "Hysterectomy & Laparoscopic Gynae"]
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Neonatology",
    category: "critical",
    icon: "Baby",
    shortDesc: "Gentle medical care for infants, children, and specialized round-the-clock NICU support.",
    detailedDesc: "Our pediatricians and neonatal intensivists provide complete child healthcare, vaccination programs, and dedicated critical care for premature and sick newborns.",
    keyServices: ["Level III Neonatal ICU (NICU)", "Childhood Immunization & Growth Tracking", "Pediatric Infectious Illnesses", "Emergency Pediatric Resuscitation"]
  },
  {
    id: "cardio",
    name: "Cardiology & Chest Diseases",
    category: "clinical",
    icon: "HeartPulse",
    shortDesc: "Heart health diagnostics, cardiac monitoring, chest pain assessment, and preventive cardiology.",
    detailedDesc: "Timely cardiac evaluation with ECG, 2D Echocardiography, cardiac biomarkers, and stabilization in our intensive coronary care setup.",
    keyServices: ["24/7 Cardiac Emergency Management", "ECG, 2D Echo & Cardiac Markers", "Hypertension & Heart Failure Clinic", "Preventive Cardiovascular Screening"]
  },
  {
    id: "urology",
    name: "Urology & Kidney Care",
    category: "surgical",
    icon: "Activity",
    shortDesc: "Treatment for kidney stones, prostate disorders, urinary infections, and renal conditions.",
    detailedDesc: "Advanced endo-urological procedures for kidney stones, laser prostate treatments, and comprehensive medical management of urinary tract disorders.",
    keyServices: ["Kidney & Ureteric Stone Treatments", "Prostate Enlargement Management", "UTI & Bladder Disorders", "Dialysis Coordination"]
  },
  {
    id: "ent",
    name: "ENT (Ear, Nose & Throat)",
    category: "clinical",
    icon: "Ear",
    shortDesc: "Diagnostic endoscopies, microsurgeries, sinusitis management, and hearing solutions.",
    detailedDesc: "Comprehensive diagnosis and treatment for acute and chronic disorders affecting the ears, nose, sinuses, throat, and vocal cords.",
    keyServices: ["Microscopic Ear Surgeries", "Endoscopic Sinus Surgery (FESS)", "Tonsil & Adenoid Management", "Vertigo & Hearing Evaluation"]
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology (Eye Care)",
    category: "clinical",
    icon: "Eye",
    shortDesc: "Routine eye screenings, vision correction, cataract evaluation, and eye trauma emergency.",
    detailedDesc: "Modern optical diagnostics and surgical solutions ensuring crystal-clear vision and proactive management of diabetic eye conditions and glaucoma.",
    keyServices: ["Cataract & Glaucoma Screening", "Diabetic Retinopathy Check", "Refractive Error Corrections", "Ocular Trauma Emergency Care"]
  },
  {
    id: "radiology",
    name: "Radiology & Diagnostic Imaging",
    category: "diagnostic",
    icon: "Scan",
    shortDesc: "High-resolution digital X-rays, ultrasonography, color Doppler, and computerized reports.",
    detailedDesc: "Round-the-clock imaging services delivering rapid, accurate scans essential for immediate diagnosis in trauma, stroke, and internal emergencies.",
    keyServices: ["Digital X-Ray (High Frequency)", "Ultrasonography & 4D Obstetric Scan", "Color Doppler Studies", "Emergency Portable Bedside X-Ray"]
  },
  {
    id: "icu-critical",
    name: "ICU & Critical Care Medicine",
    category: "critical",
    icon: "ShieldAlert",
    shortDesc: "Intensive care unit with multi-parameter monitors, ventilators, and dedicated intensivists 24/7.",
    detailedDesc: "Equipped with high-end mechanical ventilators, invasive arterial monitoring, central oxygenation, and continuous life support systems.",
    keyServices: ["Advanced Mechanical Ventilation", "Sepsis & Multi-Organ Failure Care", "24/7 In-House Intensivist Team", "Post-Surgical Critical Monitoring"]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-sudhir",
    name: "Dr. Sudhir Kumar",
    speciality: "General Physician & Surgeon",
    qualifications: "MBBS, MS (General Surgery)",
    experience: "18+ Years Experience",
    image: "/images/doctor_sudhir.jpg",
    timing: "10:00 AM - 02:00 PM & 05:00 PM - 08:00 PM",
    opdDays: "Monday to Saturday",
    about: "Dr. Sudhir Kumar is a veteran surgeon and clinician with extensive expertise in laparoscopic abdominal surgeries, trauma cases, and acute clinical emergencies.",
    featured: true
  },
  {
    id: "dr-prabhat",
    name: "Dr. Prabhat Kumar",
    speciality: "Senior Neuro Physician",
    qualifications: "MBBS, MD (Medicine), DM (Neurology)",
    experience: "15+ Years Experience",
    image: "/images/doctor_prabhat.jpg",
    timing: "11:00 AM - 03:00 PM",
    opdDays: "Monday, Wednesday, Friday, Saturday",
    about: "Dr. Prabhat Kumar specializes in acute ischemic stroke interventions, intractable epilepsy, migraine disorders, and peripheral neuropathy care.",
    featured: true
  },
  {
    id: "dr-anjali",
    name: "Dr. Anjali Verma",
    speciality: "Obstetrics & Gynecology",
    qualifications: "MBBS, DGO, DNB (Obs & Gynae)",
    experience: "14+ Years Experience",
    image: "/images/doctor_anjali.jpg",
    timing: "10:30 AM - 04:30 PM",
    opdDays: "Monday to Saturday",
    about: "Dr. Anjali Verma is renowned for compassionate maternal care, high-risk obstetric cases, painless natural births, and minimally invasive laparoscopic gynecological procedures.",
    featured: true
  },
  {
    id: "dr-rajeev",
    name: "Dr. Rajeev Singh",
    speciality: "Orthopedic & Joint Surgeon",
    qualifications: "MBBS, MS (Orthopedics)",
    experience: "12+ Years Experience",
    image: "/images/doctor_rajeev.jpg",
    timing: "12:00 PM - 06:00 PM",
    opdDays: "Tuesday, Thursday, Saturday",
    about: "Dr. Rajeev Singh is an accomplished orthopedic specialist focusing on complex trauma fractures, sports injury ligament reconstructions, and degenerative joint pain therapies.",
    featured: true
  },
  {
    id: "dr-neha",
    name: "Dr. Neha Sinha",
    speciality: "Consultant Pediatrician & Neonatologist",
    qualifications: "MBBS, MD (Pediatrics), Fellowship Neonatology",
    experience: "10+ Years Experience",
    image: "/images/doctor_neha.jpg",
    timing: "09:30 AM - 02:30 PM",
    opdDays: "Monday to Saturday",
    about: "Dr. Neha Sinha provides warm, child-friendly care from newborn life support in the NICU to pediatric growth assessments, vaccines, and adolescent wellness.",
    featured: true
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "icu-facility",
    title: "Advanced ICU & NICU",
    highlight: "24/7 Critical Care with Ventilators",
    description: "State-of-the-art Intensive Care Unit with dedicated central monitoring stations, modern ventilators, defibrillators, and isolation bays for critical patients.",
    image: "/images/hospital_icu.jpg",
    features: ["Dedicated Intensivist 24/7", "High-End Invasive Ventilators", "Level-III Neonatal ICU (NICU)", "Zero-Infection Air Filtration"]
  },
  {
    id: "ot-facility",
    title: "Modular Operation Theatres",
    highlight: "Sterile Laminar Airflow Suites",
    description: "Precision-engineered modular OTs equipped with LED surgical lights, high-definition laparoscopy towers, and computerized anesthesia workstations.",
    image: "/images/operation_theatre.jpg",
    features: ["Laminar Airflow with HEPA Filters", "Advanced Laparoscopy Systems", "C-Arm Image Intensifier", "Complete Emergency Power Backup"]
  },
  {
    id: "emergency-facility",
    title: "24/7 Emergency & Trauma Centre",
    highlight: "Zero Delay Immediate Triage",
    description: "Round-the-clock emergency medical team prepared to handle severe trauma, road accidents, cardiac crises, poisoning, and acute medical emergencies.",
    image: "/images/hospital_building.jpg",
    features: ["Instant Triage Protocols", "Direct Ambulance Bay Access", "Minor OT & Resuscitation Bay", "Round-the-clock Blood & Diagnostics"]
  },
  {
    id: "pathology-facility",
    title: "24/7 Automated Pathology Lab",
    highlight: "High Accuracy Clinical Diagnostics",
    description: "Fully automated biochemistry, hematology, microbiology, and hormone analyzers for quick turnaround times and precise medical decision-making.",
    features: ["Automated Cell Counters", "Cardiac & Hormone Profile Assays", "Rapid Blood Grouping & Crossmatch", "Digital Online Report Access"]
  },
  {
    id: "pharmacy-facility",
    title: "24/7 In-House Hospital Pharmacy",
    highlight: "Genuine Certified Medicines",
    description: "Well-stocked dispensary operating 24 hours daily with temperature-controlled storage for vaccines, critical care drugs, and surgical consumables.",
    features: ["100% Genuine Certified Stocks", "Emergency Injectables & ICU Drugs", "Surgical Implants & Disposables", "Bedside Medication Delivery"]
  },
  {
    id: "ambulance-facility",
    title: "Advanced Life Support (ALS) Ambulance",
    highlight: "Mobile ICU On Wheels",
    description: "Fleet of GPS-enabled ambulances equipped with transport ventilators, cardiac monitors, oxygen cylinders, and trained paramedics for rapid patient transport.",
    features: ["Transport Ventilator & Defibrillator", "Oxygen & Suction Systems", "Trained Paramedic Onboard", "Instant Gaya & Magadh Coverage"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rameshwar Prasad Sharma",
    location: "Magadh Colony, Gaya",
    rating: 5,
    treatment: "Emergency Trauma & Surgery",
    quote: "Pulse International Hospital saved my brother's life after a severe highway accident. The emergency response was prompt without any unnecessary paper delays. Dr. Sudhir Kumar and the ICU staff took care of everything with exceptional dedication.",
    date: "February 2026"
  },
  {
    id: "test-2",
    name: "Sunita Kumari",
    location: "Khatkachak, Gaya",
    rating: 5,
    treatment: "Maternity & Normal Delivery",
    quote: "We had our first baby at Pulse International Hospital under Dr. Anjali Verma. The hospital rooms are very clean and hygienic. The nursing staff treated us like family, and the baby care facilities were top tier.",
    date: "January 2026"
  },
  {
    id: "test-3",
    name: "Mohammad Arif",
    location: "Civil Lines, Gaya",
    rating: 5,
    treatment: "Neuro Treatment & Rehabilitation",
    quote: "Dr. Prabhat Kumar is one of the finest neuro physicians in Bihar. His diagnosis for my mother's stroke recovery was spot on. Clear explanations, transparent charges, and very cooperative administration.",
    date: "March 2026"
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "Recognizing Early Signs of Heart Attack & Stroke",
    category: "Cardiology & Emergency",
    readTime: "3 min read",
    summary: "Time is muscle and brain tissue. Knowing the 'FAST' protocol and warning signals can save lives before arriving at the emergency department.",
    points: [
      "Chest heaviness or discomfort radiating to left arm, neck, or jaw",
      "Face drooping, arm weakness, or slurred speech (FAST rule)",
      "Unexplained sudden dizziness or breathlessness at rest",
      "Reach the emergency within the 'Golden Hour' (Call 070791 50345)"
    ]
  },
  {
    id: "tip-2",
    title: "Essential Preventive Health Checkups by Age",
    category: "Wellness & Diagnostics",
    readTime: "4 min read",
    summary: "Routine laboratory tests and blood pressure evaluations can catch silent conditions like hypertension and diabetes years before complications arise.",
    points: [
      "Annual Fasting Blood Sugar and HbA1c test after age 30",
      "Lipid profile and kidney function test every 12 to 18 months",
      "Blood pressure monitoring once every 3 months for adults",
      "Bone mineral density screening for women aged 45 and above"
    ]
  },
  {
    id: "tip-3",
    title: "Vital Antenatal Care Guidelines for Expecting Mothers",
    category: "Maternity & Pediatrics",
    readTime: "3 min read",
    summary: "Timely ultrasound scans, balanced nutrition, and iron-folate supplementation build the foundation for a healthy pregnancy and safe delivery.",
    points: [
      "Routine obstetric scans at 12 weeks (NT) and 20 weeks (Anomaly)",
      "Adequate hydration and iron-rich diet throughout gestation",
      "Strict monitoring of blood pressure to avoid pre-eclampsia",
      "Immediate consultation if fetal movements feel decreased"
    ]
  }
];

export const STATS = [
  { number: "10,000+", label: "Happy Patients Treated", subtext: "Across Gaya & Magadh region" },
  { number: "30+", label: "Specialities & Services", subtext: "Comprehensive under one roof" },
  { number: "50+", label: "Experienced Medical Staff", subtext: "Specialists, surgeons & nurses" },
  { number: "100+", label: "Beds Capacity", subtext: "ICU, NICU, IPD & Private Deluxe" },
  { number: "24/7", label: "Emergency & Critical Care", subtext: "With round-the-clock ambulance" },
  { number: "100%", label: "Digital Diagnostics", subtext: "Advanced automated lab & X-ray" }
];
