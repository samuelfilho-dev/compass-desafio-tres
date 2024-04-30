import React from "react";

interface ColorProps {
    colorHex: string;
}

function Color(props: ColorProps) {
    return (
        <>
            <div className={`w-[30px] h-[30px] rounded-[50px] bg-[${props.colorHex}]`}></div>
        </>
    )
}

export default Color;