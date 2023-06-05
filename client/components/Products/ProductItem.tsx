import { addToCart } from "@/Store/store";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string[];
    category: string;
  };
};

function ProductItem({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart: any = () => {
    const id = product.id;
    const name = product.name;
    const price = product.price;
    const image = product.image;
    dispatch(addToCart({ id, name, price, image } as any));
  };

  return (
    <div className="group rounded-2xl bg-white p-2 ">
      <div className="relative h-[400px] overflow-hidden rounded-2xl transition sm:h-[330px]">
        <a className="relative block h-full w-full">
          <img
            className="absolute h-full w-full duration-700  opacity-100"
            src={product.image[3]}
          />

          <img
            className="absolute h-full w-full duration-700  opacity-100"
            src={product.image[1]}
          />

          <img
            className="absolute h-full w-full duration-700  opacity-100"
            src={product.image[0]}
          />
        </a>
      </div>

      <div className="mb-1 mt-2 space-y-4 px-1">
        <div className="flex gap-2">
          {product.image[0] && (
            <button className="h-[40px] w-[40px] overflow-hidden rounded-full">
              <img src={product.image[0]} height="40" width="40" />
            </button>
          )}

          {product.image[1] && (
            <button className="h-[40px] w-[40px] overflow-hidden rounded-full">
              <img src={product.image[1]} height="40" width="40" />
            </button>
          )}

          {product.image[2] && (
            <button className="h-[40px] w-[40px] overflow-hidden rounded-full">
              <img src={product.image[2]} height="40" width="40" />
            </button>
          )}
          {product.image[3] && (
            <button className="h-[40px] w-[40px] overflow-hidden rounded-full">
              <img src={product.image[3]} height="40" width="40" />
            </button>
          )}
        </div>

        <div>
          <div>
            <h2 className="text-base font-medium">{product.name}</h2>
            <h3 className="text-xs font-normal capitalize text-neutral-400">
              {product.category}
            </h3>
          </div>

          {/*  */}

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">
              ₹{product.price}
            </h3>
            <div>
              <div
                className="border-2 border-purple-400 text-yellow-800 font-semibold text-xl items-center justify-center p-2 ml-16 rounded-xl mb-2 hover:scale-95 hover:transition-all transform hover:duration-500 hover:cursor-pointer"
                onClick={handleAddToCart}
              >
                <FiShoppingCart />
              </div>
              <div className="flex items-center justify-center text-xs font-medium text-neutral-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="mr-1 text-yellow-400"
                  height="11px"
                  width="11px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                </svg>
                <h4>4.2 (69 Reviews)</h4>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
