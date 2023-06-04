import React from "react";

type Props = {};

function ProductItem({}: Props) {
  return (
    <div className="group rounded-2xl bg-white p-2 hover:scale-95 hover:transition-all transform hover:duration-500 hover:cursor-pointer">
      <div className="relative h-[400px] overflow-hidden rounded-2xl transition sm:h-[330px]">
        <a className="relative block h-full w-full">
          <img
            className="absolute h-full w-full duration-700  opacity-100"
            src="https://karashop.vercel.app/_next/image?url=%2Fassets%2Fproducts%2Fproduct-1.jpg&w=750&q=75"
          />

          <img
            className="absolute h-full w-full duration-700  opacity-100"
            src="https://karashop.vercel.app/_next/image?url=%2Fassets%2Fproducts%2Fproduct-3.jpg&w=750&q=75"
          />

          <img
            className="absolute h-full w-full duration-700  opacity-100"
            src="https://karashop.vercel.app/_next/image?url=%2Fassets%2Fproducts%2Fproduct-4.jpg&w=750&q=75"
          />
        </a>
      </div>

      <div className="mb-1 mt-2 space-y-4 px-1">
        <div className="flex gap-2">
          <button className="h-[40px] w-[40px] overflow-hidden rounded-full">
            <img
              src="https://karashop.vercel.app/_next/image?url=%2Fassets%2Fproducts%2Fproduct-1.jpg&w=750&q=75"
              height="40"
              width="40"
            />
          </button>

          <button className="h-[40px] w-[40px] overflow-hidden rounded-full">
            <img
              src="https://karashop.vercel.app/_next/image?url=%2Fassets%2Fproducts%2Fproduct-4.jpg&w=750&q=75"
              height="40"
              width="40"
            />
          </button>

          <button className="h-[40px] w-[40px] overflow-hidden rounded-full">
            <img
              src="https://karashop.vercel.app/_next/image?url=%2Fassets%2Fproducts%2Fproduct-3.jpg&w=750&q=75"
              height="40"
              width="40"
            />
          </button>
        </div>

        <div>
          <div>
            <h2 className="text-base font-medium">
              Black shirt with white border
            </h2>
            <h3 className="text-xs font-normal capitalize text-neutral-400">
              Jackets
            </h3>
          </div>

          {/*  */}

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">$35.00</h3>
            <div className="flex items-center justify-center text-xs font-medium text-neutral-500">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
