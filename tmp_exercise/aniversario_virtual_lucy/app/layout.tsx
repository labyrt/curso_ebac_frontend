import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucy está online — aniversário virtual",
  description: "Convite para uma festa de aniversário virtual inspirada na internet brasileira dos anos 2000.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
