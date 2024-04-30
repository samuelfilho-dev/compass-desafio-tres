import React, {useState} from "react";

function AmountButton() {
    const [count, setCount] = useState<number>(1);

    function sumCountHandler() {
        setCount((prevCount) => prevCount + 1);
    }

    function subtractCountHandler() {
        setCount((prevCount) => prevCount - 1);
    }


    return (
        <>
            <section
                className="w-[123px] h-[64px] rounded-[10px] border-solid border-[1px]
                border-footer-ph-text flex justify-between items-center p-[10px]">
                <button className="font-[400] text-[16px] text-black" onClick={subtractCountHandler}>-</button>
                <p className="font-[500] text-[16px] text-black">{count}</p>
                <button className="font-[400] text-[16px] text-black" onClick={sumCountHandler}>+</button>
            </section>
        </>
    );
}

export default AmountButton;