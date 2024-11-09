import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const sora = Sora({ subsets: ['latin-ext'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sora.className}
      >
        <Navbar />
        <main className='mt-24'>{children}</main>
      </body>
    </html>
  );
}
