import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  MenuButtonProvider,
  MenuSocialProvider,
} from "./_components/fixedMenu";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Tran Trong Hien",
  description: "Tran Trong Hien - portfolio version 3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "scroll-smooth")}>
        <div className="container relative">
          {/* Header */}
          <Header />

          {/* Main content */}
          {children}
          <MenuSocialProvider />
          <MenuButtonProvider />

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
