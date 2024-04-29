import React from "react";
import Header from "../components/header/Header";
import DarkFooter from "../components/dark-footer/DarkFooter";
import Footer from "../components/footer/Footer";
import ShopBanner from "../components/shop-banner/ShopBanner";
import FilterBar from "../components/filter-bar/FilterBar";
import ShopProducts from "../components/shop-products/ShopProducts";

function Shop() {
    return (
        <div>
            <Header/>
            <ShopBanner/>
            <FilterBar/>
            <ShopProducts />
            <DarkFooter/>
            <Footer/>
        </div>
    );
}

export default Shop;