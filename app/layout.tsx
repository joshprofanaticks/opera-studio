import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/ui/Navigation";
import { CotizaProvider } from "@/components/cotiza/CotizaProvider";
import { CotizaModal } from "@/components/cotiza/CotizaModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Opera Studio — operate. compose. measure.",
  description:
    "Estudio digital independiente. Diseñamos, construimos y medimos producto digital con criterio editorial e ingeniería sostenible.",
  metadataBase: new URL("https://operastud.io"),
  openGraph: {
    title: "Opera Studio — operate. compose. measure.",
    description:
      "Estudio digital independiente. Producto, sistemas de marca y medición.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased grain`}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink font-sans">
        <CotizaProvider>
          <SmoothScroll />
          <CustomCursor />
          <Navigation />
          {children}
          <CotizaModal />
        </CotizaProvider>
      </body>
    </html>
  );
}
