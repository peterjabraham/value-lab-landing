import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "AIValueWorx — From AI Interest to AI Outcomes",
  description:
    "The gap between 'we should do something with AI' and 'we're getting real results' is where most organisations stall. AIValueWorx helps you close it — with evidence, structure, and business cases that actually get approved.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    title: "AIValueWorx — From AI Interest to AI Outcomes",
    description:
      "Close the AI value gap with evidence-backed business cases. From ambition to measurable returns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
