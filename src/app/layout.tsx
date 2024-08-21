import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M.Taha",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p className="font-serif bg-slate-600">Taha</p>
        <Navbar />
        {children}
        <p className="text-gray-600">contact me on <a href="https://www.instagram.com/muhammadtaha_5575">instagram</a>
        </p>
        </body>
    </html>
  );
}
