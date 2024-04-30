import React from "react";
import sofa from "../../assets/sofa.png"

function SingleProductImg() {
    return (
        <>
            <section className="w-[523px] h-[500px] bg-filter-bar-color ml-[80px] rounded-[10px]">
                <img src={sofa} alt="Blue Sofa"/>
            </section>
        </>
    );
}

export default SingleProductImg;