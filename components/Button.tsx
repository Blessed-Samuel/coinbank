import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    disabled = false,
}) => {
    // Define base styles and variant-based styles
    const baseStyle = `px-4 py-2 rounded-md font-semibold transition duration-200 focus:outline-none`;
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

    return (
        <button
            className={combinedClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
