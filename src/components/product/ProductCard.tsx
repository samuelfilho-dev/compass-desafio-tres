import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImg from "./ProductImg";
import OverlayProduct from "./OverlayProduct";

function ProductCard() {
    return (
        <>
            <section className="w-[285px] h-[446px] flex flex-col relative">
                <section className="w-[285px] h-[301px] flex">
                    <ProductImg/>
                </section>
                <section className="w-[285px] h-[145px] bg-product-card-color">
                    <ProductInfo/>
                </section>
                <OverlayProduct/>
            </section>
        </>
    );
}


export default ProductCard;