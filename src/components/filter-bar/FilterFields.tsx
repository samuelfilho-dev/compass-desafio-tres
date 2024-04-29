import React from "react";
import ShortFilter from "./ShortFilter";
import ShowFilter from "./ShowFilter";

function FilterFields() {
    return (
        <>
            <section className="flex justify-center items-center gap-[30px]">
                <ShowFilter />
                <ShortFilter/>
            </section>
        </>
    );
}

export default FilterFields;