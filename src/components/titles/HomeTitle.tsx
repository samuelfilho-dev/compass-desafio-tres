import React from "react";

interface TitleProps {
    name: string;
}

function HomeTitle(props: TitleProps) {
    return (
        <h1 className="w-[300] h-[48px] font-[700] text-[32px] text-banner-text-color">{props.name}</h1>
    );
}

export default HomeTitle;