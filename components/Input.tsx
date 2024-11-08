import React from 'react';
import Button from '@/components/Button';

type InputFieldProps = {
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
    type,
    onChange,
    placeholder,
    className = '',
}) => {
    return (
        <div className="flex space-x-4 w-full">
            <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className={`border border-gray-300 font-normal placeholder:text-gray-400 text-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5235E8] w-full ${className}`}
            />

            <Button className="py-2 text-nowrap bg-mainColorPrimary">Get Started</Button>
        </div>
    );
};

export default InputField;
