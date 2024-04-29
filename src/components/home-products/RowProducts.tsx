import React from "react";
import ProductCard from "../product/ProductCard";
import {Product} from "../../types/product";

interface RowProductsProps {
    data: Array<Product>
}

function RowProducts(props: RowProductsProps) {

    return (
        <>
            <section className="w-[1236px] h-[446px] flex justify-center items-center gap-[50px] mt-[30px]">
                {props.data.slice(0, 4).map((product) => {
                    return <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        rebatePrice={product.discrountPrice}
                        img={product.imageLink}
                    />
                })}
            </section>
        </>
    );
}

export default RowProducts;