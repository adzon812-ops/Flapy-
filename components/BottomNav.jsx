const items = [
  { id: 'home', label: 'Дом', href: '/' },
  { id: 'plus', label: 'Добавить', href: '#' },
  { id: 'chat', label: 'Чат', href: '#' },
  { id: 'flai', label: 'Flai', href: '/flai' },
];

function IconHome({ active }) {
  const borderColor = active ? '#ffffff' : '#cbd5e1';
  return (
    <div style={{ position: 'relative', width: 24, height: 24 }}>
      <div
        style={{
          position: 'absolute',
          left: 2,
          right: 2,
          bottom: 3,
          height: 10,
          borderRadius: 4,
          border: `2px solid ${borderColor}`,
          borderTop: 'none',
          transition: 'border-color 200ms ease-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 4,
          right: 4,
          bottom: 11,
          height: 0,
          borderLeft: '2px solid transparent',
          borderRight: '2px solid transparent',
          borderBottom: `10px solid ${borderColor}`,
          transition: 'border-bottom-color 200ms ease-out',
        }}
      />
    </div>
  );
}

export default function BottomNav({ active }) {
  return (
    <nav
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 16,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '88%',
          maxWidth: 360,
          background: '#ffffff',
          borderRadius: 999,
          boxShadow: '0 10px 24px rgba(15,23,42,0.25)',
          display: 'flex',
          justifyContent: 'space-around',
          padding: 8,
          pointerEvents: 'auto',
        }}
      >
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              style={{
                width: 48,
                height: 48,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                background: isActive ? '#0f172a' : 'transparent',
                color: isActive ? '#ffffff' : '#64748b',
                transition:
                  'background-color 220ms ease-out, transform 180ms ease-out',
                transform: isActive ? 'scale(1.06)' : 'scale(1)',
              }}
            >
              {item.id === 'home' && <IconHome active={isActive} />}
              {/* позже добавим IconPlus, IconChat, IconFlai */}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
