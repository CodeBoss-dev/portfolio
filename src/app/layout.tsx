import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/providers/LenisProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
