import React, { useRef } from "react";

const Welcome = ({ msg }: { msg: string }) => {
    const divRef = useRef<HTMLDivElement>();
    const handleClick = () => {
        const pTag = document.createElement('p');
        pTag.appendChild(document.createTextNode(msg));
        const divElement = divRef.current;
        if (divElement) {
            divElement.appendChild(pTag);
        }
    };
    return (
        <React.Fragment>
            <div className="Wrapper" ref={divRef}>
            </div>
            <button onClick={handleClick}>Add a p tag</button>
        </React.Fragment>
    )
};

export default Welcome;