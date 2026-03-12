export default function Header() {
  return (
    <header
      style={{
        padding: '16px 16px 8px 16px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 24,
              height: 24,
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
          <div style={{ fontSize: 20, fontWeight: 600 }}>Flapy™</div>
        </div>
        <div
          style={{
            marginTop: 4,
            fontSize: 11,
            color: '#64748b',
          }}
        >
          Ваш умный помощник на рынке жилья
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
