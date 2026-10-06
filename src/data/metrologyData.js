// Authentic Company Data & Metrology Specifications for CAL TECHNOLOGIES

export const COMPANY_DETAILS = {
  name: "CAL TECHNOLOGIES",
  tagline: "CNC Machine Tool Calibration & Precision Metrology",
  shortDesc: "A machine maintenance and laser calibration service provider with experienced machine-tool engineering expertise.",
  stats: {
    machinesCalibrated: "5,000+",
    label: "CNC MACHINES CALIBRATED IN INDIA",
    description: "Range includes CNC Machining Centres, CNC Lathes, CNC SPMs, CNC Grinders, and advanced multi-axis machine tools."
  },
  emails: [
    { label: "Engineering & Technical", address: "tejas@caltech.co.in" },
    { label: "Customer Support", address: "support@caltech.co.in" },
    { label: "Field Service & Maintenance", address: "service@caltech.co.in" }
  ],
  phones: [
    { number: "+91 8722722396", raw: "8722722396", display: "+91 87227 22396" },
    { number: "+91 9742000900", raw: "9742000900", display: "+91 97420 00900" }
  ],
  headquarters: "Bangalore, Karnataka, India"
};

export const CAPABILITIES = [
  {
    id: "static-pos",
    title: "Static Positioning Error",
    subtitle: "Measurement & Correction",
    icon: "Target",
    desc: "Precision evaluation and laser compensation of linear positioning accuracy at designated target intervals across full axis travel.",
    benefit: "Eliminates cumulative linear drift and restores machine baseline accuracy.",
    standard: "ISO 230-2 / VDI/DGQ 3441",
    accuracy: "± 0.5 µm / m",
    graphic: "linear-grid"
  },
  {
    id: "linear-disp",
    title: "Linear Displacement Error & Bidirectional Repeatability",
    subtitle: "ISO 230-2 Standard Verification",
    icon: "Compass",
    desc: "Comprehensive measurement of unidirectional and bidirectional positional repeatability, assessing systematic and random positioning errors.",
    benefit: "Guarantees consistent part-to-part dimensions during high-volume production.",
    standard: "ISO 230-2 / ASME B5.54",
    accuracy: "Sub-micron repeatability",
    graphic: "bidirectional-arrows"
  },
  {
    id: "backlash-reversal",
    title: "Backlash, Reversal Error & Servo Loop Gains",
    subtitle: "Dynamic Drive & Leadscrew Assessment",
    icon: "Activity",
    desc: "Quantification of lost motion, ballscrew pre-load degradation, axis reversal spikes, and servo velocity loop gain tuning.",
    benefit: "Prevents surface step-marks on contour reversals and optimizes servo responsiveness.",
    standard: "ISO 230-2",
    accuracy: "Resolution down to 0.1 µm",
    graphic: "servo-wave"
  },
  {
    id: "straightness",
    title: "Vertical & Horizontal Straightness",
    subtitle: "Guideway Geometry & Alignment",
    icon: "Sliders",
    desc: "Measurement of pitch, yaw, and lateral straightness deviations along horizontal and vertical slideways using laser straightness optics.",
    benefit: "Detects machine bed wear, foundation settling, and mechanical guideway misalignment.",
    standard: "ISO 230-1",
    accuracy: "± 0.5 µm / m",
    graphic: "straightness-beam"
  },
  {
    id: "squareness",
    title: "Squareness Error of Axis",
    subtitle: "Orthogonality Measurement (X-Y, Y-Z, X-Z)",
    icon: "Maximize",
    desc: "Precision laser optical squaring and QC20-W ballbar orthogonal assessment across all intersecting perpendicular axes.",
    benefit: "Ensures true 90.000° geometric perpendicularity for machined box and prismatic features.",
    standard: "ISO 230-1",
    accuracy: "± 0.5 arcsec",
    graphic: "ortho-grid"
  },
  {
    id: "performance-acceptance",
    title: "Machine Performance & Acceptance Testing",
    subtitle: "New & Overhauled Machine Certification",
    icon: "ShieldCheck",
    desc: "Rigorous benchmark testing for new machine tool commissioning, vendor acceptance verification, and post-overhaul qualification.",
    benefit: "Protects capital investment by ensuring delivered machines meet OEM specified tolerances.",
    standard: "ISO 9001 / OEM Specifications",
    accuracy: "Full kinematic audit",
    graphic: "acceptance-badge"
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance & Error Compensation",
    subtitle: "Controller Compensation File Generation",
    icon: "Wrench",
    desc: "Direct pitch error and backlash compensation file generation for Fanuc, Siemens, Heidenhain, Mitsubishi controllers combined with preventive servicing.",
    benefit: "Directly uploads digital compensation tables into the CNC controller to restore ultra-precision without expensive mechanical re-scraping.",
    standard: "CNC Controller Direct Table",
    accuracy: "Direct pitch tables",
    graphic: "code-matrix"
  }
];

