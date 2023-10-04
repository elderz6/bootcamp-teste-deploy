import React, { ReactNode } from "react";

interface ContainerFlexRegisterProps {
    children: ReactNode;
}

const ContainerFlexRegister: React.FC<ContainerFlexRegisterProps> = ({ children }) => {
    return (
        <div className="flex" >
            {React.Children.map(children,(child,index) =>(
                <div className={`w-1/2 ${index === 0 ? "pr-2" : ""}`}>
                    {child}
                </div>
            ))}
            
        </div>
    );
}

export default ContainerFlexRegister