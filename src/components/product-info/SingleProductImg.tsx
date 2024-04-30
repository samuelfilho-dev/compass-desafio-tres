import React from "react";

interface SingleProductImgProps {
    img: string
}

function SingleProductImg(props: SingleProductImgProps) {
    return (
        <>
            <section
                className="w-[523px] h-[500px] bg-filter-bar-color ml-[80px] rounded-[10px] flex justify-center items-center">
                <img src={props.img} alt="Blue Sofa"/>
            </section>
        </>
    );
}

export default SingleProductImg;