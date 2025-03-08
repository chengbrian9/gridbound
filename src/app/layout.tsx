import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GRID + BOUND",
  description: "Spiral bound engineering paper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${bebasNeue.variable} antialiased bg-[#FBFCF0] text-black`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
