import React from 'react';

const variants = {
  primary: 'bg-coffee-500 text-white hover:bg-coffee-600',
  outline: 'border-2 border-coffee-500 text-coffee-500 hover:bg-coffee-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...rest }) => {
  return (
    <button
      className={`rounded-2xl font-body font-medium transition-all duration-200 ease-smooth shadow-soft hover:shadow-hover hover:scale-[1.02] active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
