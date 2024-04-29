import React from "react";
import {ProductCard} from "./ProductCard";

function ProductImg(props: ProductCard) {
    return <img src={props.img} alt="Product"/>
}

export default ProductImg;