import React from 'react';

export function Badge({ children, className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold/10 text-gold border border-gold/20 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
