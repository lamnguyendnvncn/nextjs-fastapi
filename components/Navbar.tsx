import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export const Navbar = () => {
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
      <div className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="nav-text regular-16 flexCenter cursor-pointer transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
        <Button type="button" title="Sign in" />
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
