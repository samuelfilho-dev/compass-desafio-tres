import React from "react";

function NavBar() {
    return (
        <nav className="flex gap-10">
            <a className="font-[Poppins] font-[500] text-[16px] text-black" href="">Home</a>
            <a className="font-[Poppins] font-[500] text-[16px] text-black" href="">Shop</a>
            <a className="font-[Poppins] font-[500] text-[16px] text-black" href="">About</a>
            <a className="font-[Poppins] font-[500] text-[16px] text-black" href="">Contact</a>
        </nav>
    );
}

export default NavBar;

