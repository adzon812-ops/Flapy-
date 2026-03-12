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
        }}
      >
        {children}
      </body>
    </html>
  );
}
