'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-dark-card/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold hover:text-gray-300 transition-colors text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500"
          onClick={closeMenu}
        >
          Joel Pontes Fotografias
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu Desktop */}
        <div className="hidden sm:flex space-x-4">
          <NavLink href="/" label="Início" />
          <NavLink href="/gallery" label="Galeria" />
          <NavLink href="/#about" label="Sobre" />
          <NavLink href="/#contact" label="Contato" />
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2 bg-dark-card/90 backdrop-blur-md">
          <NavLink href="/" label="Início" onClick={closeMenu} />
          <NavLink href="/gallery" label="Galeria" onClick={closeMenu} />
          <NavLink href="/#about" label="Sobre" onClick={closeMenu} />
          <NavLink href="/#contact" label="Contato" onClick={closeMenu} />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {label}
  </Link>
);

export default Navbar;
