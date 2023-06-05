import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Order from "@/components/Dashboard/Tables/Order";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
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

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
