import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Youth Solidarity Festival 2025",
  description: "Join us for the Youth Solidarity Festival 2025 at Kathmandu University, Dhulikhel",
  icons: {
    icon: [
      { url: '/Youth solidarity fest red (5).png', sizes: '32x32', type: 'image/png' },
      { url: '/Youth solidarity fest red (5).png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/Youth solidarity fest red (5).png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/Youth solidarity fest red (5).png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Youth solidarity fest red (5).png" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X83763FQ9K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X83763FQ9K');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
