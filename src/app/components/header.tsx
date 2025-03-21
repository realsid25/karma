"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center p-4 md:bg-transparent bg-[#0e002d]">
      {/* Logo (Left) */}
      <div className="flex-1">
        <Image src="/images/logo.svg" alt="Logo" width={48} height={48} />
      </div>

      {/* Company Name (Center) */}
      <div className="flex-2 text-center lg:block">
        <span className="text-2xl font-bold">KARMA</span>
      </div>

      {/* Menu Items (Right - PC) */}
      <nav className="flex-1 hidden lg:flex justify-end items-center">
        <Link href="/" className="mx-4 text-white">Home</Link>
        <Link href="/about" className="mx-4 text-white">About</Link>
        <Link href="/contact" className="mx-4 text-white">Contact</Link>
        <button className='bg-white text-black px-3 py-1.5 rounded-lg font-medium inline-flex align-center justify-center tracking-tight'>Enroll Now</button>
      </nav>

      {/* Mobile Menu Button (Right - Mobile/Tablet) */}
      <div className="flex-1 flex justify-end lg:hidden">
        <button onClick={toggleMobileMenu} className="text-2xl text-white">
          ☰
        </button>
      </div>

      {/* Mobile Navigation (Hidden by default) */}
      <nav
        className={`fixed top-0 right-0 w-64 h-full bg-[#0B002D] shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="p-4">
          <button onClick={toggleMobileMenu} className="text-2xl text-white float-right">
            x
          </button>
          <div className="clear-both"></div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <Link href="/" className="block my-4 text-lg text-white">
            Home
          </Link>
          <Link href="/about" className="block my-4 text-lg text-white">
            About
          </Link>
          <Link href="/contact" className="block my-4 text-lg text-white">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;