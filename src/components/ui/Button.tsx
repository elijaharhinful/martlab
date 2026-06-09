import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer";
  const variants = {
    primary: "bg-gold hover:bg-white text-navy font-bold shadow-md hover:shadow-lg",
    secondary: "bg-transparent border border-gold text-gold hover:bg-gold/10"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
