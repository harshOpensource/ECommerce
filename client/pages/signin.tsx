import Image from "next/image";
import React from "react";
import { BsGithub, BsTwitter, BsGoogle, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import google from "../public/assets/google.svg";
import { NextPageContext } from "next";
type Props = {};
function signin({}: Props) {
  return (
    <div>
      <div className="my-24 flex justify-center px-4">
        <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center text-base">
          <h3 className="mb-10 text-xl font-semibold leading-6 text-gray-900">
            Sign in
          </h3>
          <button
            type="button"
            className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md border border-solid border-zinc-400 bg-white px-4 py-2 font-medium transition 
hover:bg-zinc-100"
            onClick={() => signIn("google")}
          >
            <Image
              src={google}
              alt="continue with google"
              width="20"
              height="20"
            />
            Google
          </button>
          <button
            type="button"
            className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-black"
            onClick={() => signIn("github")}
          >
            <BsGithub size="1.2rem" />
            Github
          </button>
          <button
            type="button"
            className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md bg-[#1984c7] px-4 py-2 font-medium text-white transition hover:bg-[#0977ba]"
            onClick={() => signIn("linkedin")}
          >
            <BsLinkedin size="1.2rem" />
            linkedin
          </button>
          <button
            type="button"
            className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md bg-[#1DA1F2] px-4 py-2 font-medium text-white transition hover:bg-[#0977ba]"
            onClick={() => signIn("twitter")}
          >
            <BsTwitter size="1.2rem" />
            Twitter
          </button>
          <p className="mt-10 text-xs font-normal">
            By signing in, you agree to our{" "}
            <Link
              href="terms-service"
              className="text-blue-600 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="privacy-policy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
export default signin;
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        session,
      },
    };
  }
}
