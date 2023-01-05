import React, { FC } from 'react';

interface ButtonProps {
  className?: string;
}

export const ButtonDefault: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      style={{ backgroundColor: '#2196F3' }}
      className={`w-fit px-4 py-2 shadow-md text-sm text-white font-semibold rounded-md hover:underline ${className}`}
    >
      {children}
    </button>
  );
};
