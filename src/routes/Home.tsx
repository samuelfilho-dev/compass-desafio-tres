import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import HomeCategory from "../components/home-categories/HomeCategory";
import DarkFooter from "../components/dark-footer/DarkFooter";
import Footer from "../components/footer/Footer";

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <HomeCategory />
            <DarkFooter />
            <Footer />
        </div>
    );
}

export default Home;