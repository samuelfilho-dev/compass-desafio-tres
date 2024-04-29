import React from "react";
import arrowDown from "../../assets/icons/arrow-down.svg"

function InfoShopBanner() {
    return (
        <>
            <section className="w-[1440px] h-[316px] flex items-center justify-center">
                <h2 className="w-[1px] h-[72px] font-[500] text-[48px] text-black">Shop</h2>
                <section className="flex gap-[5px] mt-[90px]">
                    <p className="font-[500] text-[16px] text-black">Home</p>
                    <img src={arrowDown} alt="Arrow Down"/>
                    <p className="font-[300] text-[16px] text-black">Shop</p>
                </section>
            </section>
        </>
    );
}

export default InfoShopBanner;