import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

export const metadata: Metadata = {
  title: "Alt relocation",
  description: "Alt relocation",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['cyrillic', 'latin'],
})

const geometria = localFont({
  src: [
    {
      path: './font/Geometria/Geometria-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './font/Geometria/Geometria-ThinItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './font/Geometria/Geometria-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/Geometria/Geometria-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './font/Geometria/Geometria-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Geometria/Geometria-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './font/Geometria/Geometria-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Geometria/Geometria-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} ${geometria.className}`}>
      <body className="bg-background text-foreground text-base font-sans antialiased dark">
        {children}
      </body>
    </html>
  );
}
