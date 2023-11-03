import type { Metadata } from "next";
import { Nunito, Alumni_Sans } from "next/font/google";

import "@/styles/globals.css";
import Header from "./components/ui/Header/Header";

// font customizations
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Nunito",
});
const alumni_Sans = Alumni_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-Alumni_Sans",
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
        className={`${alumni_Sans.variable} ${nunito.variable} bg-[#fff] text-[#7e8a93]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
