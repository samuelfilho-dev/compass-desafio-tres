import React from "react";

interface DarkHeaderPhProps {
    title: string;
}

function DarkHeaderPh(props: DarkHeaderPhProps) {
    return (
        <>
            <p className="font-[400] text-[16px] text-footer-ph-text">{props.title}</p>
        </>
    )
}

export default DarkHeaderPh;