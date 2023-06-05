import React from "react";

type Props = {};

function LeftNavigation({}: Props) {
  return (
    <div className="hidden flex-1 md:block">
      <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
        <div className="rounded-lg bg-neutral-100">
          <button className="flex w-full items-center justify-between px-2.5 py-2.5 text-sm font-semibold text-neutral-600">
            <span>PRODUCT SIZE</span>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition duration-200 rotate-180 transform"
              height="1rem"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {/*  */}

          <div className="p-3 flex items-center space-x-2 mt-2">
            <input type="checkbox" />
            <div className="font-bold text-base">S</div>
          </div>

          <div className="p-3 flex items-center space-x-2 mt-1">
            <input type="checkbox" />
            <div className="font-bold text-base">M</div>
          </div>

          <div className="p-3 flex items-center space-x-2 mt-1">
            <input type="checkbox" />
            <div className="font-bold text-base">L</div>
          </div>

          <div className="p-3 flex items-center space-x-2 mt-1">
            <input type="checkbox" />
            <div className="font-bold text-base">XL</div>
          </div>

          <div className="p-3 flex items-center space-x-2 mt-1">
            <input type="checkbox" />
            <div className="font-bold text-base">XXL</div>
          </div>

          <div className="p-3 flex items-center space-x-2 mt-1">
            <input type="checkbox" />
            <div className="font-bold text-base">XXXl</div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default LeftNavigation;
