import React from "react";

interface SizeButtonProps {
    size: string,
    isSelected: boolean
}

function SizeButton(props: SizeButtonProps) {
    return (
        <>
            <button
                className={`w-[30px] h-[30px] rounded-[5px] 
                bg-${props.isSelected ? 'product-btn-color' : 'filter-bar-color'}
                font-[400] text-[13px] text-black
                `}>{props.size}</button>
        </>
    );
}

export default SizeButton;