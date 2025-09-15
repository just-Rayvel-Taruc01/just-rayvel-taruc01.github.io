import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { ThemeScript } from "./lib/theme-script";
import { Geist, Geist_Mono } from "next/font/google";
import previewImg from "public/profile.jpg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rayvel_code | Portfolio",
  description:
    "Portfolio of Rayvel Taruc — showcasing projects in React, Next.js, Tailwind CSS, Node.js, and more.",
  keywords: [
    "Rayvel Taruc",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Rayvel Taruc" }],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://just-rayvel-taruc01-github-io.vercel.app",
  },
  openGraph: {
    title: "rayvel_code | Portfolio",
    description: "Explore my projects, resume, and contact information.",
    url: "https://just-rayvel-taruc01-github-io.vercel.app",
    siteName: "Rayvel Portfolio",
    images: [
      {
        url: previewImg.src,
        width: 1200,
        height: 630,
        alt: "Rayvel Taruc Portfolio Preview",
      },
    ],
    type: "website",
  },
};

// Theme color handled separately
export function generateViewport() {
  return [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#ffffff" },
  ];
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-body min-h-screen overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
