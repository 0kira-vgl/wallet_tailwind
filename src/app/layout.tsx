import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-zinc-50 antialiased">{children}</body>
    </html>
  );
}
