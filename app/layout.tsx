import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Delulu - Stake on Your Future Self",
  description: "An optimistic prediction market for personal goals. Stake on your own success, prove it with your digital footprint, and earn rewards.",
  openGraph: {
    title: "Delulu - Stake on Your Future Self",
    description: "An optimistic prediction market for personal goals. Stake on your own success, prove it with your digital footprint, and earn rewards.",
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
      <body>{children}</body>
    </html>
  );
}