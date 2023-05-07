import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  type: 'reset' | 'submit' | 'button' | undefined;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
  secondary?: boolean;
  children: React.ReactNode;
  fullWidth: boolean;
}
const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  disabled,
  danger,
  secondary,
  children,
  fullWidth
}) => {
  return (
    <button
      className={clsx(
        `transition text-white p-2 rounded-md`,
        disabled && 'opacity-50 cursor-default',
        danger && 'bg-rose-500 hover:bg-rose-600',
        secondary && 'text-gray-900',
        !secondary && !danger && 'bg-sky-500 hover:bg-sky-600',
        fullWidth && 'w-full'
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
