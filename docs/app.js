// Page sections and the root App component. Built from the pieces in
// components.js and the content in data.js.

function Hero() {
  return React.createElement('section', {
    id: 'hero',
    style: {
      minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 var(--page-margin)', borderBottom: '2px solid var(--ink)', position: 'relative',
    },
  },
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-widest)', marginBottom: 16 } }, '*Mode: Portfolio'),
    React.createElement('h1', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-xl)', lineHeight: 'var(--lh-tight)', textTransform: 'uppercase', color: 'var(--cream)', letterSpacing: 'var(--tracking-tight)', margin: 0, maxWidth: '20ch' } }, 'Pierre de Laguiche'),
    React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)', maxWidth: '52ch', marginTop: 28, lineHeight: 'var(--lh-normal)' } }, 'Computer science student at Lancaster University, physics-minded, working toward quantum machine learning.'),
    React.createElement('div', { style: { display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' } },
      React.createElement(Button, { variant: 'primary', glyph: '▸', href: '#work' }, 'View Work'),
      React.createElement(Button, { variant: 'ghost', href: 'uploads/CV_Jun_26_English.pdf' }, 'Download CV'),
      React.createElement(Tag, { variant: 'status' }, 'Open to internships'),
    ),
  );
}

function About() {
  const [langMode, setLangMode] = React.useState('natural');
  const languages = langMode === 'natural' ? NATURAL_LANGUAGES : PROGRAMMING_LANGUAGES;
  return React.createElement('section', {
    id: 'about',
    style: { padding: '96px var(--page-margin)', borderBottom: '2px solid var(--ink)', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 64 },
  },
    React.createElement('div', null,
      React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', marginBottom: 16 } }, '01 / About'),
      React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-md)', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 24px', lineHeight: 'var(--lh-snug)', whiteSpace: 'pre-line' } }, 'Studying systems.\nChasing quantum ML.'),
      React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', color: 'var(--text-muted)', lineHeight: 'var(--lh-normal)', maxWidth: '60ch' } }, 'Currently reading Computer Science (Hons) at Lancaster University’s Leipzig campus, after an IB Diploma with high-level Mathematics, Physics and English. My Extended Essay modelled bicycle precession and self-stability — that mix of code and physics is what pulls me toward quantum machine learning next.'),
    ),
    React.createElement(PixelPanel, { label: 'Languages' },
      React.createElement('div', { style: { display: 'flex', gap: 8, marginBottom: 16 } },
        ['natural', 'programming'].map((mode) => React.createElement('button', {
          key: mode,
          onClick: () => setLangMode(mode),
          style: {
            fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-sm)', textTransform: 'uppercase',
            padding: '8px 14px', cursor: 'pointer', border: '2px solid var(--ink)',
            background: langMode === mode ? 'var(--lime)' : 'var(--void-2)',
            color: langMode === mode ? 'var(--ink)' : 'var(--cream)',
            boxShadow: langMode === mode ? 'none' : '3px 3px 0 var(--ink)',
            transform: langMode === mode ? 'translate(3px,3px)' : 'none',
          },
        }, mode === 'natural' ? 'Natural' : 'Programming'))),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
        languages.map(([lang, level]) => React.createElement('div', {
          key: lang,
          style: { display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', color: 'var(--cream)' },
        },
          React.createElement('span', null, lang),
          React.createElement('span', { style: { color: 'var(--text-muted)' } }, level)))),
    ),
  );
}

function ExperienceTimeline() {
  const row = (r) => React.createElement('div', {
    key: r.org + r.when,
    style: { display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--border-hairline)', fontFamily: 'var(--font-body)', alignItems: 'baseline' },
  },
    React.createElement('div', null,
      React.createElement('div', { style: { color: 'var(--cream)', fontWeight: 600 } }, r.role),
      React.createElement('div', { style: { color: 'var(--text-muted)', fontSize: 'var(--text-body-sm)' } }, r.org + (r.place ? ' · ' + r.place : ''))),
    React.createElement('div', { style: { color: 'var(--text-muted)', fontSize: 'var(--text-body-sm)', lineHeight: 'var(--lh-normal)' } }, r.note || ''),
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-sm)', whiteSpace: 'nowrap' } }, r.when),
  );
  return React.createElement('section', { id: 'cv', style: { padding: '96px var(--page-margin)', borderBottom: '2px solid var(--ink)' } },
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', marginBottom: 16 } }, '02 / CV'),
    React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-md)', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 32px' } }, 'Experience'),
    React.createElement(PixelPanel, { label: 'Save Data', variant: 'terminal' }, EXPERIENCE.map(row)),
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 } },
      React.createElement(PixelPanel, { label: 'Education' }, EDUCATION.map(row)),
      React.createElement(PixelPanel, { label: 'Diplomas' }, DIPLOMAS.map(row))),
  );
}

