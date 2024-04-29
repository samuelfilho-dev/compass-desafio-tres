import React from "react";

function ShortFilter() {
    return (
        <>
            <section className="flex justify-center items-center gap-2">
                <p className="font-[400] text-[20px] text-black">Short by</p>
                <select className="w-[188px] h-[55px] pl-[10px] font-[400] text-[20px] text-footer-ph-text">
                    <option>Default</option>
                    <option>Cresente</option>
                    <option>Decresente</option>
                </select>
            </section>
        </>
    );
}

export default ShortFilter;