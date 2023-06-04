import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Products from "@/components/Dashboard/Tables/Products";
import {
  CREATE_PRODUCT_MUTATION,
  GET_PRODUCTS_QUERY,
} from "@/graphql/operations";
import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import axios from "axios";

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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<Number>(0);
  const [image, setImage] = useState([]);
  const [imageName, setImageName] = useState("");
  const [file, setFile] = useState([]);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState<Number>(0);

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
          name: name,
          description: description,
          price: price,
          image: image,
          category: category,
          quantity: quantity,
        },
      },
    });
  };

  const handleImage = async (event: any) => {
    event.preventDefault();
    let my_images: any = [];

    for (const i in file) {
      const formDatas = new FormData();
      formDatas.append("file", file[i] as any);
      formDatas.append("upload_preset", "iwotzwao");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dau7p84vr/image/upload",
          formDatas
        );
        my_images.push(response.data.url);
      } catch (error) {
        console.error(error);
      }
    }

    setImage(my_images);
    console.log(my_images);
  };

  const handleFileChange = (event: any) => {
    setFile(event.target.files);
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
      {!showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-gray-100 rounded-xl">
              {/*content*/}
              <div className="bg-gray-200 rounded-t-xl p-8 w-[600px] sm::w-[400px] md:w-[700px] ">
                {/* main modal */}
                <div className="">
                  <div className="flex items-center justify-between mb-3">
                    {" "}
                    <label className="text-base font-semibold">Name : </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      onChange={(e) => setName(e.target.value)}
                      className="border-green-300 border-2 px-3 py-2 text-base rounded-md w-[250px]"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    {" "}
                    <label className="text-base font-semibold">
                      Description :{" "}
                    </label>
                    <textarea
                      placeholder="Product Description"
                      onChange={(e) => setDescription(e.target.value)}
                      className="border-green-300 border-2 px-3 py-2 text-base rounded-md w-[250px]"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    {" "}
                    <label className="text-base font-semibold">Price : </label>
                    <input
                      type="number"
                      placeholder="Product Price"
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setPrice(isNaN(value) ? 0 : value);
                      }}
                      className="border-green-300 border-2 px-3 py-2 text-base rounded-md w-[250px]"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    {" "}
                    <label className="text-base font-semibold">
                      Category :{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Product Category"
                      onChange={(e) => setCategory(e.target.value)}
                      className="border-green-300 border-2 px-3 py-2 text-base rounded-md w-[250px]"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    {" "}
                    <label className="text-base font-semibold">
                      Quantity :{" "}
                    </label>
                    <input
                      type="number"
                      placeholder="Product Quantity"
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setQuantity(isNaN(value) ? 0 : value);
                      }}
                      className="border-green-300 border-2 px-3 py-2 text-base rounded-md w-[250px]"
                    />
                  </div>

                  <div>
                    <form onSubmit={handleImage}>
                      <div>
                        <input
                          multiple
                          type="file"
                          onChange={handleFileChange}
                        />
                      </div>
                      <button type="submit">Upload</button>
                    </form>
                  </div>
                </div>

                {/* modal end */}
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end  p-6 border-t border-solid border-slate-200 rounded-b">
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

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
