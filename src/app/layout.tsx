// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../../_components/NavBar"; // Usando alias de importação '@/'
import Footer from "../../_components/Footer";

// Configuração da fonte (opcional, mas bom para performance)
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // Para usar no tailwind.config.ts
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-playfair',
  });
  

export const metadata: Metadata = {
  title: "Joel Pontes | Profissional", // Título padrão
  description: "Portfólio e galeria de um fotógrafo profissional.",
  // Adicione mais metadados aqui, como openGraph, icons etc.
  icons: {
    icon: '/favicon.ico', // Certifique-se de que favicon.ico está na pasta public ou app
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