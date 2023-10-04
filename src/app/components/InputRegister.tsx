import React from "react";

interface InputRegisterProps {
    id: string;
    text: string;
    placeholder: string;
}

const InputRegister: React.FC<InputRegisterProps> = (props) => {
    return (
        <div>
            <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
                {props.text}
            </label>
            <input
                type="text"
                placeholder={props.placeholder}
                id={props.id}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
        </div>
    );
}

export default InputRegister