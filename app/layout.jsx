import './globals.css';

export const metadata = {
  title: 'Flapy — ваш умный помощник на рынке жилья',
  description: 'Flapy — платформа недвижимости Казахстана',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          background: '#e5ecf4',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 8px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 430,
            minHeight: '640px',
            background: '#ffffff',
            borderRadius: 32,
            boxShadow: '0 18px 40px rgba(15,23,42,0.22)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