export const TECHNOLOGIES = [
  {
    id: "xl80",
    name: "RENISHAW XL-80",
    category: "Laser Interferometer System",
    headline: "High-Performance Measurement & Calibration for Motion Systems and Machine Tools",
    desc: "The Renishaw XL-80 laser interferometer offers the ultimate in high-performance measurement and calibration for motion systems, including CMMs and CNC machine tools. Provides laser beam wavelength stability of ±0.05 ppm, calibrated with environmental sensor compensation for air temperature, air pressure, and material thermal growth.",
    capabilities: [
      "Linear measurement up to 80 meters",
      "Dynamic data capture up to 50 kHz",
      "Angular pitch and yaw measurement",
      "Straightness and squareness optical setups",
      "Direct controller error compensation file generation"
    ],
    badge: "PRECISION METROLOGY SYSTEM 01",
    specs: {
      wavelength: "633 nm HeNe Laser",
      accuracy: "±0.5 ppm certified",
      resolution: "1 nm / 0.001 µm",
      range: "0 to 80 m"
    }
  },
  {
    id: "ballbar",
    name: "RENISHAW QC20-W",
    category: "Wireless Ballbar System",
    headline: "Determining Circularity Interpolation for Turning Centres & VMCs",
    desc: "The Renishaw Ballbar provides rapid, quantitative assessment of CNC machine tool contouring performance. By executing a circular test program with a calibrated telescoping transducer, it measures circularity deviation, backlash, reversal spikes, squareness error, cyclic error, and servo mismatch in 15 minutes.",
    capabilities: [
      "Circularity interpolation diagnosis",
      "Ballbar test for turning centres",
      "Ballbar test for vertical machining centres (VMCs)",
      "Minimum test radius: 50 mm",
      "ISO 230-4 and ASME B5.54 automated diagnostics"
    ],
    badge: "PRECISION METROLOGY SYSTEM 02",
    specs: {
      standardRadius: "50 mm to 150 mm+",
      sensorResolution: "0.1 µm",
      wirelessRange: "Bluetooth Class 1",
      testType: "XY, YZ, ZX Circular Planes"
    }
  },
  {
    id: "xr20",
    name: "RENISHAW XR20-W",
    category: "Rotary Axis Calibrator",
    headline: "Vertical & Horizontal Rotary Axis Calibration with XL-80 Collaboration",
    desc: "The XR20-W rotary axis calibrator works in collaboration with the XL-80 laser system providing highly accurate, repeatable rotary axis calibration for stages, indexing tables, trunnions, and 5-axis machine tools. Features auto-calibration pre-measurement cycle that automatically compensates for angular alignment errors.",
    capabilities: [
      "Vertical rotary axis calibration",
      "Horizontal rotary axis calibration",
      "Pre-measurement auto-calibration cycle",
      "Compensates for angular setup alignment errors",
      "Calibrates indexing tables, trunnions, and 5-axis swivel heads"
    ],
    badge: "PRECISION METROLOGY SYSTEM 03",
    specs: {
      accuracy: "±1 arc second",
      mounting: "Vertical & Horizontal axes",
      systemLink: "Works in synergy with XL-80",
      operation: "Wireless motorised indexing"
    }
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    label: "MACHINE",
    title: "Inspection & Baseline Setup",
    desc: "Initial machine tool inspection, warm-up stabilization, environmental sensor placement (temperature, air pressure), and optical alignment of laser/ballbar fixtures."
  },
  {
    step: "02",
    label: "MEASURE",
    title: "Laser Interferometry & Data Capture",
    desc: "Automated multi-pass G-code execution. High-speed measurement capturing linear displacement, straightness, angular pitch/yaw, and circularity interpolation."
  },
  {
    step: "03",
    label: "ANALYSE",
    title: "Deep Metrological Diagnostics",
    desc: "Computation of ISO 230-2, ISO 230-4, and VDI 3441 statistical parameters. Separation of geometric misalignment, ballscrew pitch error, backlash, and thermal drift."
  },
  {
    step: "04",
    label: "CORRECT",
    title: "CNC Pitch Error & Servo Compensation",
    desc: "Generation and direct controller upload of digital pitch compensation tables, backlash parameters, and servo loop optimization for Fanuc, Siemens, Heidenhain, etc."
  },
  {
    step: "05",
    label: "CERTIFY",
    title: "Verification & ISO 9001 Certification",
    desc: "Final verification scan proving sub-micron repeatability. Issuance of comprehensive Calibration Certificates and audit-ready metrology documentation."
  }
];

