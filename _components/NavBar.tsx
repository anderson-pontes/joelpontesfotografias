// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark-card/50 backdrop-blur-lg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
          Nome do Fotógrafo
        </Link>
        <div className="space-x-2 sm:space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Início
          </Link>
          <Link href="/gallery" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Galeria
          </Link>
          <Link href="/#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Sobre
          </Link>
          <Link href="/#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;