import React from "react";
import user from "../../assets/icons/user.svg";
import search from "../../assets/icons/search.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/cart.svg";

function NavBarIcon() {
    return (
        <div className="flex gap-10">
            <img src={user} alt="User Icon"/>
            <img src={search} alt="Search Icon"/>
            <img src={heart} alt="Heart Icon"/>
            <img src={cart} alt="Cart Icon"/>
        </div>
    );
}

export default NavBarIcon;