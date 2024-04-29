import React from "react";
import FilterBorderBar from "./FilterBorderBar";
import ShowPagesFilter from "./ShowPagesFilter";
import IconFilter from "./IconFilter";

function TextFilter() {
    return (
        <>
            <section className="flex justify-center items-center">
                <IconFilter />
                <FilterBorderBar/>
                <ShowPagesFilter/>
            </section>
        </>
    );
}

export default TextFilter;