import React, { InputHTMLAttributes, forwardRef } from 'react';
import SpanError from './SpanError';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    helperText?: string;
    error?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, helperText = "", ...props }, ref) => {
        return (
            <div>
                <input ref={ref} {...props} className="w-full px-3 py-2 border border-black rounded-md" />
                {error && <SpanError text={helperText}/>}
            </div>
        );
    }
);

export default Input