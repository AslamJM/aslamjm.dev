"use client";

import Link from "next/link";
import React, { SVGProps } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { GithubIcon, TwitterIcon, LinkedIn } from "@/icons/SocialIcons";

const MotionLink = motion(Link);

interface SocialLinkProps {
  href: string;
  Icon: ({ className, ...rest }: SVGProps<SVGSVGElement>) => JSX.Element;
  className?: string;
}

interface NavlinkProps {
  href: string;
  name: string;
  classname?: string;
}

const socialLinks: SocialLinkProps[] = [
  {
    href: "https://twitter.com",
    Icon: TwitterIcon,
    className: "w-6 mr-2",
  },
  {
    href: "https://github.com/AslamJM",
    Icon: GithubIcon,
    className: "w-6 mx-2",
  },
  {
    href: "https://linkedin.com",
    Icon: LinkedIn,
    className: "w-6 ml-2",
  },
];

const navlinks: NavlinkProps[] = [
  {
    href: "/",
    name: "Home",
    classname: "mr-2 md:mr-4",
  },
  {
    href: "/projects",
    name: "Projects",
    classname: "mx-2 md:mx-4",
  },
  {
    href: "/ideas",
    name: "Ideas",
    classname: "mx-2 md:mx-4",
  },
  {
    href: "/blog",
    name: "Blog",
    classname: "ml-2 md:ml-4",
  },
];

const NavLink = ({ href, classname, name }: NavlinkProps) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-md md:text-lg  text-dark font-semibold relative group ${classname}`}
    >
      {name}
      <span
        className={`absolute inline-block bg-dark -bottom-0.5 left-0 ${
          path === href ? "w-full" : "w-0"
        } group-hover:w-full h-[1px] ease duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const SocialLink = ({ href, Icon, className }: SocialLinkProps) => {
  return (
    <MotionLink
      href={href}
      target="_blank"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center"
    >
      <Icon className={className} />
    </MotionLink>
  );
};

export const SocialLinkComponent = () => {
  return (
    <div className="flex items-center invisible md:visible">
      {socialLinks.map((link, index) => (
        <SocialLink
          key={link.href + "-" + index}
          Icon={link.Icon}
          href={link.href}
          className={link.className}
        />
      ))}
    </div>
  );
};

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center font-mont justify-center md:justify-between py-1 md:py-3  border-b-dark mx-2">
      <Link
        href="/"
        className="text-xl md:text-2xl text-dark hover:text-rose-600  font-bold "
      >
        {`<aslamjm.dev/>`}
      </Link>
      <div className="flex items-center justify-center ">
        {navlinks.map((link, index) => (
          <NavLink
            key={link.href + "-" + index}
            href={link.href}
            name={link.name}
            classname={link.classname}
          />
        ))}
      </div>
      <div className="flex items-center invisible md:visible">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.href + "-" + index}
            Icon={link.Icon}
            href={link.href}
            className={link.className}
          />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
