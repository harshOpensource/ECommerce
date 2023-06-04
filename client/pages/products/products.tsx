import { GET_PRODUCTS_QUERY } from "@/graphql/operations";
import { useQuery } from "@apollo/client";
import React from "react";
import { Product } from "../../../server/src/types";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import LeftNavigation from "@/components/Products/LeftNavigation";
import AllProducts from "@/components/Products/AllProducts";

type Props = {};

function products({}: Props) {
  const { data, loading, refetch } = useQuery(GET_PRODUCTS_QUERY);

  console.log(data);

  return (
    <div>
      <Header />
      {/* main */}
      <div className="bg-neutral-100">
        {" "}
        <div className="mx-auto items-center p-4 xl:container ">
          <div className="flex gap-5">
            <LeftNavigation />
            <AllProducts />
          </div>
        </div>
      </div>

      {/* main end */}
      <Footer />
    </div>
  );
}

export default products;
