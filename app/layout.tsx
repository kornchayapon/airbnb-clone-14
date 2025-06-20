import { Nunito } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone with nextjs14',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <div className="pb-20 pt-28">test{children}</div>
      </body>
    </html>
  );
}
