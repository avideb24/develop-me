import React from "react";
import logo from "@/assets/images/logo.png"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/reusuable/button";
import arrowIcon from "@/assets/icons/arrow.png";


const Navbar = () => {

  const navItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/" },
    { id: 3, label: "Portfolio", href: "/" },
    { id: 4, label: "Blog", href: "/" },
  ]

  return (
    <header className="bg-transparent py-8 flex justify-between items-center">

      {/* logo */}
      <Image src={logo} className="" alt="logo" />

      <div className="flex items-center gap-10">
        <nav className="space-x-6">
          {
            navItems?.map(item =>
              <Link href={item?.href || "/"} key={item?.id}>
                {item?.label}
              </Link>
            )
          }
        </nav>
      <Button icon={arrowIcon} text={"Start Project"} />
      </div>

    </header>
  );
};

export default Navbar;