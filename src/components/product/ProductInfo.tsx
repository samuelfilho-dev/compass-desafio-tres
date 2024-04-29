import React from "react";

function ProductInfo() {
    return (
        <>
            <section className="w-[249px] h-[99px] ml-[10px]">
                <section className="w-[138px] h-[61px]">
                    <h2 className="font-[600] text-[24px] text-product-color-name">Syltherine</h2>
                    <p className="font-[500] text-[16px] text-product-color-description">Stylish cafe chair</p>
                </section>
                <section className="w-[249px] h-[30px] flex gap-[10px] justify-center items-center">
                    <p className="font-[600] text-[20px] text-product-color-name">Rp 2.500.000</p>
                    <p className="font-[400] text-[16px] text-product-rebate-price line-through">Rp 3.500.000</p>
                </section>
            </section>
        </>
    );
}

export default ProductInfo;