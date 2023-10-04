import React, { useState, InputHTMLAttributes, forwardRef } from 'react';
import Image from 'next/image';
import SpanError from './SpanError';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    helperText?: string;
    error: boolean;
}

const InputPassword = forwardRef<HTMLInputElement, InputProps>(
    ({ error, helperText = "", ...props }, ref) => {
        const [showPassword, setShowPassword] = useState<boolean>(false);

        return (
            <div className="relative">
                <input ref={ref} {...props} type={showPassword ? 'text' : 'password'} className="w-full px-3 py-2 border border-black rounded-md" />
                <Image src={showPassword ? "/eye.svg" : "/eye_closed.svg"} width={20} height={20} alt="icone de olho" onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer top-3 right-3" />
                {error && <SpanError text={helperText}/>}
            </div>
        );
    }
);

export default InputPassword