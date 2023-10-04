import React from "react";

interface SpanErrorProps {
    text: string;
};

const SpanError: React.FC<SpanErrorProps> = ({text}) => {
    return (
        <span className="text-error text-sm">{text}</span>
    );
}

export default SpanError