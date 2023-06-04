import {
  CREATE_PRODUCT_MUTATION,
  GET_PRODUCTS_QUERY,
} from "@/graphql/operations";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios";
import React, { useState } from "react";

type Props = {};

function AddProduct({}: Props) {
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
  const [isLoading, setIsLoading] = useState(false);

  const [createProduct, { error, loading: createLoader }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      onError: (error) => {
        console.error("Error creating product:", error);
      },
      onCompleted: (data) => {
        // Handle successful product creation
        console.log("Product created:", data.createProduct);
        refetch();
      },
    }
  );

  const { data, loading, refetch } = useQuery(GET_PRODUCTS_QUERY);

  console.log(data);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
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
      refetch();
      console.log(data);

      setName("");
      setDescription("");
      setCategory("");
      setImage([]);
      setQuantity(0);
      setPrice(0);
      setShowModal(false);
    } catch (error) {}
  };

  const handleImage = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
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
      } catch (error) {}
    }

    setImage(my_images);
    console.log(my_images);
    setIsLoading(false);
  };

  const handleFileChange = (event: any) => {
    setFile(event.target.files);
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 flex m-10"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Product
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl bg-gray-100 rounded-xl">
              {/*content*/}

              <div className="bg-gray-200 rounded-t-xl p-8 w-[600px] sm::w-[400px] md:w-[700px] ">
                {/* main modal */}
                <div className="">
                  <div className="flex items-center my-6 font-bold text-3xl text-gray-600">
                    Add Product
                  </div>
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
                    <form
                      onSubmit={handleImage}
                      className="flex justify-between my-4"
                    >
                      <div>
                        <input
                          multiple
                          type="file"
                          onChange={handleFileChange}
                        />
                      </div>
                      <button
                        className="px-4 py-2 border-2 border-orange-500 text-yellow-900 rounded-xl text-lg font-semibold"
                        type="submit"
                      >
                        {/*  */}

                        {isLoading ? (
                          <div>
                            <div role="status">
                              <svg
                                aria-hidden="true"
                                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        ) : (
                          <div>Upload</div>
                        )}

                        {/*  */}
                      </button>
                    </form>

                    {image.length > 0 && (
                      <div className="my-4">
                        <div className="text-base font-semibold">
                          Uploaded Images:
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-5">
                          {image.map((imageUrl: string) => (
                            <img
                              src={imageUrl}
                              onLoad={(e) => {
                                const img = e.target as HTMLImageElement;
                                if (img.naturalHeight > img.naturalWidth) {
                                  img.style.height = "150px";
                                  img.style.width = "auto";
                                } else {
                                  img.style.height = "auto";
                                  img.style.width = "150px";
                                }
                              }}
                              alt="Uploaded Image"
                              key={imageUrl}
                              className="items-center justify-center flex border-2 border-gray-400 p-1"
                            />
                          ))}
                        </div>
                      </div>
                    )}
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
}

export default AddProduct;
