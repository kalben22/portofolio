import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bernard Houngbo - Cybersecurity Analyst | DFIR | Network Security",
  description: "Portfolio de Bernard Houngbo - Analyste en cybersécurité spécialisé en Digital Forensics & Incident Response (DFIR) et sécurité réseau, basé à Cotonou, Benin.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
