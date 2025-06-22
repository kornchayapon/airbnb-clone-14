import { Nunito } from 'next/font/google';
import './globals.css';

import Navbar from './components/navbar/Navbar';
import LoginModal from './components/modal/LoginModal';
import RegisterModal from './components/modal/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modal/RentModal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone with nextjs14',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
