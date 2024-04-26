import React from "react";
import Advantage from "./Advantage";
import trophy from "../../assets/icons/trophy.svg";
import check from "../../assets/icons/check.svg";
import delivery from "../../assets/icons/delivery.svg";
import support from "../../assets/icons/support.svg";

const advantages = [
    {icon: trophy, title: 'High Quality', ph: 'crafted from top materials'},
    {icon: check, title: 'Warranty Protection', ph: 'Over 2 years'},
    {icon: delivery, title: 'Free Shipping', ph: 'Order over 150 $'},
    {icon: support, title: '24 / 7 Support', ph: 'Dedicated support'},
];

function DarkFooter() {
    return (
        <>
            <section className="w-full h-[270px] bg-footer-dark-bg-color mt-[30px] flex justify-center items-center">
                <section className="w-[1334px] h-[70px] flex justify-between">
                    {advantages.map((advantage) => {
                        return <Advantage icon={advantage.icon} title={advantage.title} ph={advantage.ph}/>
                    })}
                </section>
            </section>
        </>
    );
}

export default DarkFooter;