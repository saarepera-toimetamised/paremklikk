import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SearchBar from "./components/SearchBar";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.paremklikk.ee'),
  title: "Paremklikk - Maailmauudised ja AI õpetus",
  description: "Loe uudiseid erinevates keeltes, võrdle samu teemasid erineva kallakuga lehtedel. Faktikontroll, ajalehed ja AI õpetus eesti inimestele – kõik ühes kohas.",
  icons: {
    icon: "/mu_favicon.ico",
  },
  alternates: {
    canonical: 'https://www.paremklikk.ee',
  },
  openGraph: {
    title: "Paremklikk - Maailmauudised ja AI õpetus",
    description: "Loe uudiseid erinevates keeltes, võrdle kallakuid, õpi AI-d kasutama",
    url: "https://www.paremklikk.ee",
    siteName: "Paremklikk",
    locale: "et_EE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GoatCounter analytics */}
        <script
          data-goatcounter="https://paremklikk.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        />

        {/* Cloudflare Web Analytics */}
        <script 
          defer 
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "896532ddd4fa4d25813f9d157e3db763"}'
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <SearchBar />
        <Analytics />
      </body>
    </html>
  );
}
