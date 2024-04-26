import React from "react";
import banner from "../../assets/home-banner.jpeg"

function Banner() {
    return (
        <section className="w-full h-[500px] relative ">
            <img src={banner} alt="Home Banner" className="w-full h-[500px] object-cover absolute"/>
            <section className="w-[643px] h-[350px] bg-primary-bg-color ml-[739px] mt-[180px] absolute">
                <p className="font-[Poppins] font-[500] text-[18px] text-banner-text-color pt-20 pl-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis.
                </p>
            </section>
        </section>
    );
}

export default Banner;