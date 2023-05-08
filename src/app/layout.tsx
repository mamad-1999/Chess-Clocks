import { Providers } from '@/redux/provider'
import './globals.css'

export const metadata = {
  title: 'Chess Clock',
  description: 'Manage time in Chess game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
