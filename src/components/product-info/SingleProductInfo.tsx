import React from "react";
import SingleProductImg from "./SingleProductImg";
import ProductInfoText from "./ProductInfoText";
import FooterDivBar from "./FooterDivBar";
import DescriptionContainer from "../description/DescriptionContainer";
import SinglePagesProducts from "../single-page-products/SinglePagesProducts";

function SingleProductInfo() {
    return (
        <>
            <section className="w-full h-[820px] mt-[50px]">
                <section className="w-[1440px] h-[820px] flex gap-[90px]">
                    <SingleProductImg/>
                    <ProductInfoText/>
                </section>
                <FooterDivBar/>
            </section>
            <DescriptionContainer/>
            <SinglePagesProducts/>
        </>
    )
}

export default SingleProductInfo;