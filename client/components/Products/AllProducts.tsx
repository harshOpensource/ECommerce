import React from "react";
import ProductItem from "./ProductItem";

type Props = {};

function AllProducts({}: Props) {
  return (
    <div className="flex-[5]">
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <ProductItem />
      </div>
    </div>
  );
}

export default AllProducts;
