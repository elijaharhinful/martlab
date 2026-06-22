import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  /** When provided, the button renders as a Next.js Link (no invalid <a><button> nesting). */
  href?: string;
}

const baseStyle =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer motion-reduce:transform-none motion-reduce:transition-none";

const variants = {
  primary: "bg-gold hover:bg-white text-navy font-bold shadow-md hover:shadow-lg",
  secondary: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-navy",
};

export function Button({ variant = 'primary', children, className = '', href, ...props }: ButtonProps) {
  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
