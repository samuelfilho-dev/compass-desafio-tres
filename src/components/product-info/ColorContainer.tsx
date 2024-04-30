import React from "react";
import Color from "./Color";

function ColorContainer() {
    return (
        <>
            <section>
                <p className="font-[400] text-[14px] text-footer-ph-text">Color</p>
                <section className="flex items-center gap-[10px] mt-[20px]">
                    <Color colorHex="#816DFA"/>
                    <Color colorHex="#000000"/>
                    <Color colorHex="#B88E2F"/>
                </section>
            </section>
        </>
    );
}

export default ColorContainer;