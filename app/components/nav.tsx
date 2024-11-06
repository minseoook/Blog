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
    <>
      {/* 네비게이션 바의 높이만큼 공간을 확보하기 위한 더미 div */}
      <div className="h-24" /> {/* 필요한 경우 높이 조절 */}
      {/* Fixed 네비게이션 바 */}
      <div className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-black z-50 ">
        <div className="flex items-center justify-between max-w-2xl mx-auto h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="My Icon" width={64} height={64} />
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
                className="text-xl transition-all duration-200 hover:text-neutral-800 dark:hover:text-neutral-200 text-neutral-600 dark:text-neutral-400"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
