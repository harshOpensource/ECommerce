import Header from "@/components/Dashboard/Header/Header";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Customers from "@/components/Dashboard/Tables/Customers";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

type Props = {};

function Consumers({}: Props) {
  return (
    <div className="flex">
      <Sidebar page="Consumers" />

      <main className="ml-20 w-full">
        <Customers />
      </main>
    </div>
  );
}

export default Consumers;
