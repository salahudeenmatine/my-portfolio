import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Replace https://YOUR_DOMAIN with your real deployed URL after going live (e.g. https://salahudeenmatine.vercel.app)
export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR_DOMAIN"),
  title: "Salahudeen Matine | Cyber Security Student",
  description:
    "Final-year Cyber Security student at UWL. Specialising in OSINT investigations, web application testing, and threat intelligence.",
  openGraph: {
    title: "Salahudeen Matine | Cyber Security Student",
    description:
      "Final-year Cyber Security student at UWL. Specialising in OSINT investigations, web application testing, and threat intelligence.",
    url: "https://YOUR_DOMAIN",
    siteName: "Salahudeen Matine",
    type: "website",
    locale: "en_GB",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salahudeen Matine | Cyber Security Student",
    description:
      "Final-year Cyber Security student at UWL. Specialising in OSINT, web app testing, and threat intelligence.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
