import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./themeSwitcher";

const Navbar = () => {
  const navItems = {
    "/": {
      name: "Home",
    },
    "/blog": {
      name: "Blog",
    },
  };

  return (
    <div className="w-full mb-14 ">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className=" flex items-center gap-2">
          <Image
            src="/icon.png" // public 폴더 안의 파일을 이렇게 참조
            alt="My Icon"
            width={64} // 원하는 너비
            height={64} // 원하는 높이
          />
          <h1 className="text-3xl font-bold">FE민석</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          {/* Theme Toggle Button */}
          <ThemeSwitcher />

          {/* Navigation Items */}
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className=" text-xl transition-all duration-200 hover:text-neutral-800 dark:hover:text-neutral-200 text-neutral-600 dark:text-neutral-400"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
