import React from "react";

interface PageSectionProps {
    page: number,
    isSelectPage: boolean
}

function PageSection(props: PageSectionProps) {
    return (
        <>
            <section
                className={`w-[60px] h-[60px] rounded-[10px] 
                bg-${props.isSelectPage ? 'product-btn-color' : 'filter-bar-color'} 
                flex justify-center items-center`}>
                <p className="font-[400] text-[20px] text-black">{props.page}</p>
            </section>
        </>
    );
}

export default PageSection;