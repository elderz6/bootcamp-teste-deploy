import React from "react";

interface Option {
    id: string;
    value: string;
    text: string;
}

interface QuestionProps {
    text: string;
    name: string
    options: Option[];
}

const Question: React.FC<QuestionProps> = (props) => {
    return (
        <div className="max-w-md mx-auto p-4">
            <p className="text-gray-800 mb-2">{props.text}</p>
            {props.options.map((option) => (
                <div className="flex items-center space-x-2 ml-2" key={option.id}>
                    <input
                        type="radio"
                        name={props.name}
                        id={option.id}
                        value={option.value}
                        className="text-orange-500"
                    />
                    <label htmlFor={option.id}>{option.text}</label>
                </div>
            ))}
        </div>
    );
}

export default Question