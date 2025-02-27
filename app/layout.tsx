import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Sidebar from '@/components/Sidebar'
import "./globals.css";

const font = Figtree({ subsets: ['latin']})

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Sidebar>{children}</Sidebar>

      </body>
    </html>
  );
}
