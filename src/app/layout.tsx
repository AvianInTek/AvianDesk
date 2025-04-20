"use client";

import localFont from "next/font/local";
import "./globals.css";
import React, { useEffect } from "react";

import NoRightClick from "@/components/noRightClick";

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

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-PXZHEP2GE8";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PXZHEP2GE8');
    `;
    document.head.appendChild(inlineScript);
  }, []);
  return (
    <html lang="en">
      <head>
        <title>AvianDesk - Support Desk</title>
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />

        <meta name="title" content="AvianDesk - Support Desk" />
        <meta name="description" content="Technical support and help desk for Avianintek products." />
        <meta name="keywords" content="Avianintek, Aviandesk, Avianintek support, help desk, ticketing system, technical support, product support, customer support, IT support, issue tracking, problem resolution, Avianintek help, Avianintek tickets, support portal, knowledge base, FAQ" />
        <meta name="author" content="Avianintek Team" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://desk.avianintek.com/" />
        <meta property="og:title" content="AvianDesk - Support Desk" />
        <meta property="og:description" content="Get technical support for Avianintek products through our Aviandesk help portal. Submit and track support tickets with ease." />
        <meta property="og:image" content="/assets/images/aviandesk.png" />

        <link rel="icon" href="/logo/favicon.ico" />
        <link rel="shortcut" href="/logo/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/logo/site.webmanifest" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NoRightClick />
        {children}
      </body>
    </html>
  );
}
