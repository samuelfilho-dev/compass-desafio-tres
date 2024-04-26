import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import HomeCategory from "./components/home-categories/HomeCategory";

function Home() {
    return (
        <div>
            <Header/>
            <Banner/>
            <HomeCategory />
        </div>
    );
}

export default Home;