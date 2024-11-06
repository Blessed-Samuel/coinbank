import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ['latin'] })

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
        <main className='mt-16'>{children}</main>
      </body>
    </html>
  );
}
