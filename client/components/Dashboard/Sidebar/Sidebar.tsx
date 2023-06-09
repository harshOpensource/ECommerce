import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

type Props = {
  page?: string;
};

function Sidebar({ page }: Props) {
  return (
    <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <Link href="/dashboard">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
        <Link href="/dashboard">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <RxDashboard size={20} />
          </div>
        </Link>
        <Link href="/dashboard/Consumers">
          <div
            className={`${
              page === "Consumers" ? "bg-green-400" : "bg-gray-100"
            } hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block`}
          >
            <RxPerson size={20} />
          </div>
        </Link>
        <Link href="/dashboard/orders">
          <div
            className={`${
              page === "orders" ? "bg-green-400" : "bg-gray-100"
            } hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block`}
          >
            <HiOutlineShoppingBag size={20} />
          </div>
        </Link>

        <Link href="/dashboard/products">
          <div
            className={`${
              page === "products" ? "bg-green-400" : "bg-gray-100"
            } hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block`}
          >
            <MdOutlineProductionQuantityLimits size={20} />
          </div>
        </Link>

        <Link href="/">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
            <FiSettings size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
