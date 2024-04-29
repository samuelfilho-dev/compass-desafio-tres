import React from "react";

interface OverlayOptionsProps {
    icon: string,
    title: string
}

function OverlayOptions(props: OverlayOptionsProps) {
    return (
        <>
            <section className="w-auto h-[24px] flex justify-center items-center gap-[5px]">
                <img src={props.icon} alt="Props Icon"/>
                <p className="w-auto h-[24px] font-[600] text-[16px] text-white">{props.title}</p>
            </section>
        </>
    );
}

export default OverlayOptions;