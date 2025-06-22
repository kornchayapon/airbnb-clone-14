import { Nunito } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar/Navbar';
import LoginModal from './components/modal/LoginModal';
import RegisterModal from './components/modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

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
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
