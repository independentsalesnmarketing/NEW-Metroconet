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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00e000" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00e000" />
        <meta name="msapplication-TileColor" content="#00e000" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
