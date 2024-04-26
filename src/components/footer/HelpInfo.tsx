import React from "react";

function HelpInfo() {
    return (
        <section>
            <h3 className="font-[500] text-[16px] text-footer-ph-text">Help</h3>
            <section className="flex flex-col gap-[50px] mt-[30px]">
                <p className="font-[500] text-[16px] text-black">Payment Options</p>
                <p className="font-[500] text-[16px] text-black">Returns</p>
                <p className="font-[500] text-[16px] text-black">Privacy Policies</p>
            </section>
        </section>
    );
}

export default HelpInfo;