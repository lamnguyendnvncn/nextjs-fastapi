"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  function logOut() {
    setIsUserLoggedIn(false);
  }
  function logIn() {
    setIsUserLoggedIn(true);
  }
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-3 px-5">
      <Link href="/">
        <Image
          src="/itineready-logo.png"
          width={150}
          height={29}
          alt="Itineready logo"
          className="nav-logo"
        />
      </Link>
      <div className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="nav-text regular-16 flexCenter cursor-pointer transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
        {!isUserLoggedIn ? (
          <button
            type="button"
            className="flexCenter signInBtn"
            onClick={logIn}>
            <span className="bold-16 whitespace-nowrap cursor-pointer">
              Sign In
            </span>
          </button>
        ) : (
          <>
            <Link href="/user_profile">
              <Image
                src="/user.png"
                alt="User Profile avatar"
                width={40}
                height={37}
                className="h-full flex justify-center items-center"
              />
            </Link>
            <button type="button" className="outlineBtn" onClick={logOut}>
              Sign Out
            </button>
          </>
        )}
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};
