import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HBO Onderzoek Leeromgeving',
  description: 'Leer onderzoek doen op HBO-niveau met interactieve lessen en AI-begeleiding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}