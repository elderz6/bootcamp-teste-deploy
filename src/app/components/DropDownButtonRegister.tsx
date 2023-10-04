import React, { useState, ReactNode } from 'react';
import Image from "next/image";

interface DropDownButtonRegisterProps {
    id: string;
    text: string
    children: ReactNode;
}

const DropDownButtonRegister: React.FC<DropDownButtonRegisterProps> = ({id,text,children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black bg-[#CBF3F0] border border-black rounded-md"
                id={id}>
                {text}
                <Image
                    className="ml-2 h-5 w-5"
                    src={isOpen ? "/CaretUp.svg" : "/CaretDown.svg"}
                    alt=""
                    width="5" height="5"
                />
            </button>

            {isOpen && (
                <>{children}</>
            )}
        </div>
    );
}

export default DropDownButtonRegister