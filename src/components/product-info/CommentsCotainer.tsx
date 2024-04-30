import React from "react";
import star from "../../assets/icons/star.svg";
import CommentsDiv from "./CommentsDiv";

function CommentsCotainer() {
    return (
        <>
            <section className="flex items-center ">
                <img src={star} alt="Yellow Start"/>
                <img src={star} alt="Yellow Start"/>
                <img src={star} alt="Yellow Start"/>
                <img src={star} alt="Yellow Start"/>
                <img src={star} alt="Yellow Start"/>
                <CommentsDiv />
                <p className="font-[400] text-[13px] text-footer-ph-text">5 Customer Review</p>
            </section>
        </>
    );
    ;
}

export default CommentsCotainer;