import React from "react";
import {ProductCard} from "./ProductCard";


function ProductInfo(props: ProductCard) {

    function formatNumber(number?: number) {
        const digits = String(number).split('');

        if (digits.length > 3) {
            for (let i = digits.length - 3; i > 0; i -= 3) {
                digits.splice(i, 0, '.');
            }
        }

        return digits.join('');
    }

    return (
        <>
            <section className="w-[249px] h-[99px] ml-[10px]">
                <section className="w-[138px] h-[61px]">
                    <h2 className="w-[400px] h-[29px] font-[600] text-[24px] text-product-color-name">{props.name}</h2>
                    <p className="w-[300px] h-[24px] font-[500] text-[16px] text-product-color-description mt-[20px]">{props.description}</p>
                </section>
                <section className="w-[249px] h-[30px] flex gap-[10px] items-center mt-[50px]">
                    <p className="font-[600] text-[20px] text-product-color-name">{`Rp ${formatNumber(props.price)}`}</p>
                    <p className="font-[400] text-[16px] text-product-rebate-price line-through">{props.rebatePrice}</p>
                </section>
            </section>
        </>
    );
}

export default ProductInfo;