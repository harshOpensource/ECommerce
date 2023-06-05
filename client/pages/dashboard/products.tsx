import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Products from "@/components/Dashboard/Tables/Products";
import CreateProduct from "../../components/Dashboard/Modals/AddProduct";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { GET_PRODUCTS_QUERY } from "@/graphql/operations";
import { useQuery } from "@apollo/client";

type Props = {
  session: Session;
};

function products({ session }: Props) {
  const { data } = useQuery(GET_PRODUCTS_QUERY);
  console.log(data);

  return (
    <div>
      <div className="flex">
        <Sidebar page="products" />

        <main className="ml-20 w-full bg-gray-100">
          <CreateProduct />
          <Products session={session} data={data} />
        </main>
      </div>
    </div>
  );
}

export default products;

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
