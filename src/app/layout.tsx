import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Duong",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>{children} </body>
    </html>
  );
}
