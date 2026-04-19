import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Netaji Youth Foundation",
    default: "Netaji Youth Foundation | Rural Child Development in Tamil Nadu",
  },
  description:
    "Netaji Youth Foundation is a nonprofit initiative in Vedaranyam, Tamil Nadu, focused on free programs in fitness, sports, chess, discipline, education support, and leadership for rural children.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${plusJakartaSans.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-body antialiased bg-white text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
