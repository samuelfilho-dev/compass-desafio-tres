import React from "react";
import OverlayOptions from "./OverlayOptions";
import share from "../../assets/icons/share.svg";
import compare from "../../assets/icons/compare.svg";
import heart from "../../assets/icons/product-heart.svg";
import OverlayButton from "./OverlayButton";

interface OverlayProductProps {
    id?: string
}

function OverlayProduct(props: OverlayProductProps) {
    return (
        <>
            <section className="absolute">
                <section className="w-[285px] h-[446px] flex justify-center items-center bg-product-color-name/60 opacity-0
               left-0 top-[-100%] hover:opacity-100 group-hover:top-0 p-4 z-10">
                    <section className="w-[252px] h-[96px]">
                        <section className="w-[252px] h-[24px] flex justify-center items-center mb-[30px]">
                            <OverlayButton id={props.id}/>
                        </section>
                        <section className="w-[252px] h-[24px] flex justify-center items-center gap-[20px]">
                            <OverlayOptions icon={share} title="Share"/>
                            <OverlayOptions icon={compare} title="Compare"/>
                            <OverlayOptions icon={heart} title="Like"/>
                        </section>
                    </section>
                </section>
            </section>
        </>
    );
}

export default OverlayProduct;