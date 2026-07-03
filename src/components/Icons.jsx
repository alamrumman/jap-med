const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function LogoMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#2563EB" />
      <path
        d="M19 10h10a3 3 0 0 1 3 3v6h6a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-6v6a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3v-6h-6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h6v-6a3 3 0 0 1 3-3Z"
        fill="#fff"
      />
    </svg>
  )
}

export function SnowIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 2v20M4 6l16 12M20 6L4 18M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
    </svg>
  )
}

export function HeadIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M9 3a7 7 0 0 1 7 7c0 1.5-.4 2.6-1 3.7-.5.9-.7 1.6-.7 2.5V19a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1H7a2 2 0 0 1-2-2v-2.3L3.6 12A1 1 0 0 1 4.4 10H5a7 7 0 0 1 4-7Z" />
      <circle cx="11" cy="10" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BodyIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="M12 7v7m0 0-3 7m3-7 3 7M6 10l6-1.5L18 10" />
    </svg>
  )
}

export function ThermoIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M10 4a2 2 0 0 1 4 0v9.5a4.5 4.5 0 1 1-4 0Z" />
      <path d="M12 9v7" />
    </svg>
  )
}

export function LeafIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16Z" />
      <path d="M4 20c4-6 8-10 12-12" />
    </svg>
  )
}

export function ShieldIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.4 3 8.4 7 10 4-1.6 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function FlaskIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M10 3v6L4.7 18a2 2 0 0 0 1.8 3h11a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M8.5 3h7M7.5 15h9" />
    </svg>
  )
}

export function ClockIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

export function HeartIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 20.5C6.5 16.5 3 13.3 3 9.5A4.5 4.5 0 0 1 7.5 5c1.8 0 3.4 1 4.5 2.5C13.1 6 14.7 5 16.5 5A4.5 4.5 0 0 1 21 9.5c0 3.8-3.5 7-9 11Z" />
    </svg>
  )
}

export function DoctorIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      <path d="M12 14v4m-2-2h4" />
    </svg>
  )
}

export function CapsuleIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-35 12 12)" />
      <path d="m9.5 8.2 5 7.6" />
    </svg>
  )
}

export function FactoryIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M3 21V9l6 4V9l6 4V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16H3Z" />
      <path d="M7 17h2m4 0h2" />
    </svg>
  )
}

export function ArrowRight({ size = 16 }) {
  return (
    <svg
      className="arrow"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...base}
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

export function PlusIcon({ size = 18 }) {
  return (
    <svg
      className="faq-plus"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...base}
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MenuIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}
