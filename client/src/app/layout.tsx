import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pokedex app",
  description: "Gotta Catch 'Em All!",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex min-h-screen flex-col items-center justify-start p-24">
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
