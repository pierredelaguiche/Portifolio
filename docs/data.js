// All editable content lives here. Edit this file to update the site's text —
// you shouldn't need to touch components.js or app.js for content changes.

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'CV', href: '#cv' },
  { label: 'Work', href: '#work' },
  { label: 'Papers', href: '#papers' },
  { label: 'Contact', href: '#contact' },
];

const NATURAL_LANGUAGES = [
  ['French', 'Native'],
  ['Portuguese', 'Native'],
  ['English', 'Fluent · C1+'],
  ['German', 'Fluent · C1'],
  ['Italian', 'Conversational'],
];

const PROGRAMMING_LANGUAGES = [
  ['Python', 'Daily driver'],
  ['C', 'Systems'],
  ['Java', 'Coursework'],
  ['MARS Assembly', 'Low-level'],
  ['LaTeX', 'Reports & essays'],
  ['Haskell', 'Learning'],
];

const EXPERIENCE = [
  { org: 'ETEX', role: 'Data Science & Automation Intern', place: 'Brussels, Belgium', when: '07.2026 – 09.2026', note: 'Three-month internship focused on data science and process automation.' },
  { org: 'Schülerhilfe', role: 'Student Tutor', place: 'Leipzig, Germany', when: '09.2025 – 06.2026', note: 'Taught Mathematics, Physics and English in-person.' },
  { org: 'Independent Projects', role: 'CS50 + 30 Days of Python', place: 'Leipzig, Germany', when: '06.2024 – 08.2024', note: 'Prepared for university by building fluency across languages; code at github.com/pierredelaguiche.' },
  { org: 'Saint-Charles International School', role: 'Student', place: 'Porrentruy, Switzerland', when: '06.2022 – 06.2024', note: 'High-level Mathematics and Physics; Extended Essay on bicycle mechanics and precession.' },
];

const EDUCATION = [
  { org: 'Lancaster University', role: 'BSc Computer Science (Hons)', when: '10.2024 – Present' },
  { org: 'Saint-Charles International School', role: 'IB Diploma', when: '08.2022 – 06.2024' },
];

const DIPLOMAS = [
  { org: 'TOEFL iBT', role: 'English Language Certificate — 98 (C1+)', when: '2024' },
  { org: 'Goethe-Zertifikat C1', role: 'German Language Certificate', when: '2026' },
];

const PROJECTS = [
  {
    id: 'bicycle',
    title: 'Bicycle Precession Model',
    meta: 'Physics · Extended Essay · 2024',
    tags: ['Python', 'Physics', 'Numerical modelling'],
    summary: 'Numerical model of bicycle self-stability under precession, written for the IB Extended Essay.',
    detail: 'Investigated how gyroscopic precession in a spinning wheel contributes to a riderless bicycle’s self-righting behaviour. Built a small numerical simulation in Python to test the analytical model against simplified rigid-body assumptions, then compared the results against the classic literature on bicycle dynamics.',
  },
  {
    id: 'cs50',
    title: 'CS50 + 30 Days of Python',
    meta: 'Independent study · 2024',
    tags: ['C', 'Python', 'Algorithms'],
    summary: 'Completed Harvard’s CS50 and the 30 Days of Python challenge ahead of starting university.',
    detail: 'Worked through CS50’s problem sets (memory, data structures, algorithms in C) alongside a 30-day Python challenge, to build fluency across languages before starting a Computer Science degree. Code and exercises are published at github.com/pierredelaguiche.',
  },
  {
    id: 'qml',
    title: 'Quantum Machine Learning',
    meta: 'Current focus',
    tags: ['Qiskit', 'Linear algebra', 'ML'],
    summary: 'Self-directed reading toward quantum machine learning — the intended focus of graduate study.',
    detail: 'No shipped project yet — currently building the prerequisites (linear algebra, quantum computing fundamentals, classical ML) with the goal of specialising in quantum machine learning at the graduate level.',
  },
];

// Written works — IB assessments and university coursework, written in LaTeX.
// Each paper links to a browser-viewable PDF and, where available, its LaTeX
// (.tex) source. Files are served from uploads/papers/. A `tex` of null hides
// the download button until the source is added.
const PAPERS = [
  {
    id: 'physics-ee',
    title: 'Precession of a Bicycle Wheel',
    category: 'IB Diploma',
    meta: 'Physics · Extended Essay · 2024',
    tags: ['Physics', 'Gyroscopics', 'Rigid-body dynamics'],
    summary: 'Extended Essay (≈3,800 words) on the gyroscopic influence of a bicycle’s front wheel when torque is applied — the precession behind a bike’s stability.',
    pdf: 'uploads/papers/physics-ee.pdf',
    tex: null,
  },
  {
    id: 'physics-ia',
    title: 'The Maxwell Wheel',
    category: 'IB Diploma',
    meta: 'Physics · Internal Assessment · 2024',
    tags: ['Physics', 'Rotational dynamics', 'Experiment'],
    summary: 'Experimental determination of the moment of inertia of a Maxwell wheel, prompted by the apparent loss of weight of the spinning system.',
    pdf: 'uploads/papers/physics-ia.pdf',
    tex: null,
  },
  {
    id: 'chemistry-ia',
    title: 'Aspirin Hydrolysis Kinetics',
    category: 'IB Diploma',
    meta: 'Chemistry · Internal Assessment · 2024',
    tags: ['Chemistry', 'Kinetics', 'Experiment'],
    summary: 'Measuring how the first-order hydrolysis rate of acetylsalicylic acid (aspirin) changes across pH — a study of the drug’s stability and shelf life.',
    pdf: 'uploads/papers/chemistry-ia.pdf',
    tex: null,
  },
  {
    id: 'math-ia',
    title: 'The Monty Hall Problem',
    category: 'IB Diploma',
    meta: 'Mathematics · Internal Assessment · 2024',
    tags: ['Mathematics', 'Probability'],
    summary: 'A graphical generalisation of the Monty Hall problem to an arbitrary number of doors, prizes and reveals, grounded in conditional probability.',
    pdf: 'uploads/papers/math-ia.pdf',
    tex: null,
  },
  {
    id: 'scc200-design',
    title: 'Arcade Racing Game — Design Report',
    category: 'University',
    meta: 'LZSCC.200 · Group Project · 2026',
    tags: ['Python', 'Pygame', 'Game design', 'SDLC'],
    summary: 'Group design report for a 2D arcade-style car racing game in Python/Pygame, covering the full software development life cycle.',
    pdf: 'uploads/papers/scc200-design-report.pdf',
    tex: null,
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
];
