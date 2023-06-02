import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { IconType } from "react-icons/lib";
import logo from "../../public/assets/logo.png";

const socialMedias: [IconType, string][] = [
  [BsInstagram, "https://instagram.com"],
  [BsTwitter, "https://twitter.com"],
  [BsFacebook, "https://facebook.com"],
  [BsLinkedin, "https://linkedin.com"],
];

export const Footer = () => {
  const footerLinks = [
    {
      label: "Company",
      links: [
        ["About", "/about"],
        ["Term Of Use", "/term-of-use"],
        ["Privacy Policy", "/privacy-policy"],
        ["How It Works", "/how-works"],
        ["contact Us", "/contact-us"],
      ],
    },
    {
      label: "Support",
      links: [
        ["Support Career", "/support"],
        ["Service", "/24-service"],
        ["Quick Chat", "/quick-chat"],
      ],
    },
    {
      label: "contact",
      links: [
        ["Whatsapp", "/whatsapp"],
        ["Support", "/24-service"],
      ],
    },
  ];

  return (
    <footer className="mb-16 bg-white md:mb-0">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-1">
            <Link href="/">
              <Image
                priority
                src={logo}
                alt="kara shop logo"
                width={100}
                height={35}
                quality={100}
              />
            </Link>
            <div className="py-4 text-sm font-normal text-neutral-500">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </div>
            <div className="my-5 flex justify-center md:justify-start">
              {socialMedias.map(([Icon, href]) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-between md:mt-0 md:flex-[2] md:justify-around">
            {footerLinks.map(({ label, links }) => (
              <div key={label} className="flex flex-col">
                <strong className="mb-5 text-sm font-bold text-neutral-600 md:text-base">
                  {label}
                </strong>
                <ul className="flex flex-col gap-2 text-xs font-medium text-neutral-500 md:text-sm">
                  {links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="transition hover:text-neutral-700"
                    >
                      {label}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-2 py-3">
          <div className="flex flex-col items-center justify-between gap-3 text-xs font-medium text-neutral-700 md:flex-row">
            <div>Copyright © 2023 KARA Shop</div>
            <Link href="https://github.com/mehrabmp/kara-shop" target="_blank">
              <BsGithub size="1.25rem" />
            </Link>
            <div>
              Developed By{" "}
              <strong>
                <Link href="/" target="_blank">
                  Harsh Bardhan
                </Link>
              </strong>
              {". "}
              {". All rights reserved"}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
