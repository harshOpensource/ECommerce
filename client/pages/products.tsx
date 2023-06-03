import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Products from "@/components/Dashboard/Tables/Products";
import {
  CREATE_PRODUCT_MUTATION,
  GET_PRODUCTS_QUERY,
} from "@/graphql/operations";
import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";

type Props = {};

function products({}: Props) {
  return (
    <div>
      <div className="flex">
        <Sidebar page="products" />

        <main className="ml-20 w-full bg-gray-100">
          <CreateProduct />
          <Products />
        </main>
      </div>
    </div>
  );
}

export default products;

const CreateProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    image: [],
    category: "",
    quantity: 0,
  });

  const [createProduct, { error }] = useMutation(CREATE_PRODUCT_MUTATION, {
    onError: (error) => {
      console.error("Error creating product:", error);
    },
    onCompleted: (data) => {
      // Handle successful product creation
      console.log("Product created:", data.createProduct);
    },
  });

  const { data, loading } = useQuery(GET_PRODUCTS_QUERY);

  console.log(data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createProduct({
      variables: {
        input: {
          name: formData.name,
          description: formData.description,
          price: formData.price,
          image: formData.image,
          category: formData.category,
          quantity: formData.quantity,
        },
      },
    });
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
