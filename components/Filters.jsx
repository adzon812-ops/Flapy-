export default function Filters() {
  const labels = ['Город', 'Тип', 'Цена'];

  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 12, fontSize: 12 }}>
      {labels.map((label) => (
        <button
          key={label}
          style={{
            padding: '4px 12px',
            borderRadius: 999,
            border: '1px solid #cbd5e1',
            background: '#ffffff',
            color: '#0f172a',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
