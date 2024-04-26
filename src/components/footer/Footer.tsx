import React from "react";
import FooterBorder from "./FooterBorder";
import Copyright from "./Copyright";
import CompanyInfo from "./CompanyInfo";
import LinkInfo from "./LinkInfo";
import HelpInfo from "./HelpInfo";
import Newsletter from "./Newsletter";

function Footer() {
    return (
        <>
            <section className="w-full h-[505px] flex justify-center items-center">
                <section className="w-[1241px] h-[420px]">
                    <section className="mb-[30px] flex gap-[190px]">
                        <CompanyInfo/>
                        <LinkInfo/>
                        <HelpInfo/>
                        <Newsletter/>
                    </section>
                    <FooterBorder/>
                    <Copyright/>
                </section>
            </section>
        </>
    );
}

export default Footer;