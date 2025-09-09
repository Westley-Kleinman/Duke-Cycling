import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { site } from "@/data/site"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s • ${site.name}`,
  },
  description:
    "Official website for Duke Club Cycling. Group rides, collegiate racing, events, routes, sponsors, and how to join.",
  // Update to your GH Pages URL once enabled
  metadataBase: new URL("https://westley-kleinman.github.io/Duke-Cycling"),
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
  <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
  </body>
    </html>
  );
}
