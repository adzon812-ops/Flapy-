const items = [
  { id: 'home', href: '/', icon: '🏠' },
  { id: 'plus', href: '#', icon: '+' },
  { id: 'chat', href: '#', icon: '💬' },
  { id: 'flai', href: '/flai', icon: '⚡' },
];

export default function BottomNav({ active }) {
  return (
    <nav
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: 16,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 420,
          width: '100%',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: 24,
          boxShadow: '0 4px 10px rgba(15,23,42,0.18)',
          display: 'flex',
          justifyContent: 'space-around',
          padding: 8,
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
              fontSize: 18,
              textDecoration: 'none',
              background: active === item.id ? '#0f172a' : 'transparent',
              color: active === item.id ? '#ffffff' : '#64748b',
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
