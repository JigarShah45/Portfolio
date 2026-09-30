import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jigar Shah — Coder & Web Developer",
    template: "%s | Jigar Shah",
  },
  description:
    "Portfolio of Jigar Shah — Coder and Web Developer building modern, performant web applications from Mumbai, India.",
  keywords: [
    "Jigar Shah",
    "developer",
    "web developer",
    "full stack developer",
    "portfolio",
    "frontend",
    "React",
    "Next.js",
    "Node.js",
    "Mumbai",
  ],
  authors: [{ name: "Jigar Shah" }],
  creator: "Jigar Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jigarshah.dev",
    siteName: "Jigar Shah Portfolio",
    title: "Jigar Shah — Coder & Web Developer",
    description:
      "Portfolio of Jigar Shah — Coder and Web Developer building modern, performant web applications from Mumbai, India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jigar Shah — Coder & Web Developer",
    description:
      "Portfolio of Jigar Shah — Coder and Web Developer building modern, performant web applications from Mumbai, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
