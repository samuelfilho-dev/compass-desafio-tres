import React, {useState, useEffect} from "react";
import axios from "axios";
import RowProducts from "./RowProducts";
import {Product} from "../../types/product";

function HomeProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get("http://localhost:8080/product");
            const data: Product[] = await response.data;
            setProducts(data as any);
        }

        fetchProducts();
    }, []);

    return (
        <>
            <section className="flex justify-center items-center mt-[70px]">
                <section className="w-[1236px] h-[1084px]">
                    <section className="flex justify-center">
                        <h1 className="font-[700] text-[40px] text-product-color-name">Our Products</h1>
                    </section>
                    <section>
                        <RowProducts data={products} />
                        <RowProducts data={products} />
                    </section>
                </section>
            </section>
        </>
    );
}

export default HomeProducts;