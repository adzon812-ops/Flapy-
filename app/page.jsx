import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Filters from '../components/Filters';
import ListingCard from '../components/ListingCard';
import BottomNav from '../components/BottomNav';

const mockListings = [
  {
    id: 1,
    city: 'Алматы',
    district: 'Бостандыкский район',
    price: '78 500 000 ₸',
    title: '2-комнатная, 65 м²',
    badge: 'Новое',
  },
  {
    id: 2,
    city: 'Астана',
    district: 'Есильский район',
    price: '62 000 000 ₸',
    title: '3-комнатная, 82 м²',
    badge: 'Горящее',
  },
];

export default function Page() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        background: '#f8fafc',
        overflow: 'hidden',
      }}
    >
      {/* Верх: хедер + вкладки + фильтры (закреплён) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '8px 16px 8px 16px',
          background:
            'linear-gradient(to bottom, rgba(248,250,252,1), rgba(248,250,252,0.9))',
          backdropFilter: 'blur(10px)',
          zIndex: 10,
        }}
      >
        <Header />
        <div style={{ marginTop: 8 }}>
          <Tabs />
        </div>
        <div style={{ marginTop: 8 }}>
          <Filters />
        </div>
      </div>

      {/* Скроллящаяся середина */}
      <section
        style={{
          position: 'absolute',
          top: 150, // примерная высота верхнего блока
          bottom: 80, // место под нижнюю навигацию
          left: 0,
          right: 0,
          overflowY: 'auto',
          padding: '0 16px 16px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {mockListings.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </section>

      {/* Нижняя панель навигации (закреплена) */}
      <BottomNav active="home" />
    </div>
  );
}
