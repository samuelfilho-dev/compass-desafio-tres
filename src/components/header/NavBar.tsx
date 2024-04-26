import React from "react";

function NavBar() {
    return (
        <nav className="flex gap-10">
            <a className="font-[500] text-[16px] text-black" href="/">Home</a>
            <a className="font-[500] text-[16px] text-black" href="/shop">Shop</a>
            <a className="font-[500] text-[16px] text-black" href="/about">About</a>
            <a className="font-[500] text-[16px] text-black" href="/contact">Contact</a>
        </nav>
    );
}

export default NavBar;

