import React from "react";

interface ActionButtonProps {
    title: string
}

function ActionButton(props: ActionButtonProps) {
    return (
        <>
            <button
                className="w-[215px] h-[64] rounded-[15px] border-solid border-[1px]
                border-black font-[400] text-[20px] text-black">
                {props.title}
            </button>
        </>
    );
}

export default ActionButton;