export const PRODUCTION_BENEFITS = [
  "Process control for high-precision machining operations",
  "Production scheduling aligned with verified machine capability",
  "Improved throughput through optimized feed rates & cutting parameters",
  "Reduced or eliminated costly part-cutting tests & sample destruction",
  "Consistent part-to-part geometric tolerance compliance"
];

export const MAINTENANCE_BENEFITS = [
  "Verify machine performance for acceptance testing & preventive maintenance",
  "Generate and verify pitch error compensation files for CNC controllers",
  "Rapid machine diagnosis reducing diagnosis time from days to minutes",
  "Reduced maintenance costs and minimized unplanned machine downtime",
  "Regular calibration and certification to meet ISO 9001 quality compliance",
  "Prolonged ballscrew, bearing, and linear guideway operating lifecycle"
];

export const INDUSTRIES = [
  {
    id: "aerospace",
    title: "AEROSPACE",
    desc: "Ultra-tight tolerance verification for aerostructures, turbine blisks, engine housings, and landing gear machining where zero-defect is mandatory.",
    tolerances: "< 0.005 mm",
    applications: "Aero Engine Housings, Titanium Spars, Blisks, Flight Control Hinges",
    accent: "bg-sky-500/10 border-sky-500/30 text-sky-400"
  },
  {
    id: "defence",
    title: "DEFENCE",
    desc: "Rigorous metrology and multi-axis certification for strategic defense manufacturing, missile housings, ordnance systems, and radar components.",
    tolerances: "< 0.003 mm",
    applications: "Missile Guidance Mounts, Armored Prismatic Casings, Strategic Tooling",
    accent: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
  },
  {
    id: "power",
    title: "POWER & ENERGY",
    desc: "Large-scale kinematic accuracy verification for steam and gas turbine casings, rotor shafts, nuclear components, and hydroelectric valves.",
    tolerances: "< 0.010 mm",
    applications: "Turbine Casings, Rotor Generator Shafts, Nuclear Valve Bodies",
    accent: "bg-amber-500/10 border-amber-500/30 text-amber-400"
  },
  {
    id: "heavy-engg",
    title: "HEAVY ENGINEERING",
    desc: "Geometric straightness and squareness alignment for massive gantry mills, floor borers, and heavy industrial machinery.",
    tolerances: "< 0.015 mm / 10m",
    applications: "Gantry Machining Centres, Heavy Earthmoving Tooling, Diesel Engine Blocks",
    accent: "bg-orange-500/10 border-orange-500/30 text-orange-400"
  },
  {
    id: "medical",
    title: "MEDICAL",
    desc: "Micro-machining and 5-axis calibration for orthopedic implants, titanium bone plates, surgical instruments, and medical device tooling.",
    tolerances: "< 0.002 mm",
    applications: "Orthopedic Joint Implants, Dental Fixtures, Surgical Instrumentation",
    accent: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
  },
  {
    id: "automotive",
    title: "AUTOMOTIVE",
    desc: "High-volume line certification, cylinder head/block machining center repeatability, and transmission gear tooling calibration.",
    tolerances: "< 0.008 mm",
    applications: "Cylinder Blocks, Crankcase Boring Lines, Transmission Gear Tooling",
    accent: "bg-red-500/10 border-red-500/30 text-red-400"
  }
];

