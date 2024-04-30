import React from "react";
import SizeButton from "./SizeButton";

function SizeContainer() {
    return (
        <>
            <section>
                <p className="font-[400] text-[14px] text-footer-ph-text">Size</p>
                <section className="flex items-center gap-[10px] mt-[20px]">
                    <SizeButton size="L" isSelected={true} />
                    <SizeButton size="XL" isSelected={false} />
                    <SizeButton size="XS" isSelected={false} />
                </section>
            </section>
        </>
    );
}

export default SizeContainer;