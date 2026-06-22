import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Apply hover lift/border affordance. Set false for static info cards. */
  interactive?: boolean;
}

export function Card({ children, className = '', interactive = true, ...props }: CardProps) {
  const hover = interactive
    ? 'transition-all duration-300 hover:border-slate-400 hover:-translate-y-1 motion-reduce:transform-none'
    : '';

  return (
    <div
      className={`glass-card rounded-2xl p-6 ${hover} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
