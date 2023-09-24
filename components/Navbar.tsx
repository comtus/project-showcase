import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-2 z-50 w-full border-b-2 border-black-200 bg-black-100/90 py-4 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src="/Comtus-Logo-Nobg.png"
            alt="logo"
            width={55}
            height={40}
          />
        </Link>
        <Image
          src="/hamburger-menu.svg"
          alt="Hamburger Menu"
          width={30}
          height={30}
          className="block md:hidden"
        />
        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text !text-2xl text-gradient_blue-purple !font-bold">
            <Link id="home" href="/">
              Home
            </Link>
          </li>
          <li className="body-text !text-2xl text-gradient_blue-purple !font-bold">
            <Link id="about" href="/about">
              About
            </Link>
          </li>
          <li className="body-text  !font-bold">
            <Link href="https://comtus.github.io" target="_blank">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
