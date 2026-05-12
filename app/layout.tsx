import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Naren Sundar L - AI Engineer & Full Stack Developer',
  description: 'AI Engineer, Full Stack Developer, and ML Research Enthusiast. Exploring the intersection of artificial intelligence and scalable systems.',
  keywords: ['AI', 'Machine Learning', 'Full Stack Development', 'Systems Engineering', 'Portfolio'],
  authors: [{ name: 'Naren Sundar L' }],
  creator: 'Naren Sundar L',
  publisher: 'Naren Sundar L',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    url: 'https://naren.dev',
    title: 'Naren Sundar L - AI Engineer & Full Stack Developer',
    description: 'Building intelligent systems at the intersection of AI and software engineering.',
    siteName: 'Naren Sundar L',
  },
  icons: {
    icon: '/portfolio.png',
    apple: '/portfolio.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
