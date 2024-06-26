import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Content from "@/components/layout/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mumamii Cakery",
  description: "Catering for cookies and stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/b245547d3c.js" crossOrigin="anonymous"></Script>

      <body className={inter.className}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body >
    </html >
  );
}