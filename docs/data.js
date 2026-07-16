// All editable content lives here. Edit this file to update the site's text —
// you shouldn't need to touch components.js or app.js for content changes.

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'CV', href: '#cv' },
  { label: 'Work', href: '#work' },
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
