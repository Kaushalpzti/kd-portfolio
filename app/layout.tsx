import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://hacker-kd.vercel.app";
const siteTitle = "Kaushal Prazapati | Full-Stack Developer & Product Builder";
const siteDescription =
  "Portfolio of Kaushal Prazapati — full-stack developer and product builder creating thoughtful interfaces, useful web products, and interactive digital experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Kaushal Prazapati",
  },
  description: siteDescription,
  applicationName: "KD Portfolio",
  creator: "Kaushal Prazapati",
  publisher: "Kaushal Prazapati",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: "Turning ideas into digital experiences.",
    url: siteUrl,
    siteName: "Kaushal Prazapati Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaushal Prazapati — Full-Stack Developer and Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: "Turning ideas into digital experiences.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
