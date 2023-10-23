import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";

import "@/styles/globals.css";
import Header from "./components/ui/Header/header";

// font customizations
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const playfair_Display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfairDisplay",
});

export const metadata: Metadata = {
  title: "Dapper Dude - Stylish Cloths for Men",
  description:
    "Dapper Dude , Stylish Cloths for Men. Fashion e-commerce website for men.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair_Display.variable} ${nunito.className} bg-[#fff] text-[#7e8a93]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
