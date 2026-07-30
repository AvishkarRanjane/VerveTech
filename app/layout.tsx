import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { SettingsProvider } from "@/contexts/SettingsContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ManagerSaveBar from "@/components/manager/ManagerSaveBar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "VerveTech | Apple-Inspired Luxury Tech Accessories Studio",
  description: "Precision-engineered titanium cases, MagSafe wireless chargers, and custom device protection built for modern tech enthusiasts.",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg"
  },
  openGraph: {
    title: "VerveTech | Apple-Inspired Luxury Tech Accessories Studio",
    description: "Discover precision titanium cases, MagSafe chargers, and custom 3D skins.",
    images: ["/hero-banner.png"],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <AuthProvider>
          <SettingsProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <ManagerSaveBar />
            <Toaster />
          </SettingsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
