import React from "react";
import AmountButton from "./AmountButton";
import ActionButton from "./ActionButton";

function ButtonCotainer() {
    return (
        <>
            <section className="flex gap-[20px]">
                <AmountButton/>
                <ActionButton title="Add To Cart"/>
                <ActionButton title={`+ Compare`}/>
            </section>
        </>
    );
}

export default ButtonCotainer;