import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "@/styles/globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MarchmanActInfo.com — Florida Marchman Act Resource & Treatment Directory",
  description:
    "Your comprehensive guide to the Florida Marchman Act. Find treatment facilities, understand the filing process, and access county-specific resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
