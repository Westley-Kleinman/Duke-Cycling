import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { site } from "@/data/site"
import { GA_TRACKING_ID } from "@/lib/gtag"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s • ${site.name}`,
  },
  description:
    "Official website for Duke Club Cycling. Group rides, collegiate racing, events, routes, sponsors, and how to join.",
  // Custom domain configured via GitHub Pages
  metadataBase: new URL("https://dukecycling.dev"),
  openGraph: {
    title: site.name,
    description:
      "Official website for Duke Club Cycling. Group rides, collegiate racing, events, routes, sponsors, and how to join.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "Official website for Duke Club Cycling. Group rides, collegiate racing, events, routes, sponsors, and how to join.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
  <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <GoogleAnalytics />
        </div>
  </body>
    </html>
  );
}