function ProjectsGrid({ onSelect }) {
  return React.createElement('section', { id: 'work', style: { padding: '96px var(--page-margin)', borderBottom: '2px solid var(--ink)' } },
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', marginBottom: 16 } }, '03 / Work'),
    React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-md)', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 32px' } }, 'Projects'),
    React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20 } },
      PROJECTS.map((p, i) => React.createElement('div', { key: p.id, onClick: () => onSelect(p), style: { cursor: 'pointer' } },
        React.createElement(Card, { index: i + 1, title: p.title, meta: p.meta, tags: p.tags }, p.summary)))),
  );
}

function PaperCard({ paper, onSelect }) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('div', {
    onClick: () => onSelect(paper),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: 'pointer', background: 'var(--void-2)', border: 'var(--border-thick) solid var(--ink)',
      boxShadow: hover ? 'var(--shadow-hard-lime)' : 'var(--shadow-hard-sm)',
      transform: hover ? 'translate(-2px,-2px)' : 'none', padding: '24px',
      color: 'var(--cream)', fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column',
    },
  },
    React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-sm)', textTransform: 'uppercase', lineHeight: 'var(--lh-snug)' } }, paper.title),
    React.createElement('div', { style: { fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 6 } }, paper.meta),
    React.createElement('div', { style: { fontSize: 'var(--text-body-md)', marginTop: 12, lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)', flexGrow: 1 } }, paper.summary),
    React.createElement('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 } },
      paper.tags.map((t) => React.createElement('span', {
        key: t,
        style: { fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-sm)', border: 'var(--border-thin) solid var(--border-hairline)', padding: '2px 8px', textTransform: 'uppercase' },
      }, t))),
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-sm)', color: 'var(--lime)', textTransform: 'uppercase', marginTop: 16 } }, '▸ Read paper'),
  );
}

function PapersSection({ onSelect }) {
  const categories = [];
  PAPERS.forEach((p) => { if (!categories.includes(p.category)) categories.push(p.category); });
  return React.createElement('section', { id: 'papers', style: { padding: '96px var(--page-margin)', borderBottom: '2px solid var(--ink)' } },
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', marginBottom: 16 } }, '04 / Papers'),
    React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-md)', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 12px' } }, 'Papers'),
    React.createElement('p', { style: { fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-md)', color: 'var(--text-muted)', maxWidth: '60ch', margin: '0 0 40px', lineHeight: 'var(--lh-normal)' } }, 'Selected written work — IB assessments and university coursework, all written in LaTeX. View each as a PDF in the browser or download the LaTeX source.'),
    categories.map((cat) => React.createElement('div', { key: cat, style: { marginBottom: 40 } },
      React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-sm)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', marginBottom: 16, borderBottom: '1px solid var(--border-hairline)', paddingBottom: 8 } }, '* ' + cat),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20 } },
        PAPERS.filter((p) => p.category === cat).map((p) => React.createElement(PaperCard, { key: p.id, paper: p, onSelect }))))),
  );
}

