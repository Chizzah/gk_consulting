import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    id: "1",
    label: "About",
    href: "/about",
  },
  {
    id: "2",
    label: "Capabilities",
    href: "/capabilities",
  },
  {
    id: "3",
    label: "Contact",
    href: "/contact",
  },
];

export default function TransparentHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent text-secondary">
      <nav className="flex items-center justify-between w-10/12 py-4 mx-auto lg:py-8">
        <Link href="/">
          <a>
            <div className="z-50 w-8 lg:w-12">
              <Image
                src="/logo.png"
                alt="GK Consulting Logo"
                layout="responsive"
                width="686px"
                height="364px"
              />
            </div>
          </a>
        </Link>
        <button
          className="z-50 bg-transparent lg:hidden focus:ring-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
          </svg>
        </button>
        <ul
          className={
            isOpen
              ? "absolute top-0 left-0 w-full min-h-screen bg-accent2 flex flex-col justify-center items-center text-lg lg:hidden"
              : "hidden lg:flex lg:items-center lg:justify-center lg:space-x-8"
          }
        >
          {links.map(({ id, href, label }) => {
            return (
              <li key={id} className="py-8 lg:py-0">
                <Link href={href}>
                  <a className="font-medium uppercase font-display hover:text-primary hover-animation">
                    {label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
