import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import PlasmaBackground from './components/PlasmaBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Karma PSC',
  description: 'Your website description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url('/images/background.jpg')` }} />
          <PlasmaBackground />
          <header className='sticky top-0 z-[1000]'>
            <Header/>
          </header>
          <main>
          {children}
          </main>
        </body>
    </html>
  );
}