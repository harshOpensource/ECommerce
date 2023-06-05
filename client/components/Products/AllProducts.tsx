import React from "react";
import ProductItem from "./ProductItem";

type Props = {
  data: any;
};

function AllProducts({ data }: Props) {
  console.log("AllProducts", data);
  return (
    <div className="flex-[5]">
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {data && data.getProducts ? (
          data.getProducts.map((product: any, index: number) => (
            <div key={index}>
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
