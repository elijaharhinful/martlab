"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/60 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/images/logo.jpg" alt="Martlab Consult Logo" width={40} height={40} style={{ width: 'auto', height: 'auto' }} />
          <span className="font-bold text-xl text-white tracking-wide">MartLab Consult</span>
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={i}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive ? 'text-gold font-bold' : 'text-slate-300 font-medium hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button href="/contact" variant="primary" className="px-5 py-2.5 text-sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-white/10 bg-navy/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-2 rounded-lg text-base transition-colors ${
                    isActive ? 'text-gold font-bold bg-white/5' : 'text-slate-300 font-medium hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" variant="primary" className="mt-3 w-full">
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
