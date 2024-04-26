import React from "react";

function LinkInfo() {
    return (
        <section>
            <h3 className="font-[500] text-[16px] text-footer-ph-text">Links</h3>
            <section className="flex flex-col gap-[50px] mt-[30px]">
                <p className="font-[500] text-[16px] text-black">Home</p>
                <p className="font-[500] text-[16px] text-black">Shop</p>
                <p className="font-[500] text-[16px] text-black">About</p>
                <p className="font-[500] text-[16px] text-black">Contact</p>
            </section>
        </section>
    );
}

export default LinkInfo;