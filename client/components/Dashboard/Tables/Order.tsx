import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

type Props = {};

function Order({}: Props) {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2>Orders</h2>
          <h2>Welcome Back, Clint</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Order</span>
              <span className="sm:text-left text-right">Status</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {data.map((order, id) => (
                <li
                  key={id}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FaShoppingBag className="text-purple-800" />
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-800 font-bold">
                        ${order.total.toLocaleString()}
                      </p>
                      <p className="text-gray-800 text-sm">
                        {order.name.first}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    <span
                      className={
                        order.status == "Processing"
                          ? "bg-green-200 p-2 rounded-lg"
                          : order.status == "Completed"
                          ? "bg-blue-200 p-2 rounded-lg"
                          : "bg-yellow-200 p-2 rounded-lg"
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className="hidden md:flex">{order.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;

export const data = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Smith",
    },
    total: 2795.95,
    status: "On Hold",
    method: "PayPal",
    date: "15 Minutes ago",
  },
  {
    id: 2,
    name: {
      first: "Chris",
      last: "Adams",
    },
    total: 1195.95,
    status: "Processing",
    method: "PayPal",
    date: "23 Minutes ago",
  },
  {
    id: 3,
    name: {
      first: "Sarah",
      last: "Smith",
    },
    total: 495.85,
    status: "Completed",
    method: "Visa",
    date: "1 Hour ago",
  },
  {
    id: 4,
    name: {
      first: "Joseph",
      last: "Choo",
    },
    total: 150.45,
    status: "Processing",
    method: "MasterCard",
    date: "1 Hour ago",
  },
  {
    id: 5,
    name: {
      first: "Steve",
      last: "Harding",
    },
    total: 175.25,
    status: "On Hold",
    method: "PayPal",
    date: "2 Hour ago",
  },
  {
    id: 6,
    name: {
      first: "Laura",
      last: "Croft",
    },
    total: 1295.75,
    status: "Completed",
    method: "Check",
    date: "3 Hour ago",
  },
  {
    id: 7,
    name: {
      first: "Michael",
      last: "Jones",
    },
    total: 89.95,
    status: "Completed",
    method: "MasterCard",
    date: "3 Hour ago",
  },
  {
    id: 8,
    name: {
      first: "James",
      last: "Bond",
    },
    total: 689.45,
    status: "Completed",
    method: "Visa",
    date: "7 Hour ago",
  },
  {
    id: 9,
    name: {
      first: "Haley",
      last: "Whiting",
    },
    total: 14.99,
    status: "Completed",
    method: "PayPal",
    date: "1 Day ago",
  },
  {
    id: 10,
    name: {
      first: "Tim",
      last: "Thomas",
    },
    total: 218.99,
    status: "Completed",
    method: "MasterCard",
    date: "1 Day ago",
  },
];
