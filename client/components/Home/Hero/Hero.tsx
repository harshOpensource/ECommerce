import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import baazar from "../../../public/assets/bazaar.svg";
import bustle from "../../../public/assets/bustle.svg";
import instyle from "../../../public/assets/instyle.svg";
import versace from "../../../public/assets/versace.svg";

type Props = {};

function Hero({}: Props) {
  return (
    <div>
      <div className="overflow-hidden bg-gray-100">
        <div className="mx-auto flex min-h-[65vh] max-w-7xl flex-col px-4 md:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center pt-10 md:items-start md:px-4 md:pt-0">
            <span
              data-aos="fade-down"
              data-aos-delay="200"
              className="mb-2.5 rounded-md bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-600 md:mb-5"
            >
              Sale 70%
            </span>
            <h2
              data-aos="fade-right"
              data-aos-delay="300"
              className="mb-5 text-center text-[2.5rem] font-bold leading-tight text-black md:text-left md:text-5xl"
            >
              An Industrial Take on Streetwear
            </h2>
            <h3
              data-aos="fade-right"
              data-aos-delay="400"
              className="font-regular mb-5 text-center text-lg leading-tight text-neutral-700 md:mb-10 md:text-left"
            >
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.{" "}
            </h3>
            <Link
              href={"/products/products"}
              data-aos="fade-up"
              data-aos-delay="500"
              className="mb-10 flex items-center rounded bg-zinc-900 px-8 py-2.5 text-base font-normal text-white shadow-sm shadow-zinc-500"
            >
              <FiShoppingCart />
              <span className="ml-2">Start Shopping!</span>
            </Link>
            <div
              className="mb-5 flex w-full flex-wrap justify-center md:justify-between"
              data-aos-delay="600"
              data-aos="fade"
            >
              <Image
                priority
                src={baazar}
                alt={baazar}
                width={100}
                height={50}
                className={"mx-4 my-1"}
              />

              <Image
                priority
                src={bustle}
                alt={bustle}
                width={100}
                height={50}
                className={"mx-4 my-1"}
              />

              <Image
                priority
                src={instyle}
                alt={instyle}
                width={100}
                height={50}
                className={"mx-4 my-1"}
              />

              <Image
                priority
                src={versace}
                alt={versace}
                width={100}
                height={50}
                className={"mx-4 my-1"}
              />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-start">
            <Image
              priority
              src="/assets/hero.webp"
              alt="hero"
              quality={100}
              width={550}
              height={550}
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
