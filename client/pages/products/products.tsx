import { GET_PRODUCTS_QUERY } from "@/graphql/operations";
import { useQuery } from "@apollo/client";
import React from "react";
import { Product } from "../../../server/src/types";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import LeftNavigation from "@/components/Products/LeftNavigation";
import AllProducts from "@/components/Products/AllProducts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

type Props = {};

function products({}: Props) {
  const { data, loading, refetch } = useQuery(GET_PRODUCTS_QUERY);

  const cartItems = useSelector((state: any) => state.cart.cart);
  console.log(cartItems);

  return (
    <div>
      <Header cart={cartItems.length} />
      {/* main */}
      <div className="bg-neutral-100">
        {" "}
        <div className="mx-auto items-center p-4 xl:container ">
          <div className="flex gap-5">
            <LeftNavigation />
            <AllProducts data={data} />
          </div>
        </div>
      </div>

      {/* main end */}
      <Footer />
    </div>
  );
}

export default products;
