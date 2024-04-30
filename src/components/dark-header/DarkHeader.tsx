import React from "react";
import arrowDown from "../../assets/icons/arrow-down.svg";
import FilterBorderBar from "../filter-bar/FilterBorderBar";
import DarkHeaderPh from "./DarkHeaderPh";

interface DarkHeaderProps {
    productName: string
}

function DarkHeader(props: DarkHeaderProps) {
    return (
        <>
            <section className="w-full h-[100px] bg-filter-bar-color flex items-center">
                <section className="flex justify-center items-center gap-[20px] ml-[90px]">
                    <DarkHeaderPh title="Home"/>
                    <img src={arrowDown} alt="Arrow Down Icon"/>
                    <DarkHeaderPh title="Shop"/>
                    <img src={arrowDown} alt="Arrow Down Icon"/>
                    <FilterBorderBar/>
                    <p className="font-[400] text-[16px] text-black">{props.productName}</p>
                </section>
            </section>
        </>
    );
}

export default DarkHeader;