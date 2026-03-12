import HeaderFlai from '../../components/HeaderFlai';
import BottomNav from '../../components/BottomNav';

export default function FlaiPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        maxWidth: 420,
        margin: '0 auto',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <HeaderFlai />

      <section
        style={{
          flex: 1,
          padding: '12px 16px 96px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          fontSize: 14,
        }}
      >
        <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
          {['Описание', 'Ипотека', 'Продвижение'].map((label) => (
            <button
              key={label}
              style={{
                padding: '4px 12px',
                borderRadius: 999,
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                fontSize: 11,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div
            style={{
              alignSelf: 'flex-end',
              maxWidth: '80%',
              borderRadius: 16,
              borderBottomRightRadius: 4,
              background: '#f97316',
              color: '#ffffff',
              padding: '8px 12px',
            }}
          >
            Придумай описание для 2-комнатной квартиры в Есиле, 65 м², 78.5 млн ₸.
          </div>
          <div
            style={{
              alignSelf: 'flex-start',
              maxWidth: '80%',
              borderRadius: 16,
              borderBottomLeftRadius: 4,
              background: '#f1f5f9',
              color: '#0f172a',
              padding: '8px 12px',
            }}
          >
            Уютная 2-комнатная квартира в современном районе Есиль. Просторные комнаты,
            65 м², вид на город, рядом школы и магазины — идеальный вариант для семьи.
          </div>
        </div>
      </section>

      <div
        style={{
          borderTop: '1px solid #e2e8f0',
          padding: '8px 16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input
            placeholder="Напишите вопрос о недвижимости…"
            style={{
              flex: 1,
              borderRadius: 999,
              border: '1px solid #cbd5e1',
              padding: '8px 12px',
              fontSize: 13,
            }}
          />
          <button
            style={{
              width: 32,
              height: 32,
              borderRadius: 999,
              background: '#f97316',
              color: '#ffffff',
              border: 'none',
              fontSize: 14,
            }}
          >
            →
          </button>
        </div>
      </div>

      <BottomNav active="flai" />
    </main>
  );
}
