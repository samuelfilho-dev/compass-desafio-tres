import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import DarkHeader from "../components/dark-header/DarkHeader";
import SingleProductInfo from "../components/product-info/SingleProductInfo";
import FooterDivBar from "../components/product-info/FooterDivBar";

function ProductSinglePage() {
    return (
        <>
            <Header/>
            <SingleProductInfo />
            <FooterDivBar />
            <Footer/>
        </>
    );
}

export default ProductSinglePage;