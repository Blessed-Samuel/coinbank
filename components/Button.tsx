import React, { useState } from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
    disabled?: boolean;
    noBackground?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    disabled = false,
    noBackground = false
}) => {
    // Define base styles and variant-based styles
    const baseStyle = `px-4 py-2 rounded font-semibold transition-all duration focus:outline-none`;

    // Styles with and without background
    const variantStyles = noBackground
        ? {
            primary: 'text-black',
            secondary: 'text-gray-800 hover:text-gray-600',
            danger: 'text-red-500 hover:text-red-600',
        }
        : {
            primary: 'bg-blue-500 text-white hover:bg-blue-600',
            secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
            danger: 'bg-red-500 text-white hover:bg-red-600',
        };

    const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;
    const [scale, setScale] = useState(false);

    // button function
    const handleClick = () => {
        setScale(true);

        setTimeout(() => {
            setScale(false);
        }, 200);

        if (onClick) onClick();
    };

    return (
        <button
            className={`${combinedClassName} transition-transform duration-300 focus:outline-none ${scale ? "scale-95" : ""}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
