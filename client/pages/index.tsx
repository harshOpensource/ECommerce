import React from "react";
import { GetServerSideProps, NextPageContext } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Hero from "@/src/components/Home/Hero/Hero";
import Brands from "@/src/components/Home/Brands/Brands";
import Promotions from "@/src/components/Home/Promotions/Promotions";
type Props = {};
function index({}: Props) {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div>
      <Hero />
      <div className="bg-white">
        <div className=" py-12 text-center text-3xl font-bold text-gray-600 md:text-4xl bg-white">
          Our Brands
        </div>
        <div>
          {!session?.user?.name && (
            <button onClick={() => signIn("google")}>SignIn</button>
          )}
          {session?.user?.name}
          <button onClick={() => signOut()}>SignOut</button>
        </div>
        <Brands />
      </div>
      <Promotions />
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