function PaperViewer({ paper, onClose }) {
  if (!paper) return null;
  return React.createElement('div', {
    onClick: onClose,
    style: { position: 'fixed', inset: 0, background: 'rgba(11,13,16,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 24 },
  },
    React.createElement('div', { onClick: (e) => e.stopPropagation(), style: { background: 'var(--void-2)', border: '2px solid var(--ink)', boxShadow: 'var(--shadow-hard-lg)', maxWidth: 900, width: '100%', display: 'flex', flexDirection: 'column', maxHeight: '92vh' } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 18px', borderBottom: '1px solid var(--steel-darker)', fontFamily: 'var(--font-pixel)', color: 'var(--lime)', textTransform: 'uppercase' } },
        React.createElement('span', null, '*Paper'),
        React.createElement('span', { onClick: onClose, style: { cursor: 'pointer', color: 'var(--cream)' } }, '× close')),
      React.createElement('div', { style: { padding: '20px 24px 0' } },
        React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 4px' } }, paper.title),
        React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--text-muted)', fontSize: 'var(--text-pixel-sm)', marginBottom: 16 } }, paper.meta)),
      React.createElement('div', { style: { padding: '0 24px', flexGrow: 1, minHeight: 0 } },
        React.createElement('iframe', { src: paper.pdf, title: paper.title, style: { width: '100%', height: '58vh', border: '2px solid var(--ink)', background: 'var(--cream)' } })),
      React.createElement('div', { style: { display: 'flex', gap: 16, flexWrap: 'wrap', padding: '18px 24px 24px' } },
        React.createElement(Button, { variant: 'primary', glyph: '↗', href: paper.pdf }, 'Open PDF'),
        paper.tex ? React.createElement('a', {
          href: paper.tex, download: true,
          style: { fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-md)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 20px', border: 'var(--border-thin) solid var(--border-hairline)', color: 'var(--cream)', textDecoration: 'none' },
        }, 'Download .tex') : null)),
  );
}

function Contact() {
  return React.createElement('section', { id: 'contact', style: { padding: '96px var(--page-margin)', textAlign: 'left' } },
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', marginBottom: 16 } }, '05 / Contact'),
    React.createElement('h2', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-lg)', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 32px', lineHeight: 'var(--lh-tight)', maxWidth: '16ch' } }, 'Let’s talk'),
    React.createElement('div', { style: { display: 'flex', gap: 16, flexWrap: 'wrap' } },
      React.createElement(Button, { variant: 'primary', glyph: '▸', href: 'mailto:pierre.delaguiche@gmail.com' }, 'pierre.delaguiche@gmail.com'),
      React.createElement(Button, { variant: 'secondary', href: 'https://github.com/pierredelaguiche' }, 'GitHub'),
      React.createElement(Button, { variant: 'ghost', href: 'tel:+4915147028433' }, '+49 151 47028433')),
    React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--steel)', fontSize: 'var(--text-pixel-sm)', marginTop: 64 } }, 'PdL © 2026'),
  );
}

function ProjectDetail({ project, onClose }) {
  if (!project) return null;
  return React.createElement('div', {
    onClick: onClose,
    style: { position: 'fixed', inset: 0, background: 'rgba(11,13,16,0.86)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 24 },
  },
    React.createElement('div', { onClick: (e) => e.stopPropagation(), style: { background: 'var(--void-2)', border: '2px solid var(--ink)', boxShadow: 'var(--shadow-hard-lg)', maxWidth: 640, width: '100%' } },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 18px', borderBottom: '1px solid var(--steel-darker)', fontFamily: 'var(--font-pixel)', color: 'var(--lime)', textTransform: 'uppercase' } },
        React.createElement('span', null, '*Project'),
        React.createElement('span', { onClick: onClose, style: { cursor: 'pointer', color: 'var(--cream)' } }, '× close')),
      React.createElement('div', { style: { padding: 32 } },
        React.createElement('h3', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 8px' } }, project.title),
        React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--text-muted)', marginBottom: 20 } }, project.meta),
        React.createElement('p', { style: { fontFamily: 'var(--font-body)', color: 'var(--text-muted)', lineHeight: 'var(--lh-normal)', fontSize: 'var(--text-body-md)' } }, project.detail),
        React.createElement('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 20 } },
          project.tags.map((t) => React.createElement(Tag, { key: t }, t))))),
  );
}

function App() {
  const [active, setActive] = React.useState('#hero');
  const [selected, setSelected] = React.useState(null);
  const [paper, setPaper] = React.useState(null);
  return React.createElement(React.Fragment, null,
    React.createElement(NavBar, { items: NAV_ITEMS, activeHref: active, ctaLabel: 'Resume', ctaHref: 'uploads/CV_Jun_26_English.pdf' }),
    React.createElement('div', { onClickCapture: (e) => { const a = e.target.closest('a[href^="#"]'); if (a) setActive(a.getAttribute('href')); } },
      React.createElement(Hero),
      React.createElement(About),
      React.createElement(ExperienceTimeline),
      React.createElement(ProjectsGrid, { onSelect: setSelected }),
      React.createElement(PapersSection, { onSelect: setPaper }),
      React.createElement(Contact)),
    React.createElement(ProjectDetail, { project: selected, onClose: () => setSelected(null) }),
    React.createElement(PaperViewer, { paper: paper, onClose: () => setPaper(null) }),
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
