import React from "react";
import ComerciaInfo from "./ComerciaInfo";

interface ComecialInfoContainerProps {
    SKU: string,
}

function ComecialInfoContainer(props: ComecialInfoContainerProps) {
    return (
        <>
            <section className="">
                <ComerciaInfo title="SKU" result={props.SKU}/>
                <ComerciaInfo title="Category" result="Sofas"/>
                <ComerciaInfo title="Tags" result="Sofa, Chair, Home, Shop"/>
            </section>
        </>
    );
}

export default ComecialInfoContainer;