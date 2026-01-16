import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const hoverableClass = hoverable
    ? 'transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
    : '';

  const clickableClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`
        bg-white rounded-xl border border-slate-200 shadow-sm
        ${hoverableClass}
        ${clickableClass}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`px-6 py-4 border-b border-slate-200 bg-slate-50 ${className}`}
    >
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`px-6 py-4 text-slate-700 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`px-6 py-4 border-t border-slate-200 bg-slate-50 ${className}`}
    >
      {children}
    </div>
  );
};
