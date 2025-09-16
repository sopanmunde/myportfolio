import type { Metadata } from 'next'
import './globals.css'

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
        {children}
      </body>
    </html>
  );
}
