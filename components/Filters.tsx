"use client";
import React, { useState } from "react";

const links = ["all", "Nextjs-13", "frontend", "backend", "fullstack"];

const Filters = () => {
  const [active, setActive] = useState("");

  const handleFilter = (Link: string) => {
    setActive(Link);
  };

  return (
    <ul className="text-white-800 body-text no-scrollbar flex max-w-full gap-2 overflow-auto py-5 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
