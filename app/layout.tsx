import type { Metadata } from "next";
import { Geist, Henny_Penny } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-henny-penny",
});

export const metadata: Metadata = {
  title: "Mystery House Desktop Edition",
  description: "Screen reader training game for NVDA and VoiceOver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${hennyPenny.variable} font-geist antialiased bg-black text-white`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
