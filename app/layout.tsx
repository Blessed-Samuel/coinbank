'use client';

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

  // base routes where the Navbar should not appear
  const noNavbarBaseRoutes = ['/authentication/signup', '/authentication/signin', '/authentication/forgotpassword', '/authentication/verification'];

  // Check if the current pathname starts with any of the defined no-navbar routes
  const shouldShowNavbar = !noNavbarBaseRoutes.some(route => pathname.startsWith(route));

  return (
    <html lang="en">
      <body className={sora.className}>
        {/* Conditionally render Navbar */}
        {shouldShowNavbar && <Navbar />}
        <main className={shouldShowNavbar ? 'mt-24' : ''}>{children}</main>
      </body>
    </html>
  );
}
