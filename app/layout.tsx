import {cookies} from "next/headers";
import type {Metadata} from "next";

import localFont from "next/font/local";
import "./globals.css";
import '../lib/i18n';
import ClientLanguageProvider from "@/components/ClientLanguageProvider";
import Head from "next/head"; // i18n should only handle initialization here

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
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en"> {/* No extra whitespace here */}
        <Head>

            {/* Plausible Analytics */}
            <script defer data-domain="semanticmap.com" src="https://plausible.io/js/script.tagged-events.js"></script>

            {/*Start of HubSpot Embed Code */}
            <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/144126450.js"></script>
            {/* Favicon */}
            <link rel="icon" href="/favicon/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLanguageProvider>
            {children}
        </ClientLanguageProvider>
        </body>
        </html>
    );
}
