import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../../_components/NavBar"; 
import Footer from "../../_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', 
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-playfair',
  });
  

export const metadata: Metadata = {
  title: "Joel Pontes | Profissional", 
  description: "Portfólio e galeria de um fotógrafo profissional.",
  icons: {
    icon: '/favicon.ico', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-dark-bg text-gray-200 flex flex-col min-h-screen font-playfair">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}