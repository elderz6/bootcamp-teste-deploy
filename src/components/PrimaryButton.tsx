import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, ...props }) => {
    return (
        <button {...props} className="border border-black bg-secondary-variant rounded-md px-3 py-4 hover:scale-105 hover:transition-transform duration-300">{text}</button>
    );
}

export default PrimaryButton