import React from "react";
import {useNavigate} from "react-router-dom";

interface OverlayButtonProps {
    id?: string
}

function OverlayButton(props: OverlayButtonProps) {
    const negative = useNavigate();

    function overlayButtonHandler() {
        return negative(`product/${props.id}`);
    }

    return (
        <button className="w-[202px] h-[48px] bg-white font-[600] text-[16px] text-product-btn-color"
                onClick={overlayButtonHandler}>
            See Details
        </button>
    );
}

export default OverlayButton;