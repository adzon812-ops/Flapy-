export default function Tabs() {
  return (
    <div
      style={{
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        background: '#e2e8f0',
        borderRadius: 999,
        padding: 4,
        fontSize: 14,
      }}
    >
      <button
        style={{
          flex: 1,
          padding: '6px 8px',
          borderRadius: 999,
          border: 'none',
          background: '#ffffff',
          boxShadow: '0 1px 4px rgba(15,23,42,0.12)',
          color: '#0f172a',
          fontWeight: 500,
        }}
      >
        Объекты
      </button>
      <button
        style={{
          flex: 1,
          padding: '6px 8px',
          borderRadius: 999,
          border: 'none',
          background: 'transparent',
          color: '#64748b',
          fontWeight: 500,
        }}
      >
        Обмен
      </button>
    </div>
  );
}
