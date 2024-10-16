import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '../lib/i18n';
import ClientLanguageProvider from "@/components/ClientLanguageProvider"; // i18n should only handle initialization here

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SemanticMap",
  description: "Generated by semanticmap",
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClientLanguageProvider>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
      </ClientLanguageProvider>
  );
}