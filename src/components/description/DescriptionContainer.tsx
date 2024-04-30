import React from "react";

function DescriptionContainer() {
    return (
        <>
            <section className="w-full h-[330px] flex flex-col gap-[90px] justify-center items-center">
                <section className="flex gap-[50px]">
                    <h2 className="font-[500] text-[24px] text-black">Description</h2>
                    <h2 className="font-[400 text-[24px] text-footer-ph-text">Additional Information</h2>
                </section>
                <section className="flex justify-center items-center">
                    <p className="w-[1026px] h-[96px] font-[400] text-[16px] text-footer-ph-text">
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering.
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                        stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs
                        for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune
                        the controls to your personal preferences while the guitar-influenced leather strap enables easy
                        and stylish travel.
                    </p>
                </section>
            </section>
        </>
    )
}

export default DescriptionContainer;