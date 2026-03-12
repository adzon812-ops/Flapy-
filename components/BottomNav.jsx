const items = [
  { id: 'home', href: '/', icon: '🏠' },
  { id: 'plus', href: '#', icon: '＋' },
  { id: 'chat', href: '#', icon: '💬' },
  { id: 'flai', href: '/flai', icon: '⚡' },
];

export default function BottomNav({ active }) {
  return (
    <nav
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 12,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: 360,
          background: '#ffffff',
          borderRadius: 999,
          boxShadow: '0 6px 18px rgba(15,23,42,0.25)',
          display: 'flex',
          justifyContent: 'space-around',
          padding: 8,
          pointerEvents: 'auto',
        }}
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            style={{
              width: 40,
              height: 40,
              borderRadius: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              textDecoration: 'none',
              background: active === item.id ? '#0f172a' : 'transparent',
              color: active === item.id ? '#ffffff' : '#64748b',
              transition: 'background 0.15s ease',
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
