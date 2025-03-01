import type { Metadata } from "next";
import { Open_Sans as OpenSans } from "next/font/google";

import StoreProvider from "@/app/StoreProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

import "./globals.css";

const openSans = OpenSans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Questionnaire",
  description: "Nice little questionnaire",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeProvider>
          <body className={`${openSans.variable}`}>{children}</body>
        </ThemeProvider>
      </StoreProvider>
    </html>
  );
}
