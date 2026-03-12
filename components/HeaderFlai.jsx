export default function HeaderFlai() {
  return (
    <header
      style={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: '#f97316',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          F
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Flai</div>
          <div style={{ fontSize: 11, color: '#64748b' }}>умный помощник по жилью</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11 }}>
        <div
          style={{
            display: 'flex',
            borderRadius: 999,
            border: '1px solid #cbd5e1',
            overflow: 'hidden',
          }}
        >
          <button
            style={{
              padding: '4px 8px',
              background: '#0f172a',
              color: '#ffffff',
              border: 'none',
            }}
          >
            RU
          </button>
          <button
            style={{
              padding: '4px 8px',
              background: '#ffffff',
              color: '#64748b',
              border: 'none',
            }}
          >
            KZ
          </button>
        </div>
        <button
          style={{
            width: 28,
            height: 28,
            borderRadius: 999,
            border: '1px solid #cbd5e1',
            background: '#ffffff',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ☀
        </button>
      </div>
    </header>
  );
}
