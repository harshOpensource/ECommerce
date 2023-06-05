import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Stripe from "stripe";
import getStripe from "../utils/getStripe";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { removeFromCart } from "../Store/store";
import { useMutation } from "@apollo/client";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { CREATE_ORDER_MUTATION } from "@/graphql/operations";
import CheckoutProduct from "@/components/Cart/CheckoutProduct";
import Button from "@/components/Cart/Button";
import Header from "@/components/Header/Header";
import { fetchPostJSON } from "@/utils/api-helper";

const stripePromise = loadStripe(
  "pk_test_51MajYZSF2PecETdO9oTkM777tiBoWNHcd9jGDBxMmlT9Skmb5QDFB7P9JBbdZ6BKk0weBrl0mFrhhNkcudKhVMXY00Cqsd3UpI"
);

type Props = {
  session: Session;
};
function calculateTotalPrice(items: any) {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice += items[i].price * items[i].quantity;
  }
  return totalPrice;
}
function checkout({ session }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const items: any = useSelector((state: any) => state.cart.cart);
  const totalPrice = calculateTotalPrice(items);
  console.log("items", items);
  const [createOrder, { data, error, loading }] = useMutation(
    CREATE_ORDER_MUTATION
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  /* */

  const createCheckoutSession = async () => {
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/checkout_session",
      {
        items: items,
      }
    );

    /* // Internal Server Error
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    } */

    // Redirect to checkout
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });

    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };

  return (
    <div>
      <Header cart={items.length} />
      <div className="min-h-screen overflow-hidden bg-[#E7ECEE]">
        <main className="mx-auto max-w-5xl pb-24">
          <div className="px-5">
            <div
              className="my-4 text-3xl font-semibold lg:text-4xl"
              suppressHydrationWarning={true}
            >
              {items.length > 0 ? "Review your bag." : "Your bag is empty."}
            </div>
            <p className="my-4">Free delivery and free returns.</p>
            {items.length === 0 && (
              <Button
                title="Continue Shopping"
                onClick={() => router.push("/")}
              />
            )}
          </div>
          <div className="mx-5 md:mx-8">
            {/* {Object.entries(groupedItemsInBasket).map(([key, items]) => (
<CheckoutProduct key={key} items={items} id={key} />
))} */}
            <div suppressHydrationWarning={true}>
              {items.map((item: any) => (
                <div key={item.id} suppressHydrationWarning={true}>
                  <CheckoutProduct items={item} id={item.id} />{" "}
                </div>
              ))}
            </div>
            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{totalPrice}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row">
                      Estimated tax for:{" "}
                      <p
                        className="flex cursor-pointer items-end text-blue-500 
hover:underline"
                      >
                        Enter zip code
                        <AiOutlineCaretDown className="h-6 w-6" />
                      </p>
                    </div>
                    <p>{(totalPrice * 12) / 100}</p>
                  </div>
                </div>
                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Total</h4>
                  <h4>{totalPrice + (totalPrice * 12) / 100}</h4>
                </div>
              </div>
              <div className="my-14 space-y-4">
                <h4 className="text-xl font-semibold">
                  How would you like to check out?
                </h4>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="order-2 flex flex-1 flex-col items-center roundedxl bg-gray-200 p-8 py-12 text-center">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      <span>Pay Monthly</span>
                      <span>with Apple Card</span>
                      <span>
                        Rs 283.16/mo. at 0% APR<sup className="-top-1">◊</sup>
                      </span>
                    </h4>
                    <Button title="Check Out with Apple Card Monthly Installments" />{" "}
                    <p className="mt-2 max-w-[240px] text-[13px]">
                      0.00 due today, which includes applicable full-price
                      items, down payments, shipping, and taxes.
                    </p>
                  </div>
                  <div
                    className="flex flex-1 flex-col items-center space-y-8 
rounded-xl bg-gray-200 p-8 py-12 md:order-2"
                  >
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      Pay in full
                      <span>{/* currency */}</span>
                    </h4>
                    <Button
                      noIcon
                      title="Check Out"
                      width="w-full"
                      onClick={() => createCheckoutSession()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default checkout;
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
