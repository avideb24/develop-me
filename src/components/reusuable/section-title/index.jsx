import React from "react";
import arrowIcon from "@/assets/icons/section-arrow.png";
import Image from "next/image";

const SectionTitle = ({title}) => {
    return (
        <div className="flex items-center gap-1 pb-6">
            <Image src={arrowIcon} alt="arrow" />
            <h2 className="px-5 py-2 border-[2.5px] border-light rounded-full">{title}</h2>
        </div>
    );
};

export default SectionTitle;