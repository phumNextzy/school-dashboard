import React from "react";
import HOME from "../assets/icons/home.svg";
import Image from "next/image";

interface BreadcrumbProps {
  currentPath: string;
}

function Breadcrumb({ currentPath }: BreadcrumbProps) {
  return (
    <div className="flex flex-row items-center my-auto">
      <Image
        src={HOME}
        alt="HOME_ICON"
        width={16}
        height={16}
        className="mb-0.5"
      />
      <h4 className="ml-4 text-md text-gray-400">/ {currentPath}</h4>
    </div>
  );
}

export default Breadcrumb;