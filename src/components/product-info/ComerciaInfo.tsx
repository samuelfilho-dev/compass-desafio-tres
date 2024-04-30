import React from "react";

interface ComercialInfoProps {
    title: string,
    result: string
}

function ComerciaInfo(props: ComercialInfoProps) {
    return (
        <>
            <section className="w-auto grid grid-cols-2">
                <p className="font-[400] text-[16px] text-footer-ph-text">{props.title}</p>
                {/*<p className="font-[500] text-[16px] text-footer-ph-text">:</p>*/}
                <p className="font-[400] text-[16px] text-footer-ph-text">{props.result}</p>
            </section>
        </>
    );
}

export default ComerciaInfo;