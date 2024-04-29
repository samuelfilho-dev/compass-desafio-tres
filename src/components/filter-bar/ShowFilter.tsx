import React from "react";

function ShowFilter() {
    return (
        <>
            <section className="flex justify-center items-center gap-2">
                <p className="font-[400] text-[20px] text-black">Show</p>
                <input className="w-[55px] h-[55px] pl-[15px] font-[400] text-[20px]
                        text-footer-ph-text" placeholder="16">
                </input>
            </section>
        </>
    );
}

export default ShowFilter;