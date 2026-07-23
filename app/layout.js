import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata = {
  title: 'Prothom Analytica — Websites & Digital Growth for Local Businesses',
  description: 'Basic, Premium & Advanced website plans for local shops, retailers and small businesses to get online, rank on Google, and grow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-jakarta bg-offwhite text-ink">
        {children}
      </body>
    </html>
  );
}