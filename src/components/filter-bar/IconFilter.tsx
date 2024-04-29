import React from "react";
import viewList from "../../assets/icons/view-list.svg";
import grid from "../../assets/icons/grid.svg";
import filter from "../../assets/icons/filter.svg"


function IconFilter() {
    return (
      <>
          <section className="flex justify-center items-center gap-[20px] ml-[85px]">
              <section className="flex justify-center items-center gap-[10px]">
                  <img src={filter} alt="Filter Icon"/>
                  <p className="font-[400] text-[20px] text-black">Filter</p>
              </section>
              <img src={grid} alt="Grid Icon"/>
              <img src={viewList} alt="View List"/>
          </section>
      </>
    );
}

export default IconFilter;