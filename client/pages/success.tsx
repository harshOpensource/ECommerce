import {
  AiOutlineCheck,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useSession } from "next-auth/react";
interface Props {}
function Success({}: Props) {
  const router = useRouter();
  const { session_id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const { data: session } = useSession();
  return (
    <div>
      <header className="mx-auto max-w-xl bg-gray-100">
        <Link href="/">
          <div
            className="relative ml-4 h-16 w-8 cursor-pointer transition 
  lg:hidden"
          ></div>
        </Link>
      </header>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:maxw-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/">
            <div
              className="relative ml-14 hidden h-24 w-12 cursor-pointer transition 
  lg:inline-flex"
            ></div>
          </Link>
          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full 
  border-2 border-black"
            >
              <AiOutlineCheck className="h-8 w-8" />
            </div>
            <div>
              <div className="text-sm text-gray-600">
                Order #{session_id?.slice(-5)}
              </div>
              <h4 className="text-lg">
                Thank you{" "}
                {session ? session.user?.name?.split(" ")[0] : "Guest"}
              </h4>
            </div>
          </div>
          <div className="mx-4 divide-y divide-gray-300 rounded-md border bordergray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <div>Your order is confirmed</div>
              <div className="text-sm text-gray-600">
                We’ve accepted your order, and we’re getting it ready. Come back
                to this page for updates on your shipment status.
              </div>
            </div>
            <div className="pt-3 text-sm">
              <div className="font-medium text-gray-600">
                Other tracking number:
              </div>
              <div>CNB21441622</div>
            </div>
          </div>
          <div
            className="my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 
  lg:ml-14"
          >
            <div></div>Order updates
          </div>
          <div className="text-sm text-gray-600">
            You’ll get shipping and delivery updates by email and text.
          </div>
        </div>
        <div className="flex items-center justify-center w-full flex-col gap-6">
          <div className="hidden lg:inline">Need help? Contact us</div>
          <button
            onClick={() => router.push("/")}
            className="text-xl font-semibold text-yellow-800 bg-yellow-400 px-4 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
export default Success;
