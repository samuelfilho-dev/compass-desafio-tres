import React from "react";
import CommentsCotainer from "./CommentsCotainer";
import SizeContainer from "./SizeContainer";
import ColorContainer from "./ColorContainer";
import ButtonCotainer from "./ButtonCotainer";
import ComercialBorder from "./ComercialBorder";
import ComecialInfoContainer from "./ComecialInfoContainer";

function ProductInfoText() {
    return (
        <>
            <section className="h-[500px] flex flex-col gap-[20px]">
                <h2 className="font-[400] text-[42px] text-black">Asgaard sofa</h2>
                <p className="font-[500] text-[24px] text-footer-ph-text">Rs. 250,000.00</p>
                <CommentsCotainer/>
                <p className="w-[424px] h-[80px] font-[400] text-[13px] text-black">
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
                    hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
                <SizeContainer/>
                <ColorContainer/>
                <ButtonCotainer/>
                <ComercialBorder/>
                <ComecialInfoContainer />
            </section>
        </>
    );
}

export default ProductInfoText;