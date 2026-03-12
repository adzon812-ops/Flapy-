export default function ListingCard({ listing }) {
  return (
    <article
      style={{
        background: '#ffffff',
        borderRadius: 16,
        padding: 12,
        boxShadow: '0 1px 6px rgba(15,23,42,0.12)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span>📍</span>
        <span>
          {listing.city}, {listing.district}
        </span>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 160,
          borderRadius: 12,
          background: '#e2e8f0',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            background: 'rgba(15,23,42,0.8)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
          }}
        >
          ▶
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 4,
        }}
      >
        <div>
          <div style={{ fontSize: 16, fontWeight: 600 }}>{listing.price}</div>
          <div style={{ fontSize: 12, color: '#64748b' }}>{listing.title}</div>
        </div>
        <span
          style={{
            padding: '4px 10px',
            borderRadius: 999,
            background: '#f97316',
            color: '#ffffff',
            fontSize: 11,
            fontWeight: 500,
          }}
        >
          {listing.badge}
        </span>
      </div>
    </article>
  );
}
