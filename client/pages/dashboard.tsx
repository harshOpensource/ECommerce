import Header from "@/components/Dashboard/Header/Header";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

type Props = {};

function dashboard({}: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-20 w-full">gbfg</main>
    </div>
  );
}

export default dashboard;
