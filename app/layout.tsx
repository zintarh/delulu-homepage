import type { Metadata } from "next";
import { Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const gloria = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloria",
});

export const metadata: Metadata = {
  title: "Delulu - Build Delusional Goals Together",
  description:
    "Create a Delulu, stake a minimum of 100 G$, complete verified milestones, and let the community buy shares in your progress with daily claimable G$.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    title: "Delulu - Build Delusional Goals Together",
    description:
      "Create a Delulu, stake at least 100 G$, complete milestones, and grow together through community-owned shares powered by GoodDollar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gloria.variable}>{children}</body>
    </html>
  );
}