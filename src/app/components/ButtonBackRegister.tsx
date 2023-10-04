import React from "react";
import Image from "next/image";

interface ButtonBackRegisterProps {
    id: string;
    text: string;
}

const ButtonBackRegister: React.FC<ButtonBackRegisterProps> = (props) => {
    return (
        <button id={props.id} className="rounded-full border border-black bg-white flex items-center p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src="/ArrowLeft.svg" width="5" height="5" alt="" className="mr-2 w-5 h-5" /> {props.text}
        </button>
    );
}

export default ButtonBackRegister