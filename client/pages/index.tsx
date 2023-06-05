import { data } from "@/components/Dashboard/Tables/Customers";
import { Footer } from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Brands from "@/components/Home/Brands/Brands";
import Hero from "@/components/Home/Hero/Hero";
import Promotions from "@/components/Home/Promotions/Promotions";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useSelector } from "react-redux";

type Props = {};

function index({}: Props) {
  const { data: session } = useSession();
  console.log("session", session);

  const cartItems = useSelector((state: any) => state.cart.cart);
  console.log(cartItems.length);

  return (
    <div>
      <Header cart={cartItems.length} />
      <Hero />
      <div className="bg-white">
        <div className=" py-12 text-center text-3xl font-bold text-gray-600 md:text-4xl bg-white">
          Our Brands
        </div>

        <Brands />
      </div>
      <Promotions />

      <Footer />
    </div>
  );
}
export default index;
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
