import React from "react";

interface CheckBoxRegisterProps {
    id: string;
    text: string;
}

const CheckBoxRegister: React.FC<CheckBoxRegisterProps> = (props) => {
    return (
        <label htmlFor={props.id} className="flex items-center">
            <input
                id={props.id}
                type="checkbox"
                className="form-checkbox text-blue-500  w-6 h-6"
            />
            <span className="ml-2">{props.text}</span>
        </label>
    );
}

export default CheckBoxRegister