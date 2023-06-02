import React from "react";
import { GetServerSideProps, NextPageContext } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero/Hero";
import Brands from "@/components/Home/Brands/Brands";
import Promotions from "@/components/Home/Promotions/Promotions";
import { Footer } from "@/components/Footer/Footer";

type Props = {};

function index({}: Props) {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div>
      <Header />
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
