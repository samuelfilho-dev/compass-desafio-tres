import React from "react";
import logo from "../../assets/logo.svg";
import NavBarIcon from "./NavBarIcon";
import NavBar from "./NavBar";
import Logo from "./Logo";

function Header() {
    return (
        <header className="w-full h-[100px] flex justify-center">
            <section className="w-[1286px] h-[41px] mt-[29px]">
                <div className="flex items-center justify-between">
                    <Logo />
                    <NavBar />
                    <NavBarIcon />
                </div>
            </section>
        </header>
    );
}

export default Header;