import React from "react";

interface AdvantageProps {
    icon: string,
    title: string,
    ph: string
}


function Advantage(props: AdvantageProps) {
    return (
        <>
            <section className="flex gap-3">
                <section>
                    <img src={props.icon} alt="Thophy Icon"/>
                </section>
                <section>
                    <h2 className="font-[600] text-[23px] text-footer-dark-title-text">{props.title}</h2>
                    <p className="font-[500] text-[18px] text-footer-dark-ph-text">{props.ph}</p>
                </section>
            </section>
        </>
    );
}

export default Advantage;