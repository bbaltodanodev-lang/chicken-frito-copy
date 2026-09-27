import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono, universo, universoStencil } from "./fonts";
import SmoothScroll from "@/components/SmoothScroll";
import CookieBanner from "@/components/CookieBanner";

const TITLE = "Chicken Frito Copy";
const DESCRIPTION =
  "Chicken Frito Copy: demo/copia del sitio web Chicken Frito, reproducida como proyecto web de demostración y portafolio. No es el sitio oficial del negocio.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Chicken Frito Copy (demo)",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${universo.variable} ${universoStencil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
        <CookieBanner />
      </body>
    </html>
  );
}