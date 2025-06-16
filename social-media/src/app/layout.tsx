import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Wellbeing App",
  description: "A social media app focused on digital wellbeing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden bg-gray-50">
          <div className="w-64 h-screen sticky top-0 flex-shrink-0">
            <Sidebar />
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <Header />
            <main className="pt-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
