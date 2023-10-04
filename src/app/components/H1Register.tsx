import React from "react";

interface H1RegisterProps {
    id: string;
    text: string;
}

const H1Register: React.FC<H1RegisterProps> = (props) => {
    return (
        <h1 id={props.id} className="text-2xl font-semibold">{props.text}</h1>
    );
}

export default H1Register