import Image from "next/image";
import React from "react";

const Button = ({ icon, text, isDark = false }) => {
    return (
        <button className={`py-3 pr-4 flex items-center gap-2 border ${isDark ? "border-light" : "border-dark"} rounded-full`}>
            <Image src={icon} className={`w-8 h-8 object-contain p-[6px] border ${isDark ? "border-light" : "border-dark"} rounded-full`} alt="text" />
            <span className="pt-1">{text}</span>
        </button>
    );
};

export default Button;