import React from "react";
import shopBannerImg from "../../assets/shop-banner.jpeg"
import InfoShopBanner from "./InfoShopBanner";

function ShopBanner() {
    return (
        <>
            <section className="w-full h-[316px] relative">
                <img src={shopBannerImg} alt="Shop Banner"
                     className="w-full h-[316px] object-cover opacity-[50%] absolute"/>
                <section className="absolute">
                    <InfoShopBanner />
                </section>
            </section>

        </>
    );
}

export default ShopBanner;