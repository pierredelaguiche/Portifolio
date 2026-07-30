// All editable content lives here. Edit this file to update the site's text —
// you shouldn't need to touch components.js or app.js for content changes.

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'CV', href: '#cv' },
  { label: 'Papers', href: '#papers' },
  { label: 'Contact', href: '#contact' },
];

const NATURAL_LANGUAGES = [
  ['French', 'Native'],
  ['Portuguese', 'Native'],
  ['English', 'Fluent'],
  ['German', 'Fluent'],
  ['Italian', 'Conversational'],
];

const PROGRAMMING_LANGUAGES = [
  ['Python', 'Systems and OOP'],
  ['C', 'Systems'],
  ['Java', 'OOP'],
  ['MARS Assembly', 'Low-level'],
  ['Haskell', 'Functional'],
  ['LaTeX', 'Reports & essays'],
  ['Databricks', 'Data platform'],
  ['Azure', 'Cloud'],
  ['Git / GitHub', 'Version control'],
];

const EXPERIENCE = [
  { org: 'ETEX', role: 'Data Science & Automation Intern', place: 'Brussels, Belgium', when: '07.2026 – 09.2026', note: 'Three-month internship focused on data science and process automation, working in Databricks and Azure.' },
  { org: 'Schülerhilfe', role: 'Tutor for the Abitur', place: 'Leipzig, Germany', when: '09.2025 – 06.2026', note: 'Taught Mathematics, Physics and English for the 12th grade german equivalent.' },
  { org: 'Leipzig University', role: 'Guest Auditor — Physics', place: 'Leipzig, Germany', when: '09.2024 – 05.2025', note: 'Attended lectures and seminars of the Physics course alongside the CS degree.' },
  { org: 'Independent Projects', role: 'Various (CS50, 50 days of Python)', place: 'Leipzig, Germany', when: '06.2024 – Present', note: 'Prepared for university by building fluency across languages; code at github.com/pierredelaguiche.' },
];

const EDUCATION = [
  { org: 'Lancaster University', role: 'BSc Computer Science (Hons)', when: '10.2024 – Present' },
  { org: 'St. Charles International School', role: 'IB Diploma\nHL: Math AA, Physics, English | SL: Chemistry, Economics, German', when: '08.2022 – 06.2024' },
];

const DIPLOMAS = [
  { org: 'English Language Certificate — 98 (C1+)', role: 'TOEFL iBT', when: '08.2024' },
  { org: 'German Academic Language Certificate C1', role: 'Goethe-Zertifikat', when: '04.2026' },
];

// Written works — IB assessments and university coursework, written in LaTeX.
// `pdf`   : browser-viewable PDF (served from uploads/papers/).
// `tex`   : path to the LaTeX source (served from uploads/papers/). null hides
//           the LaTeX tab / download. Loaded at runtime by the viewer.
const PAPERS = [
  {
    id: 'scc200-design',
    title: 'Arcade Racing Game — Design Report',
    category: 'University',
    meta: 'LZSCC.200 · Group Project · 2026',
    tags: ['Python', 'Pygame', 'Game design', 'SDLC'],
    summary: 'Group design report for a 2D arcade-style car racing game in Python/Pygame, covering the full software development life cycle.',
    pdf: 'uploads/papers/scc200-design-report.pdf',
    tex: 'uploads/papers/scc200-design-report.tex',
  },
  {
    id: 'scc131-mars',
    title: 'MARS Grid Game — MIPS Assembly',
    category: 'University',
    meta: 'LZSCC.131 · Digital Systems · 2025',
    tags: ['MIPS Assembly', 'MARS', 'Low-level'],
    summary: 'Documentation for a grid-based game built in MIPS assembly on the MARS simulator, with a diagram of the code’s control flow.',
    pdf: 'uploads/papers/scc131-mars-game.pdf',
    tex: 'uploads/papers/scc131-mars-game.tex',
  },
  {
    id: 'physics-ee',
    title: 'Precession of a Bicycle Wheel',
    category: 'IB Diploma',
    meta: 'Physics · Extended Essay · 2024',
    tags: ['Physics', 'Gyroscopics', 'Rigid-body dynamics'],
    summary: 'Extended Essay (≈3,800 words) on the gyroscopic influence of a bicycle’s front wheel when torque is applied — the precession behind a bike’s stability.',
    pdf: 'uploads/papers/physics-ee.pdf',
    tex: 'uploads/papers/physics-ee.tex',
  },
  {
    id: 'physics-ia',
    title: 'The Maxwell Wheel',
    category: 'IB Diploma',
    meta: 'Physics · Internal Assessment · 2024',
    tags: ['Physics', 'Rotational dynamics', 'Experiment'],
    summary: 'Experimental determination of the moment of inertia of a Maxwell wheel, prompted by the apparent loss of weight of the spinning system.',
    pdf: 'uploads/papers/physics-ia.pdf',
    tex: 'uploads/papers/physics-ia.tex',
  },
  {
    id: 'chemistry-ia',
    title: 'Aspirin Hydrolysis Kinetics',
    category: 'IB Diploma',
    meta: 'Chemistry · Internal Assessment · 2024',
    tags: ['Chemistry', 'Kinetics', 'Experiment'],
    summary: 'Measuring how the first-order hydrolysis rate of acetylsalicylic acid (aspirin) changes across pH — a study of the drug’s stability and shelf life.',
    pdf: 'uploads/papers/chemistry-ia.pdf',
    tex: 'uploads/papers/chemistry-ia.tex',
  },
  {
    id: 'math-ia',
    title: 'The Monty Hall Problem',
    category: 'IB Diploma',
    meta: 'Mathematics · Internal Assessment · 2024',
    tags: ['Mathematics', 'Probability'],
    summary: 'A graphical generalisation of the Monty Hall problem to an arbitrary number of doors, prizes and reveals, grounded in conditional probability.',
    pdf: 'uploads/papers/math-ia.pdf',
    tex: 'uploads/papers/math-ia.tex',
  },
];
