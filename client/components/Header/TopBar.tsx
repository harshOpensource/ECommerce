import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiChevronDown, FiGrid, FiPhone } from "react-icons/fi";
import type { IconType } from "react-icons";
import flag from "../../public/assets/de-flag.svg";

type Props = {};

function TopBar({}: Props) {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#232323] text-[10px] text-gray-300">
        <div className="mx-auto max-w-[1500px] items-center justify-center h-full">
          fvf
        </div>
      </div>
    </div>
  );
}

export default TopBar;
