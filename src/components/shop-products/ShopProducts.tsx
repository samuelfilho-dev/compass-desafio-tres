import React, {useEffect, useState} from "react";
import axios from "axios";
import RowProducts from "../home-products/RowProducts";
import {Product} from "../../types/product";
import PageSection from "../home-products/PageSection";

function ShopProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:8080/product?limit=16');
            const data: Product[] = await response.data;
            setProducts(data);
        }

        fetchData();
    }, []);


    function nextPageHandler() {
        setPage((prevPage) => prevPage + 1);
    }

    return (
        <>
            <section className="w-[full] h-[2051px] flex justify-center items-center">
                <section className="w-[1236px] h-[2050px] justify-center items-center gap-[40px]">
                    <RowProducts data={products}/>
                    <RowProducts data={products}/>
                    <RowProducts data={products}/>
                    <RowProducts data={products}/>

                    <section className="flex justify-center items-center mt-[60px] gap-[30px]">
                        <PageSection page={1} isSelectPage={page === 1}/>
                        <PageSection page={2} isSelectPage={page === 2}/>
                        <PageSection page={3} isSelectPage={page === 3}/>
                        <button
                            className="w-[98px] h-[60px] bg-filter-bar-color rounded-[10px]
                            font-[300] text-[20px] text-black" onClick={nextPageHandler}>
                            Next
                        </button>
                    </section>
                </section>


            </section>
        </>
    );
}

export default ShopProducts;