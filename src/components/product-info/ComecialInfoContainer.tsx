import React from "react";
import ComerciaInfo from "./ComerciaInfo";

function ComecialInfoContainer() {
    return (
        <>
            <section className="">
                <ComerciaInfo title="SKU" result="SS001"/>
                <ComerciaInfo title="Category" result="Sofas"/>
                <ComerciaInfo title="Tags" result="Sofa, Chair, Home, Shop"/>
            </section>
        </>
    );
}

export default ComecialInfoContainer;