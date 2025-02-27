import type { Metadata } from "next";
import StoreProvider from "@/app/StoreProvider";

import { Open_Sans as OpenSans } from "next/font/google";

import "./globals.css";

const openSans = OpenSans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Questionnaire",
  description: "Nice little questionnaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${openSans.variable}`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
