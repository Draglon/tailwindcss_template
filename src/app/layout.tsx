import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import "@/app/globals.css";

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
      path: './font/Geometria/Geometria.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Geometria/Geometria-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/Geometria/Geometria-Bold.woff2',
      weight: '700',
      style: 'normal',
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
      <body className="bg-background text-foreground text-base font-sans font-normal not-italic antialiased dark">
        {children}
      </body>
    </html>
  );
}
