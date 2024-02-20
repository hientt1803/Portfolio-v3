import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  MenuButtonProvider,
  MenuSocialProvider,
} from "../components/fixedMenu";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProgressbarProvider } from "@/components/providers/ProgressbarProvider";

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
      <body className={inter.className}>
        <div className="container relative">
          {/* Progressbar */}
          <ProgressbarProvider />

          {/* Header */}
          <Header />

          {/* Main content */}
          <div className="overflow-hidden">{children}</div>

          {/* Fixed Menu */}
          <MenuSocialProvider />
          <MenuButtonProvider />

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
