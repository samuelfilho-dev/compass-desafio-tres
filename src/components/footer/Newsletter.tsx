import React from "react";

function Newsletter() {
    return (
        <section>
            <h3 className="font-[500] text-[16px] text-footer-ph-text">Newsletter</h3>
            <section className="flex gap-[10px] mt-[30px]">
                <input
                    className="w-[200px] h-[25px] font-[400] text-[14px] text-footer-ph-text border-b-solid border-b-[1px] border-b-black"
                    placeholder="Enter Your Email Address"/>
                <button
                    className="font-[500] text-[14px] text-black border-b-solid border-b-[1px] border-b-black">
                    SUBSCRIBE
                </button>
            </section>
        </section>
    );
}

export default Newsletter;