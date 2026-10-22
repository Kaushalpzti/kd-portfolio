import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaushal Prazapati — Developer & Product Builder",
  description:
    "Portfolio of Kaushal Prazapati — full-stack developer, product builder, and creative technologist.",
  applicationName: "KD Portfolio",
  openGraph: {
    title: "Kaushal Prazapati — Developer & Product Builder",
    description:
      "Thoughtful interfaces. Useful products. Built with code and curiosity.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
