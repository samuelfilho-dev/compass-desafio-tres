import React from "react";
import CommentsCotainer from "./CommentsCotainer";
import SizeContainer from "./SizeContainer";
import ColorContainer from "./ColorContainer";
import ButtonCotainer from "./ButtonCotainer";
import ComercialBorder from "./ComercialBorder";
import ComecialInfoContainer from "./ComecialInfoContainer";

interface ProductInfoText {
    title: string,
    price: number,
    description: string,
    SKU: string
}

function ProductInfoText(props: ProductInfoText) {
    return (
        <>
            <section className="h-[500px] flex flex-col gap-[20px]">
                <h2 className="font-[400] text-[42px] text-black">{props.title}</h2>
                <p className="font-[500] text-[24px] text-footer-ph-text">{`Rs. ${props.price}`}</p>
                <CommentsCotainer/>
                <p className="w-[424px] h-[80px] font-[400] text-[13px] text-black">
                    {props.description}
                </p>
                <SizeContainer/>
                <ColorContainer/>
                <ButtonCotainer/>
                <ComercialBorder/>
                <ComecialInfoContainer SKU={props.SKU}/>
            </section>
        </>
    );
}

export default ProductInfoText;