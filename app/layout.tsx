import type { ReactNode } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import ClientLayout from "./client-layout"
import ResourceHints from "@/components/resource-hints"

// Import metadata from separate file
import { metadata as siteMetadata } from "./metadata"

// Use a different variable name to avoid any conflicts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

// Export the metadata with a different name to avoid conflicts
export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ResourceHints />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-32x32%20(1)-mMcnfb9aKAX2Vd9ZH3HGOzj922wdjs.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-16x16%20(1)-NerwtdBJTXta8ccgcRJKrLrPuClxnJ.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon%20(1)-b7uLP7E70QtAMZsnAIjTK6FK7lFEMh.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192%20(1)-YqQSAvfGl8kYt7lhD9Z1JoN0Sbog2E.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-512x512%20(1)-SD5NAe3l0ZsPLZtknfSSuJPPuSZbOJ.png"
        />
        <meta name="theme-color" content="#00FF00" />
        <meta name="msapplication-TileColor" content="#00FF00" />
        <meta
          name="msapplication-TileImage"
          content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/android-chrome-192x192%20(1)-YqQSAvfGl8kYt7lhD9Z1JoN0Sbog2E.png"
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
