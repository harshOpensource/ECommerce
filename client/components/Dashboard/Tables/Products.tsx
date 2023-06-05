import { NextPageContext } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShirtsinbulk, FaShoppingBag } from "react-icons/fa";

type Props = {
  session: Session;
  data?: any;
};

function Products({ session, data }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.getProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(data?.getProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2 className="text-purple-800 font-bold text-3xl ml-6">Products</h2>
          <h2 className="text-purple-800 font-bold text-2xl ">
            Welcome Back, {session?.user?.name}
          </h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span className="text-yellow-600 font-bold text-xl">Product</span>
              <span className="text-yellow-600 font-bold text-xl sm:text-left text-right">
                Category
              </span>
              <span className="text-yellow-600 font-bold text-xl hidden md:grid">
                Price
              </span>
              <span className="text-yellow-600 font-bold text-xl hidden sm:grid">
                Quantity
              </span>
            </div>
            <ul>
              {currentItems && currentItems.length > 0 ? (
                <div>
                  {currentItems.map((item: any, id: number) => (
                    <li
                      key={id}
                      className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                    >
                      <div className="flex">
                        <div className="bg-purple-100 p-3 rounded-lg">
                          <FaShirtsinbulk className="text-purple-800" />
                        </div>
                        <div className="pl-4">
                          <p className="text-gray-800 font-bold">{item.name}</p>
                          <p className="text-gray-800 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-gray-600 sm:text-left text-right">
                        <span className="bg-green-200 p-2 rounded-lg">
                          {item.category}
                        </span>
                      </div>
                      <p className="hidden md:flex">{item.price}</p>
                      <div className="sm:flex hidden justify-between items-center">
                        <p>{item.quantity}</p>
                        <BsThreeDotsVertical />
                      </div>
                    </li>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
            </ul>
          </div>
          <div className="flex justify-center mt-4 text-center">
            <nav className="block">
              <ul className="flex pl-0 rounded list-none flex-wrap">
                {Number.isInteger(totalPages) && totalPages > 0 && (
                  <nav className="block">
                    <ul className="flex pl-0 rounded list-none flex-wrap">
                      {Array.from(Array(totalPages).keys()).map(
                        (pageNumber) => (
                          <li
                            key={pageNumber}
                            className={`cursor-pointer relative block leading-tight px-3 py-2 text-sm mr-2 border border-gray-300 ${
                              currentPage === pageNumber + 1
                                ? "bg-purple-800 text-white"
                                : "bg-white text-gray-800 hover:bg-gray-200"
                            }`}
                            onClick={() => handlePageChange(pageNumber + 1)}
                          >
                            {pageNumber + 1}
                          </li>
                        )
                      )}
                    </ul>
                  </nav>
                )}
              </ul>
            </nav>
            <button
              className="bg-purple-800 text-white flex text-center px-2 pt-1 font-semibold"
              onClick={() => setCurrentPage(totalPages)}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
