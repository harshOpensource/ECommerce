import Header from "@/components/Dashboard/Header/Header";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Customers from "@/components/Dashboard/Tables/Customers";
import { GET_USERS } from "@/graphql/operations";
import { useQuery } from "@apollo/client";
import { NextPageContext } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  session: Session;
};

function Consumers({ session }: Props) {
  const { loading, error, data, refetch } = useQuery(GET_USERS);

  console.log(data);

  return (
    <div className="flex">
      <Sidebar page="Consumers" />

      <main className="ml-20 w-full">
        <Customers data={data} refetch={refetch} session={session} />
      </main>
    </div>
  );
}

export default Consumers;

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
