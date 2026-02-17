import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import LandingHeader from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#000000",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Tanmay Vishwakarma | Full-Stack Developer",
    template: "%s | Tanmay Vishwakarma",
  },
  description:
    "Tanmay Vishwakarma is a Computer Engineering student at SPIT Mumbai specializing in Full-Stack Development and AI/ML. Explore projects, blogs, and scalable systems built with modern technologies.",

  keywords: [
    "Tanmay Vishwakarma",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "SPIT Mumbai",
    "Computer Engineering Student",
    "AI ML Developer",
    "Web Developer Portfolio",
    "Backend Developer",
  ],

  authors: [{ name: "Tanmay Vishwakarma" }],
  creator: "Tanmay Vishwakarma",
  metadataBase: new URL("https://capt-tanmay-portfolio.vercel.app"),

  openGraph: {
    title: "Tanmay Vishwakarma | Full-Stack Developer",
    description:
      "Portfolio of Tanmay Vishwakarma - Full-Stack Developer building scalable systems, modern web apps, and exploring AI/ML.",
    url: "https://capt-tanmay-portfolio.vercel.app/",
    siteName: "Tanmay Vishwakarma Portfolio",
    images: [
      {
        url: "https://capt-tanmay-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tanmay Vishwakarma - Full Stack Developer Portfolio",
      },
    ],
    type: "website",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#000000" }}>
      <body
        className={`
          ${poppins.variable}
          ${inter.variable}
          antialiased
          flex
          flex-col
          min-h-dvh 
          bg-black 
          text-white
          overflow-x-hidden
        `}
      >
          <main className="flex-1 w-full flex flex-col relative pb-[env(safe-area-inset-bottom)]">
            <div className="w-full flex-1">
              <LandingHeader />
              {children}
            </div>
            <Footer />
          </main>
          <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}