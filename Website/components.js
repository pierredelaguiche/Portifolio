// Reusable UI building blocks. You shouldn't need to touch this file for
// content changes — see data.js for that.

function Button({ children, variant = 'primary', size = 'md', glyph, disabled = false, href, onClick }) {
  const base = {
    fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-md)', letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '10px',
    border: 'var(--border-thick) solid var(--ink)', borderRadius: 'var(--radius-none)', cursor: 'pointer',
    userSelect: 'none', textDecoration: 'none', transition: 'none',
  };
  const sizes = {
    md: { padding: '10px 20px' },
    lg: { padding: '16px 32px', fontSize: 'var(--text-pixel-lg)' },
  };
  const variants = {
    primary: { background: 'var(--lime)', color: 'var(--lime-ink)', boxShadow: 'var(--shadow-hard-sm)' },
    secondary: { background: 'var(--steel)', color: 'var(--ink)', border: 'var(--border-thick) solid var(--steel-darker)', boxShadow: 'var(--bevel-out)' },
    ghost: { background: 'transparent', color: 'var(--cream)', border: 'var(--border-thin) solid var(--border-hairline)', boxShadow: 'none' },
  };
  const style = { ...base, ...sizes[size], ...variants[variant], opacity: disabled ? 0.4 : 1, pointerEvents: disabled ? 'none' : 'auto' };
  const hoverStyle = variant === 'primary'
    ? { background: 'var(--cream)', color: 'var(--ink)' }
    : variant === 'secondary'
      ? { boxShadow: 'var(--bevel-in)', transform: 'translate(1px,1px)' }
      : { background: 'var(--cream)', color: 'var(--ink)', borderColor: 'var(--cream)' };

  const [hover, setHover] = React.useState(false);
  const content = React.createElement(React.Fragment, null,
    React.createElement('span', null, children),
    glyph ? React.createElement('span', { style: { fontSize: '0.85em', opacity: 0.8 } }, glyph) : null,
  );
  const props = {
    style: hover ? { ...style, ...hoverStyle } : style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
  };
  if (href) return React.createElement('a', { href, ...props }, content);
  return React.createElement('button', { disabled, ...props }, content);
}

function Tag({ children, variant = 'outline' }) {
  const base = {
    fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-sm)', letterSpacing: 'var(--tracking-wide)',
    textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '6px',
    padding: '4px 10px', border: 'var(--border-thin) solid currentColor', borderRadius: 'var(--radius-sm)',
  };
  const variants = {
    outline: { background: 'transparent', color: 'var(--cream)' },
    solid: { background: 'var(--lime)', color: 'var(--lime-ink)', border: 'var(--border-thin) solid var(--lime)' },
    status: { background: 'transparent', color: 'var(--cream)' },
  };
  if (variant === 'status') {
    return React.createElement('span', { style: { ...base, ...variants.status } },
      React.createElement('span', { style: { width: 7, height: 7, background: 'var(--lime)', display: 'inline-block' } }),
      children,
    );
  }
  return React.createElement('span', { style: { ...base, ...variants[variant] } }, children);
}

function NavBar({ items = [], activeHref, ctaLabel, ctaHref }) {
  return React.createElement('nav', {
    style: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px var(--page-margin)', borderBottom: 'var(--border-thick) solid var(--ink)',
      background: 'var(--void)', fontFamily: 'var(--font-pixel)',
    },
  },
    React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--cream)', letterSpacing: '-0.02em' } }, 'PdL'),
    React.createElement('div', { style: { display: 'flex', gap: 28 } },
      items.map((it) => React.createElement('a', {
        key: it.href,
        href: it.href,
        style: {
          color: it.href === activeHref ? 'var(--lime)' : 'var(--cream)', textDecoration: 'none',
          fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)',
        },
      }, it.href === activeHref ? '▸ ' : '', it.label))),
    ctaLabel
      ? React.createElement('a', {
        href: ctaHref || '#',
        style: {
          fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase', color: 'var(--lime-ink)',
          background: 'var(--lime)', padding: '6px 14px', textDecoration: 'none', border: 'var(--border-thick) solid var(--ink)',
        },
      }, ctaLabel)
      : React.createElement('span', null),
  );
}

function Card({ index, title, meta, tags = [], href, children }) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href: href || '#',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block', textDecoration: 'none', background: 'var(--void-2)',
      border: 'var(--border-thick) solid var(--ink)',
      boxShadow: hover ? 'var(--shadow-hard-lime)' : 'var(--shadow-hard-sm)',
      transform: hover ? 'translate(-2px,-2px)' : 'none',
      padding: '24px', color: 'var(--cream)', fontFamily: 'var(--font-body)',
    },
  },
    index != null ? React.createElement('div', { style: { fontFamily: 'var(--font-pixel)', color: 'var(--lime)', fontSize: 'var(--text-pixel-md)', marginBottom: 8 } }, String(index).padStart(2, '0')) : null,
    React.createElement('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-display-sm)', textTransform: 'uppercase', lineHeight: 'var(--lh-snug)' } }, title),
    meta ? React.createElement('div', { style: { fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', marginTop: 6 } }, meta) : null,
    children ? React.createElement('div', { style: { fontSize: 'var(--text-body-md)', marginTop: 12, lineHeight: 'var(--lh-normal)', color: 'var(--text-muted)' } }, children) : null,
    tags.length ? React.createElement('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 } },
      tags.map((t) => React.createElement('span', {
        key: t,
        style: { fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-sm)', border: 'var(--border-thin) solid var(--border-hairline)', padding: '2px 8px', textTransform: 'uppercase' },
      }, t))) : null,
  );
}

function PixelPanel({ label, children, variant = 'panel' }) {
  return React.createElement('div', {
    style: {
      background: variant === 'terminal' ? 'var(--void)' : 'var(--void-2)',
      border: 'var(--border-thick) solid var(--steel-darker)', boxShadow: 'var(--bevel-out)',
      fontFamily: 'var(--font-body)', color: 'var(--cream)',
    },
  },
    label ? React.createElement('div', {
      style: {
        fontFamily: 'var(--font-pixel)', fontSize: 'var(--text-pixel-md)', textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)', padding: '6px 14px', borderBottom: 'var(--border-thin) solid var(--steel-darker)',
        color: variant === 'terminal' ? 'var(--lime)' : 'var(--cream)',
      },
    }, '*', label) : null,
    React.createElement('div', { style: { padding: '20px' } }, children),
  );
}
