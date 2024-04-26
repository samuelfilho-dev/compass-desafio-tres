import React from "react";
import logo from "../../assets/logo.svg";

function Logo() {
    return (
        <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="Yellow Logo"/>
            <h1 className="w-[130px] h-[41px] font-[700] text-[34px] text-black font-[Montserrat]">Furniro</h1>
        </div>
    );
}

export default Logo;