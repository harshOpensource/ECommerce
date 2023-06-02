import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/logo.png";
import TopBar from "./TopBar";
import AnnouncementBar from "./AnnouncementBar";
type Props = {};

function Header({}: Props) {
  return (
    <div>
      <AnnouncementBar />
      <TopBar />
      <div className="">
        <div className="flex w-full bg-green-600">
          <div>
            <Link href="/">
              <Image src={logo} width={100} height={100} alt="logo" />
            </Link>
          </div>

          <div>fbgfb</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
