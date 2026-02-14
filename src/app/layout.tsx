import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeSync } from "@/components/ThemeSync";
import { CockpitProvider } from "@/components/Cockpit/CockpitProvider";
import { Terminal } from "@/components/Cockpit/Terminal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prince Boateng Asare | Creative Directing Reformer",
    template: "%s | Prince Boateng Asare",
  },
  description: "Organizing chaos into logic. Delivering results through precision. Portfolio of Prince Boateng Asare.",
  keywords: ["software developer", "web development", "TypeScript", "React", "Next.js", "portfolio"],
  authors: [{ name: "Prince Boateng Asare" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Prince Boateng Asare Portfolio",
    title: "Prince Boateng Asare | Creative Directing Reformer",
    description: "Organizing chaos into logic. Delivering results through precision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Boateng Asare | Creative Directing Reformer",
    description: "Organizing chaos into logic. Delivering results through precision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Prince Boateng Asare",
              jobTitle: "AI UI/UX Specialist",
              description: "Creative Directing Reformer specializing in systematic problem-solving and clean architecture.",
              url: "https://xdagee.github.io/",
              sameAs: [
                "https://github.com/xdagee",
                "https://linkedin.com/in/princeboatengasare",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeSync />
        <CockpitProvider>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Terminal />
        </CockpitProvider>
      </body>
    </html>
  );
}
