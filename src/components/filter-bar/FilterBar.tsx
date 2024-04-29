import React from "react";
import FilterFields from "./FilterFields";
import FilterBorderBar from "./FilterBorderBar";
import ShowPagesFilter from "./ShowPagesFilter";
import TextFilter from "./TextFilter";

function FilterBar() {
    return (
        <>
            <section className="w-full h-[100px] bg-filter-bar-color">
                <section className="w-[1440px] h-[100px] flex justify-between items-center">
                    <TextFilter />
                    <FilterFields/>
                </section>
            </section>
        </>
    );
}

export default FilterBar;