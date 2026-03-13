const items = [
  { id: 'home', href: '/', label: 'Дом' },
  { id: 'plus', href: '#', label: 'Добавить' },
  { id: 'chat', href: '#', label: 'Чат' },
  { id: 'flai', href: '/flai', label: 'Flai' },
];

function Icon({ id, active }) {
  const common = {
    width: 22,
    height: 22,
    borderRadius: '999px',
    border: '2px solid',
  };

  const color = active ? '#ffffff' : '#64748b';
  const borderColor = active ? '#ffffff' : '#cbd5e1';

  if (id === 'home') {
    // домик
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
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 4,
            right: 4,
            bottom: 11,
            height: 0,
            borderLeft: `2px solid transparent`,
            borderRight: `2px solid transparent`,
            borderBottom: `10px solid ${borderColor}`,
          }}
        />
      </div>
    );
  }

  if (id === 'plus') {
    // плюс в круге
    return (
      <div
        style={{
          ...common,
          borderColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        +
      </div>
    );
  }

  if (id === 'chat') {
    // два пузыря
    return (
      <div style={{ position: 'relative', width: 24, height: 24 }}>
        <div
          style={{
            position: 'absolute',
            left: 2,
            bottom: 4,
            width: 14,
            height: 10,
            borderRadius: 8,
            border: `2px solid ${borderColor}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 2,
            top: 2,
            width: 14,
            height: 10,
            borderRadius: 8,
            border: `2px solid ${borderColor}`,
            background: active ? '#ffffff' : 'transparent',
          }}
        />
      </div>
    );
  }

  if (id === 'flai') {
    // молния в круге
    return (
      <div
        style={{
          ...common,
          borderColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
          fontSize: 14,
        }}
      >
        ⚡
      </div>
    );
  }

  return null;
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
                width: 44,
                height: 44,
                borderRadius: 999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                background: isActive ? '#0f172a' : 'transparent',
                color: isActive ? '#ffffff' : '#64748b',
                transition: 'background 0.15s ease',
              }}
            >
              <Icon id={item.id} active={isActive} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
