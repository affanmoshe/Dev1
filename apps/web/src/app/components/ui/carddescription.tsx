// CardDescription.tsx
import React from 'react';

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = '',
}) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};
