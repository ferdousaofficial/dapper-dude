import type { Metadata } from "next";
import { Nunito , Playfair_Display } from "next/font/google";

import "@/styles/globals.css";
import Header from "./components/ui/Header/header";

const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={`${nunito.className} bg-[#fff] text-[#7e8a93]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
