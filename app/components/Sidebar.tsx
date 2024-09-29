import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import DATA_MAPPING_ICON from "../assets/icons/side-bar/data-mapping.svg";
import DATA_BREACH_REGISTER_ICON from "../assets/icons/side-bar/data-breach-register.svg";
import DATA_PROCESSORS_ICON from "../assets/icons/side-bar/data-processors.svg";
import GOVERNANCE_DOCUMENT_ICON from "../assets/icons/side-bar/governance-document.svg";
import SUBJECT_ACCESS_ICON from "../assets/icons/side-bar/subject-access-request.svg";

interface MenuData {
  name: string;
  icon: string;
  isActive: boolean;
  link: string;
}

function Sidebar() {
  const menuData: MenuData[] = [
    {
      name: "Data Mapping",
      icon: DATA_MAPPING_ICON,
      isActive: true,
      link: "",
    },
    {
      name: "Governance Document",
      icon: GOVERNANCE_DOCUMENT_ICON,
      isActive: false,
      link: "",
    },
    {
      name: "Data Processors",
      icon: DATA_PROCESSORS_ICON,
      isActive: false,
      link: "",
    },
    {
      name: "Subject Access Request",
      icon: SUBJECT_ACCESS_ICON,
      isActive: false,
      link: "",
    },
    {
      name: "Data Breach Register",
      icon: DATA_BREACH_REGISTER_ICON,
      isActive: false,
      link: "",
    },
  ];

  return (
    <div className="xl:py-8 border-b-2 xl:border-b-0">
      <nav className="overflow-x-auto">
        <ul className="flex flex-row gap-2 xl:flex-col space-x-4 xl:space-x-0 xl:space-y-4">
          {menuData.map((item, index) => (
            <li key={index}>
              <div className="flex flex-row items-center justify-center w-fit my-6 mx-4 xl:my-0 xl:mx-0">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="my-auto"
                />
                <Link href={item.link} passHref>
                  <span
                    className={`font-medium whitespace-nowrap xl:pt-1 cursor-pointer ${
                      item.isActive ? "text-defaultGreen" : "text-black"
                    }`}
                  >
                    <p className="pt-0.5">{item.name}</p>
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
