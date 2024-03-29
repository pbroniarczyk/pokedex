import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pokedex app",
  description: "Gotta Catch 'Em All!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-start p-24">
        {children}
      </body>
    </html>
  );
}
