import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/assets/logo.png";
import TopBar from "./TopBar";
import AnnouncementBar from "./AnnouncementBar";
import { FiUser, FiHeart, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import { IconType } from "react-icons";
import { signOut, useSession } from "next-auth/react";
import { Transition } from "@headlessui/react";
import { Search } from "./Search";
import { FaShoppingCart } from "react-icons/fa";

type Props = {
  cart?: number;
};

export interface NavLink {
  name: "Men" | "Women" | "Kids" | "Sale" | "Blog" | "Contacts";
  href: string;
  collapsible?: boolean;
}

export const navLinks: NavLink[] = [
  { name: "Men", href: "/products/men", collapsible: true },
  { name: "Women", href: "/products/women", collapsible: true },
  { name: "Kids", href: "/products/kids" },
  { name: "Sale", href: "/sale" },
  { name: "Blog", href: "/blog" },
  { name: "Contacts", href: "/contacts" },
];

export const sideNavLinks: [string, IconType][] = [
  ["/wishlist", FiHeart],
  ["/signin", FiUser],
];

function Header({ cart }: Props) {
  const { data: session } = useSession();

  const [hoveredNavLink, setHoveredNavLink] = useState<NavLink | null>();

  const handleShowMenu = (navLink: NavLink) => setHoveredNavLink(navLink);
  const handleCloseMenu = () => setHoveredNavLink(null);

  return (
    <div>
      <AnnouncementBar />
      <TopBar />
      <div className="">
        <div className="relative h-14 bg-white shadow-md shadow-gray-200">
          <div className="mx-auto flex h-full items-center px-4 xl:container">
            <div className="mr-5 flex shrink-0 items-center">
              <Link href="/">
                <Image
                  priority
                  src={logo}
                  alt="logo"
                  width={100}
                  height={35}
                  quality={100}
                />
              </Link>
            </div>
            <ul className="ml-auto hidden h-full md:flex">
              {navLinks.map((item, index) => (
                <li
                  className={`font-medium text-neutral-700 transition-colors ${
                    hoveredNavLink === item && "bg-violet-100 text-violet-700"
                  }`}
                  key={index}
                  onMouseEnter={() => handleShowMenu(item)}
                  onMouseLeave={handleCloseMenu}
                >
                  <Link
                    href={item.href}
                    className="flex h-full items-center px-5"
                    onClick={handleCloseMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {session?.user.role === "admin" && (
                <li
                  className={`font-medium text-neutral-700 transition-colors ${"hover:bg-violet-100 hover:text-violet-700"}`}
                  onMouseLeave={handleCloseMenu}
                >
                  <Link
                    href="/dashboard"
                    className="flex h-full items-center px-5"
                    onClick={handleCloseMenu}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
            <ul className="ml-auto items-center md:flex">
              <Search onSearch={(value) => console.log(value)} />
              {sideNavLinks.map(([url, Icon]) => (
                <Link key={url} href={url} className="ml-5 hidden md:block">
                  <Icon
                    className="text-neutral-700 transition-colors hover:text-violet-700"
                    size="20px"
                  />
                </Link>
              ))}

              <Link href="/checkout" className="ml-5 hidden md:block relative">
                <FiShoppingCart
                  className="text-neutral-700 transition-colors hover:text-violet-700"
                  size="20px"
                />

                <span className="absolute -top-3 -right-2 bg-yellow-300 rounded-full px-1 font-semibold text-sm">
                  {cart}
                </span>
              </Link>

              {session && (
                <button
                  className="ml-5 hidden rounded-full border border-solid border-violet-700 p-[2px] md:block"
                  onClick={() => signOut()}
                >
                  {session.user?.image && (
                    <Image
                      src={session.user.image}
                      alt="user profile image"
                      width={30}
                      height={30}
                      className="overflow-hidden rounded-full"
                      quality={100}
                    />
                  )}
                </button>
              )}
            </ul>
          </div>
          <Transition show={Boolean(hoveredNavLink?.collapsible)}>
            {/* {hoveredNavLink && (
            <MegaMenu
              type={hoveredNavLink.name === 'men' ? 'MEN' : 'WOMEN'}
              collections={collections}
              onShowMenu={() => handleShowMenu(hoveredNavLink)}
              onCloseMenu={handleCloseMenu}
            />
          )} */}
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default Header;
