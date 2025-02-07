"use client";
import React from "react";
import LightDarkMode from "./LightDarkMode";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
        EffortlessUI
      </h1>
      <nav className="space-x-4">
        <a
          href="/"
          className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="/tpis"
          className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
        >
          TPIs
        </a>
        <a
          href="/components"
          className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
        >
          Components
        </a>
        <a
          href="/utils"
          className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
        >
          Utils
        </a>
      </nav>
      <div className="flex flex-row gap-2">
        <Link href={"https://github.com/Noname1122Q/EffortlessUI"}>
          <SiGithub className="size-6 text-slate-800 dark:text-slate-300 transition-colors duration-300" />
        </Link>
        <LightDarkMode />
      </div>
    </nav>
  );
};

export default Navbar;