export const SERVICE_LOCATIONS = {
  india: [
    { city: "Bangalore", state: "Karnataka", isHQ: true, coords: { x: 42, y: 72 }, desc: "Headquarters & Primary Metrology Labs" },
    { city: "Karnataka (Regional)", state: "Karnataka", coords: { x: 38, y: 68 }, desc: "Statewide Industrial Support" },
    { city: "Hyderabad", state: "Telangana", coords: { x: 45, y: 58 }, desc: "Aerospace & Precision Manufacturing Corridor" },
    { city: "Chennai", state: "Tamil Nadu", coords: { x: 48, y: 75 }, desc: "Automotive & Heavy Industry Hub" },
    { city: "Trivandrum", state: "Kerala", coords: { x: 40, y: 88 }, desc: "Aerospace & High-Tech Facilities" },
    { city: "Delhi / NCR", state: "Delhi", coords: { x: 40, y: 25 }, desc: "North India Industrial Belt" },
    { city: "Mumbai", state: "Maharashtra", coords: { x: 30, y: 55 }, desc: "Western Industrial Corridor" },
    { city: "Pune", state: "Maharashtra", coords: { x: 33, y: 58 }, desc: "Automotive & Die-Mould Precision Center" },
    { city: "Ahmedabad", state: "Gujarat", coords: { x: 26, y: 44 }, desc: "Machine Tool & Heavy Engineering Hub" },
    { city: "Kolkata", state: "West Bengal", coords: { x: 68, y: 45 }, desc: "East India Industrial Hub" },
    { city: "Jamshedpur", state: "Jharkhand", coords: { x: 62, y: 46 }, desc: "Heavy Metallurgy & Auto Tooling" }
  ],
  international: [
    { country: "Dubai", region: "UAE", desc: "GCC Precision Engineering Support" },
    { country: "Saudi Arabia", region: "Middle East", desc: "Energy & Industrial Infrastructure" },
    { country: "Qatar", region: "Middle East", desc: "Machining & Maintenance Projects" },
    { country: "Myanmar", region: "Southeast Asia", desc: "Regional Industrial Machine Tool Calibration" },
    { country: "Bahrain", region: "Middle East", desc: "Specialized Metrology Assistance" }
  ]
};

export const CUSTOMERS = [
  { name: "HAL", subtitle: "Hindustan Aeronautics Limited", sector: "Aerospace & Defence" },
  { name: "Godrej", subtitle: "Godrej Aerospace & Precision", sector: "Aerospace / Precision" },
  { name: "Toyota", subtitle: "Toyota Kirloskar Auto", sector: "Automotive" },
  { name: "Bosch", subtitle: "Bosch Rexroth & Precision", sector: "Automotive & Industrial" },
  { name: "Tata", subtitle: "Tata Advanced Systems", sector: "Aerospace & Strategic" },
  { name: "Royal Enfield", subtitle: "Eicher Motors Ltd", sector: "Automotive Powertrain" },
  { name: "L&T", subtitle: "Larsen & Toubro", sector: "Heavy Engineering & Defence" },
  { name: "Titan", subtitle: "Titan Engineering & Automation", sector: "Precision Micro-machining" },
  { name: "Dynamatic Technologies", subtitle: "Dynamatic Aerospace", sector: "Aerospace Structures" },
  { name: "BEML", subtitle: "Bharat Earth Movers Ltd", sector: "Defence & Heavy Rail" },
  { name: "VST Tillers", subtitle: "VST Precision Engineering", sector: "Power & Agriculture" },
  { name: "Cenerg", subtitle: "Cenerg Global Tools", sector: "Cutting Tools & Precision" },
  { name: "Streparava s.p.a.", subtitle: "Streparava Components", sector: "Automotive Tier 1" },
  { name: "Sikorsky", subtitle: "Sikorsky Aerospace Projects", sector: "Aviation Systems" },
  { name: "Starrag", subtitle: "Starrag High Precision", sector: "Machine Tool OEM" },
  { name: "Indo-MIM", subtitle: "Indo-MIM Complexity Simplified", sector: "Precision Metal Injection" },
  { name: "LMW", subtitle: "Lakshmi Machine Works", sector: "Textile & CNC Machines" },
  { name: "Ace Micromatic", subtitle: "Ace Micromatic Group", sector: "CNC Machine Tools" },
  { name: "Azad", subtitle: "Azad Engineering", sector: "Aerospace & Energy Components" }
];
