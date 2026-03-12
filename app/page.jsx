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
    <main
      style={{
        minHeight: '100%',
        background: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Header />
      <section style={{ padding: '8px 16px 0 16px' }}>
        <Tabs />
        <Filters />
      </section>
      <section
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 16px 96px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {mockListings.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </section>
      <BottomNav active="home" />
    </main>
  );
}
