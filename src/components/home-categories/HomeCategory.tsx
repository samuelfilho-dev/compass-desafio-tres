import React from "react";
import HomeTitle from "../titles/HomeTitle";
import Category from "./Category";
import bedroomCategory from "../../assets/categories/bedroom-category.png";
import diningCategory from "../../assets/categories/dining-category.png";
import livingCategory from "../../assets/categories/living-category.png";

const categories = [
    {img: diningCategory, name: 'Dining'},
    {img: livingCategory, name: 'Living'},
    {img: bedroomCategory, name: 'Bedroom'}
];

function HomeCategory() {
    return (
        <section className="flex justify-center items-center mt-[70px]">
            <section className="w-[1183px] h-[685px]">
                <section className="flex justify-center">
                    <HomeTitle name="Browse The Range"/>
                </section>
                <section className="flex mt-20">
                    {categories.map((category) => {
                        return <Category img={category.img} name={category.name}/>
                    })}
                </section>
            </section>
        </section>
    );
}

export default HomeCategory;