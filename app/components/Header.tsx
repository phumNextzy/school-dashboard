import React from "react";
import Image from "next/image";
import LOGO from "@/app/assets/images/logo.png";
import USER_AVATAR from "@/app/assets/images/user-avatar.png";

function Header() {
  return (
      <div className="text-black px-6 py-3 flex justify-between bg-white">
        <div className="flex flex-row gap-4">
          <Image src={LOGO} alt="SCHOOL_LOGO" width={33.55} height={40} />
          <h1 className="text-base font-semibold my-auto">
            PDPA / International School{" "}
          </h1>
        </div>
        <Image
          src={USER_AVATAR}
          alt="USER_AVATAR"
          width={32}
          height={32}
          className="my-auto"
        />
      </div>
  );
}

export default Header;
