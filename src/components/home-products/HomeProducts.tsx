import React, {useState, useEffect} from "react";
import axios from "axios";
import RowProducts from "./RowProducts";
import {Product} from "../../types/product";
import {useNavigate} from "react-router-dom";

function HomeProducts() {

    const [products, setProducts] = useState([]);
    const negative = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get("http://localhost:8080/product");
            const data: Product[] = await response.data;
            setProducts(data as any);
        }

        fetchProducts();
    }, []);

    function showMoreHandler() {
        return negative("/shop");
    }

    return (
        <>
            <section className="flex justify-center items-center mt-[70px]">
                <section className="w-[1236px] h-[1190px]">
                    <section className="flex justify-center">
                        <h1 className="font-[700] text-[40px] text-product-color-name">Our Products</h1>
                    </section>
                    <section>
                        <RowProducts data={products}/>
                        <RowProducts data={products}/>
                    </section>
                    <section className="flex justify-center mt-[60px]">
                        <button className="w-[245px] h-[48px] bg-white border-solid border-[1px] border-product-btn-color
                        font-[600] text-[16px] text-product-btn-color" onClick={showMoreHandler}>
                            Show More
                        </button>
                    </section>
                </section>
            </section>
        </>
    );
}

export default HomeProducts;