import Header from "@/components/Dashboard/Header/Header";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

type Props = {};

function dashboard({}: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="ml-20 w-full text-5xl font-extrabold flex items-center justify-center text-purple-600 h-full mt-16">
        Comming Soon!
      </main>
    </div>
  );
}

export default dashboard;

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
