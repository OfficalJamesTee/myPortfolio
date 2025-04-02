import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "James ThankGod - Software Developer",
  description:
    "Personal portfolio website of James ThankGod, a software developer specializing in web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body className={inter.className}>
        <div className="wrapper">{children}</div>
        <Script
          id="email-decode"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
