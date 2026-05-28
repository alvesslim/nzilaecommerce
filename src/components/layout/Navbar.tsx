import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex gap-6 max-md:hidden">
      <Link href="/" className="text-[0.9rem] font-bold text-text transition-colors hover:text-blue">Início</Link>
      <Link href="/products" className="text-[0.9rem] font-bold text-text transition-colors hover:text-blue">Loja</Link>
      <Link href="/about" className="text-[0.9rem] font-bold text-text transition-colors hover:text-blue">Sobre Nós</Link>
      <Link href="/contact" className="text-[0.9rem] font-bold text-text transition-colors hover:text-blue">Contactos</Link>
    </nav>
  );
}
