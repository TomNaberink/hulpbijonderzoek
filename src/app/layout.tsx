import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HAN Onderzoek Leeromgeving',
  description: 'Leer onderzoek doen op HBO-niveau met interactieve lessen en AI-begeleiding - HAN University of Applied Sciences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="han-body bg-gray-50 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}