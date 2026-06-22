"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/60 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/images/logo.jpg" alt="Martlab Consult Logo" width={40} height={40} style={{ width: 'auto', height: 'auto' }} className=" group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all" />
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
          <Link href="/contact">
            <Button variant="primary" className="px-5 py-2.5 text-sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder for functionality) */}
        <button className="md:hidden text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
