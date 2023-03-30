import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

// TODO: need to fixate on a secondary color
// TODO: need to finalize about the pages to display

const NavLink = ({ to }: { to: string }) => {
  return (
    <Link
      href={`${to.toLowerCase()}`}
      className="text-md md:text-lg hover:font-bold text-slate-800 hover:text-rose-600 transition-all font-semibold underline underline-offset-2"
    >
      {to}
    </Link>
  );
};

function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-center md:justify-between py-1 md:py-3 shadow-sm mx-2">
      <Link
        href="/"
        className="text-xl md:text-2xl text-slate-950 hover:text-rose-600 tracking-wider font-bold  underline-offset-2"
      >
        /aslamjm.dev/
      </Link>
      <div className="flex items-center justify-center gap-4">
        {["Projects", "Ideas", "Blog"].map((link) => (
          <NavLink key={link} to={link} />
        ))}
      </div>
      <div className="flex items-center gap-3 invisible md:visible">
        <Link href="https://github.com/AslamJM">
          <FaGithub className="h-6 w-6 cursor-pointer hover:text-rose-600" />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitter className="h-6 w-6 cursor-pointer hover:text-rose-600" />
        </Link>
        <Link href="https://linkedin.com">
          <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-rose-600" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
