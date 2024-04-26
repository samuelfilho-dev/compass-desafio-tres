import React from "react";

function Copyright() {
    return (
        <section className="w-[1241px] h-[60px]">
            <p className="font-[400] text-[16px] text-black">
                {new Date().getFullYear()} furino. All rights reverved
            </p>
        </section>
    );
}

export default Copyright;