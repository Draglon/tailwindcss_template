import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alt relocation",
  description: "Alt relocation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground text-base font-sans antialiased dark">
        {children}
      </body>
    </html>
  );
}
