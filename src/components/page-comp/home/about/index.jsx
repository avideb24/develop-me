import SectionTitle from "@/components/reusuable/section-title";
import React from "react";
import aboutImg from "@/assets/images/about-img.png";
import Image from "next/image";

const About = () => {
    return (
        <section className="bg-light pt-28">
            <div className="container">
                <div className="flex justify-end">
                    <SectionTitle title={"About"} isDark={false} />
                </div>
                <h1 className="max-w-5xl mx-auto text-center text-7xl font-bold leading-[135px]">I've been <span className="highlight-text">Developing</span> Websites since <span className="highlight-text !rounded-md">2013</span></h1>
                <p className="max-w-[900px] mx-auto text-center text-lg pt-4 pb-16">We start every new client interaction with an in-depth discovery call where
we get to know each other and recommend the best course of
action.</p>
<Image src={aboutImg} className="w-full h-full object-cover" alt="about image" />
            </div>
        </section>
    );
};

export default About;