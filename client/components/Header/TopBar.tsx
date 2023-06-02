import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronDown, FiGrid, FiPhone } from "react-icons/fi";
import flag from "../../public/assets/de-flag.svg";

type Props = {};

function TopBar({}: Props) {
  return (
    <div className="bg-[#232323] text-gray-300 md:text-xs">
      <div className="mx-auto flex flex-col items-center px-4 py-1 xl:container md:flex-row md:py-2.5">
        <div className="pb-2 md:pb-0">
          Get 25% discount on your first purchase
        </div>

        {/*  */}

        <ul className="flex flex-wrap justify-center md:ml-auto">
          <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
            <Link
              href="/"
              className="flex items-center transition-colors hover:text-white"
            >
              Careers
            </Link>
          </li>

          <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
            <Link
              href="/"
              className="flex items-center transition-colors hover:text-white"
            >
              Help
            </Link>
          </li>

          <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
            <Link
              href="/"
              className="flex items-center transition-colors hover:text-white"
            >
              Buyer Protection
            </Link>
          </li>

          <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
            <Link
              href="/"
              className="flex items-center transition-colors hover:text-white"
            >
              <div className="mx-1 md:text-sm">
                <FiGrid />
              </div>
              Download our App
            </Link>
          </li>

          <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
            <Link
              href="/"
              className="flex items-center transition-colors hover:text-white"
            >
              <div className="mx-1 md:text-sm">
                <FiPhone />
              </div>
              + 919564878563
            </Link>
          </li>

          <li className="mx-1 pb-px md:mr-2.5 lg:[&:nth-of-type(3)]:mr-10 lg:[&:nth-of-type(5)]:mr-10">
            <Link
              href="/"
              className="flex items-center transition-colors hover:text-white"
            >
              <Image
                src={flag}
                alt="flag"
                height={20}
                width={20}
                className="mr-2 -mt-[1px]"
              />
              EN
              <div className="mx-1 md:text-sm">
                <FiChevronDown />
              </div>
            </Link>
          </li>
        </ul>

        {/*  */}
      </div>
    </div>
  );
}

export default TopBar;
