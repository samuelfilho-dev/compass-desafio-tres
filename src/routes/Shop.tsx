import React from "react";
import Header from "../components/header/Header";
import DarkFooter from "../components/dark-footer/DarkFooter";
import Footer from "../components/footer/Footer";
import ProductCard from "../components/product/ProductCard";
import OverlayProduct from "../components/product/OverlayProduct";

function Shop() {
    return (
        <div>
            <Header />
            <ProductCard />
            <OverlayProduct />
            <DarkFooter />
            <Footer />
        </div>
    );
}

export default Shop;