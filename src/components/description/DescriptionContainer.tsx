import React from "react";

interface DescriptionContainerProps {
    largeDecripiton: string
}


function DescriptionContainer(props: DescriptionContainerProps) {
    return (
        <>
            <section className="w-full h-[330px] flex flex-col gap-[90px] justify-center items-center">
                <section className="flex gap-[50px]">
                    <h2 className="font-[500] text-[24px] text-black">Description</h2>
                    <h2 className="font-[400 text-[24px] text-footer-ph-text">Additional Information</h2>
                </section>
                <section className="flex justify-center items-center">
                    <p className="w-[1026px] h-[96px] font-[400] text-[16px] text-footer-ph-text">
                        {props.largeDecripiton}
                    </p>
                </section>
            </section>
        </>
    )
}

export default DescriptionContainer;