import React from "react";

interface CategoryProps {
    img: string,
    name: string
}

function Category(props: CategoryProps) {
    return (
        <>
            <section className="flex flex-col ml-2 mr-2">
                <section className="w-[381px] h-[480px]">
                    <img src={props.img} alt="Bedroom image"
                         className="w-[381px] h-[480px] object-cover rounded-md"/>
                </section>
                <section className="w-[381px] h-[36px] flex justify-center items-center mt-5">
                    <h2 className="font-[600] text-[24px] text-center text-banner-text-color">{props.name}</h2>
                </section>
            </section>
        </>
    )
}

export default Category;