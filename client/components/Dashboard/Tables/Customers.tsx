import React from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { User } from "../../../../server/src/types";
import { useMutation } from "@apollo/client";
import { CHANGE_USER_ROLE, DELETE_USER } from "@/graphql/operations";
import { Session } from "next-auth";

type Props = {
  data: any;
  refetch: any;
  session: Session;
};

function Customers({ data, refetch, session }: Props) {
  console.log(data);
  const [changeUserRole] = useMutation(CHANGE_USER_ROLE);
  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted: () => {
      refetch();
    },
  });

  const handleRoleChange = async (userId: any) => {
    try {
      const { data } = await changeUserRole({
        variables: {
          userId,
        },
      });
      console.log("User role changed:", data.changeUserRole);
    } catch (error) {
      console.error("Error changing user role:", error);
    }
  };

  const deleteUsers = async (userId: any) => {
    try {
      const { data } = await deleteUser({
        variables: {
          userId,
        },
      });
      console.log("User deleted:", data.deleteUser);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between p-4">
          <h2 className="text-purple-800 font-bold text-3xl ml-6">Customers</h2>
          <h2 className="text-purple-800 font-bold text-2xl ">
            Welcome Back, {session?.user?.name}
          </h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span className="text-yellow-600 font-bold text-xl">Name</span>
              <span className="text-yellow-600 font-bold text-xl sm:text-left text-right">
                Email
              </span>
              <span className=" text-yellow-600 font-bold text-xl hidden md:grid">
                Role
              </span>
              <span className="text-yellow-600 font-bold text-xl hidden sm:grid">
                Permissions
              </span>
            </div>
            <ul>
              {data &&
                data.getUsers &&
                data.getUsers.map((item: any, id: number) => (
                  <li
                    key={id}
                    className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <BsPersonFill className="text-purple-800" />
                      </div>
                      <p className="pl-4">{item.name}</p>
                    </div>
                    <p className="text-gray-600 sm:text-left text-right">
                      {item.email}
                    </p>
                    <div className="text-gray-600 sm:text-left text-right">
                      <span className="bg-green-200 py-2 px-4 font-semibold rounded-lg">
                        {item.role}
                      </span>
                    </div>
                    <div className="sm:flex hidden justify-between items-center">
                      <div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="1"
                          value={item.role === "user" ? "0" : "1"}
                          onChange={() => handleRoleChange(item.id)}
                          className={`slider-input ${
                            item.role === "user" ? "user-role" : "admin-role"
                          }`}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteUsers(item.id)}
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      >
                        Delete
                      </button>
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

export default Customers;
