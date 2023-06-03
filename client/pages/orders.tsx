import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Order from "@/components/Dashboard/Tables/Order";
import React from "react";

type Props = {};

function orders({}: Props) {
  return (
    <div>
      <div className="flex">
        <Sidebar page="orders" />

        <main className="ml-20 w-full">
          <Order />
        </main>
      </div>
    </div>
  );
}

export default orders;
