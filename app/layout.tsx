'use client'

import { Sora } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import { usePathname } from 'next/navigation';

const sora = Sora({ subsets: ['latin-ext'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define routes where the Navbar should not appear
  const noNavbarRoutes = ['/authentication/signup', '/authentication/signin'];

  const shouldShowNavbar = !noNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className={sora.className}>
        {/* Conditionally render Navbar */}
        {shouldShowNavbar && <Navbar />}
        <main className='mt-24'>{children}</main>
      </body>
    </html>
  );
}
