import Navbar from "@/components/layout/navbar";
import Button from "@/components/reusuable/button";
import React from "react";
import callIcon from "@/assets/icons/call.png";
import fbIcon from "@/assets/icons/fb.png";
import InstaIcon from "@/assets/icons/insta.png";
import twitterIcon from "@/assets/icons/twitter.png";
import Link from "next/link";
import Image from "next/image";


const HeroSection = () => {

    const socials = [
        { id: 1, label: "Facebook", icon: fbIcon },
        { id: 2, label: "Instagram", icon: InstaIcon },
        { id: 3, label: "Twitter", icon: twitterIcon },
    ];

    return (
        <section className="relative">

            {/* overlays */}
            <div className="absolute -z-10 bottom-20 -right-0 w-[700px] h-[250px] bg-primary opacity-100 rounded-full rotate-45 blur-[80px]"></div>

            <div className="absolute -z-20 -top-44 left-72 w-[600px] h-[1000px] bg-secondary opacity-90 rotate-[105deg] blur-[120px]"
                style={{ clipPath: 'polygon(50% 0%, 22% 100%, 72% 100%)' }}
                >
            </div>


            <div className="container">
                <Navbar />
                <div className="pt-20 pb-32">
                    <h1 className="text-[78px] leading-[140px] font-bold">Trusted <span className="highlight-text">Partner</span> for <br /> Your Website <span className="highlight-text">Develop.</span></h1>
                    <div className="flex gap-48 pt-16">
                        <div className="-translate-x-1 -rotate-90">
                            <p>@williamrey</p>
                            <div className="flex items-center gap-3">
                                <span className="w-10 h-[1px] bg-dark inline-block"></span>
                                {
                                    socials?.map(social =>
                                        <Link href={"/"} key={social?.id}>
                                            <Image src={social?.icon} className="w-4 object-contain rotate-90" alt={social?.label} />
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <p className="max-w-[700px] pb-6 text-lg">Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                            <Button icon={callIcon} text={"Schedule a Call"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;