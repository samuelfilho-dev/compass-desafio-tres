import React from "react";
import ProductInfo from "./ProductInfo";
import ProductImg from "./ProductImg";
import OverlayProduct from "./OverlayProduct";


export interface ProductCard {
    id?: string
    name?: string,
    description?: string,
    price?: number,
    rebatePrice?: number,
    img?: string,
}

function ProductCard(props: ProductCard) {

    return (
        <>
            <section className="w-[285px] h-[446px] flex flex-col relative">
                <section className="w-[285px] h-[301px] flex">
                    <ProductImg img={props.img}/>
                </section>
                <section className="w-[285px] h-[145px] bg-product-card-color">
                    <ProductInfo name={props.name} description={props.description} price={props.price}
                                 rebatePrice={props.rebatePrice}/>
                </section>
                <OverlayProduct/>
            </section>
        </>
    );
}


export default ProductCard;