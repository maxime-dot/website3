import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

config.autoAddCss = false;

interface ExtendedMetadata extends Metadata {
  "google-site-verification": string;
}

export const metadata: ExtendedMetadata = {
  title: "Akata Goavana - IT company from Madagascar",
  description:
    "The rules of success changed yesterday. Our cutting-edge solutions from Madagascar can get your business caught up today and dominating tomorrow.",
  "google-site-verification": "rt0uj5tdNaTdLWR9UCrdpPvHNZBEHwUeRawmIbNISGw",
} as Metadata & { "google-site-verification": string };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
