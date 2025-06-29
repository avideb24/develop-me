"use client";

import SectionTitle from "@/components/reusuable/section-title";
import React, { useRef } from "react";
import cardIcon from "@/assets/icons/card-icon.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import arrowIcon from "@/assets/icons/arrow-light.png";


const Skills = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const cards = [
        {
            id: 1,
            title: "HTML & CSS",
            icon: cardIcon,
            text: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        },
        {
            id: 2,
            title: "Javascript",
            icon: cardIcon,
            text: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        },
        {
            id: 3,
            title: "Webflow",
            icon: cardIcon,
            text: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        },
        {
            id: 4,
            title: "HTML & CSS",
            icon: cardIcon,
            text: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        },
        {
            id: 5,
            title: "Javascript",
            icon: cardIcon,
            text: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        },
        {
            id: 6,
            title: "Webflow",
            icon: cardIcon,
            text: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
        },
    ];

    return (
        <section className="container">
            <div className="bg-dark text-light py-32 px-16 rounded-3xl">
                <SectionTitle title={"Why Choose me"} isDark={true} />
                
                {/* Title & Arrows */}
                <div className="flex justify-between items-start gap-6 flex-wrap relative">
                    <h2 className="text-5xl font-semibold max-w-md leading-[70px]">
                        My Extensive <br /> List of Skills
                    </h2>

                    <div className="flex items-center gap-6">
                        <p className="h-fit max-w-md text-right leading-8 border-b border-b-light pb-5 border-opacity-40">
                            Building the worlds best marketing Your trusted partner for strategy, design, and dev.
                        </p>
                    </div>

                    {/* Custom Navigation Buttons */}
                        <div className="absolute -bottom-6 right-0 flex gap-2 pt-1">
                            <button
                                ref={prevRef}
                                className="w-10 h-10 border border-light rounded-full flex items-center justify-center"
                            >
                                <Image src={arrowIcon} className="object-contain p-2" alt="prev icon" />
                            </button>
                            <button
                                ref={nextRef}
                                className="w-10 h-10 border border-light rounded-full flex items-center justify-center"
                            >
                                 <Image src={arrowIcon} className="object-contain p-2 rotate-180" alt="prev icon" />
                            </button>
                        </div>
                </div>

                {/* Swiper Slider */}
                <div className="mt-16 relative -mx-4 px-4 overflow-hidden">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={1.2}
                        breakpoints={{
                            768: {
                                slidesPerView: 2.2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        modules={[Navigation]}
                        className="!overflow-visible"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="bg-[#1A1A1A] p-6 rounded-2xl text-light transition-all duration-300 min-h-[260px]">
                                    <Image src={card.icon} className="w-20 h-20 mb-4" alt={card.title}/>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Skills;
