import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project Portfolio",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "og:title": "Project Showcase",
    "og:description": "Project Portfolio",
    "og:image":
      "https://pbs.twimg.com/media/F6yaxc-W8AA5nhy?format=png&name=small",
    "og:url": "https://project-showcase-eight.vercel.app",
    "og:type": "website",
    "twitter:title": "Project Showcase",
    "twitter:url": "https://project-showcase-eight.vercel.app",
    "twitter:description": "Project Portfolio",
    "twitter:image":
      "https://pbs.twimg.com/media/F6yaxc-W8AA5nhy?format=png&name=small",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
