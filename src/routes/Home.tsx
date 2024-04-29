import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import HomeCategory from "../components/home-categories/HomeCategory";
import DarkFooter from "../components/dark-footer/DarkFooter";
import Footer from "../components/footer/Footer";
import HomeProducts from "../components/home-products/HomeProducts";

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <HomeCategory />
            <HomeProducts />
            <DarkFooter />
            <Footer />
        </div>
    );
}

export default Home;