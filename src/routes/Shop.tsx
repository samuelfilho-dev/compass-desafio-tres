import React from "react";
import Header from "../components/header/Header";
import DarkFooter from "../components/dark-footer/DarkFooter";
import Footer from "../components/footer/Footer";
import ProductCard from "../components/product/ProductCard";

function Shop() {
    return (
        <div>
            <Header />
            <ProductCard />
            <DarkFooter />
            <Footer />
        </div>
    );
}

export default Shop;