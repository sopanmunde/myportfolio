import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Sopan Portfolio',
  description: 'Created by Sopan Munde',
  generator: 'Sopan.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
