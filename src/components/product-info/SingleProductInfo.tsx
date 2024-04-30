import React, {useEffect, useState} from "react";
import SingleProductImg from "./SingleProductImg";
import ProductInfoText from "./ProductInfoText";
import FooterDivBar from "./FooterDivBar";
import DescriptionContainer from "../description/DescriptionContainer";
import SinglePagesProducts from "../single-page-products/SinglePagesProducts";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Product} from "../../types/product";

function SingleProductInfo() {
    const [product, setProduct] = useState<Product>({} as Product);
    const {id} = useParams();


    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get(`http://localhost:8080/product/${id}`);
            const data: Product = await response.data;
            setProduct(data);
        }

        fetchProducts();
    }, []);

    return (
        <>
            <section className="w-full h-[820px] mt-[50px]">
                <section className="w-[1440px] h-[820px] flex gap-[90px]">
                    <SingleProductImg img={product.imageLink}/>
                    <ProductInfoText title={product.name} description={product.description} price={product.price}
                                     SKU={product.sku}/>
                </section>
                <FooterDivBar/>
            </section>
            <DescriptionContainer largeDecripiton={product.largeDescription}/>
            <SinglePagesProducts/>
        </>
    )
}

export default SingleProductInfo;