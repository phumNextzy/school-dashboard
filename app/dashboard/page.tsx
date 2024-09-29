"use client";
import { useState } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import ADD_ICON from "@/app/assets/icons/add.svg";
import EXPORT_ICON from "@/app/assets/icons/export.svg";
import FILTER_ICON from "@/app/assets/icons/filter.svg";
import IMPORT_ICON from "@/app/assets/icons/import.svg";
import DATA_ICON from "@/app/assets/icons/data.svg";
import COLLECTION_ICON from "@/app/assets/icons/collections.svg";
import EDIT_ICON from "@/app/assets/icons/edit.svg";
import EYE_ICON from "@/app/assets/icons/eye.svg";
import TableComponent from "@/app/components/Table";
import NewDataSidebar from "@/app/components/NewDataSidebar";
import FilterDataSidebar from "@/app/components/FilterDataSidebar";

const Page = () => {
  const [isAddSidebarVisible, setIsAddSidebarVisible] =
    useState<boolean>(false);
  const [isFilterSidebarVisible, setIsFilterSidebarVisible] =
    useState<boolean>(false);
  const toggleAddSidebar = () => {
    setIsAddSidebarVisible(!isAddSidebarVisible);
  };

  const toggleFilterSidebar = () => {
    setIsFilterSidebarVisible(!isFilterSidebarVisible);
  };
  return (
    <div className="bg-[#F5F5F5] p-6">
      <Breadcrumb currentPath="Current Path" />
      <div className="flex flex-col xl:flex-row xl:justify-between my-2 xl:my-4">
        <h2 className="text-2xl font-semibold">Data Mapping</h2>
        <div className="flex flex-row gap-2 my-2">
          <button
            className="text-black font-medium py-2 px-4 border bg-white border-[#FFFFFF] rounded flex items-center gap-2"
            onClick={toggleFilterSidebar}
          >
            <Image src={FILTER_ICON} alt="FILTER_ICON" width={16} height={16} />
            <p className="hidden lg:block xl:block">Filter</p>
          </button>

          <button className="text-black font-medium py-2 px-4 border bg-white border-[#FFFFFF] rounded flex items-center gap-2">
            <Image src={EXPORT_ICON} alt="EXPORT_ICON" width={16} height={16} />
            <p className="hidden lg:block xl:block">Export</p>
          </button>

          <button className="text-black font-medium py-2 px-4 border bg-white border-[#FFFFFF] rounded flex items-center gap-2">
            <Image src={IMPORT_ICON} alt="IMPORT_ICON" width={16} height={16} />
            <p className="hidden lg:block xl:block">Import</p>
          </button>

          <button
            onClick={toggleAddSidebar}
            className="text-white font-medium py-2 px-4 border bg-[#009540] border-[#FFFFFF] rounded flex items-center gap-2"
          >
            <Image src={ADD_ICON} alt="ADD_ICON" width={16} height={16} />
            <p>New Data</p>
          </button>
        </div>
      </div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul className="flex flex-wrap gap-6">
          <li className="me-1">
            <a
              href="#"
              className="py-0.5 text-black border-b-2 font-semibold border-[#009540] rounded-t-lg active flex gap-2"
              aria-current="page"
            >
              <Image src={DATA_ICON} alt="DATA_ICON" width={24} height={24} />
              Data Mapping
            </a>
          </li>
          <li className="me-1">
            <a
              href="#"
              className="py-0.5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 flex gap-2"
            >
              <Image
                src={COLLECTION_ICON}
                alt="COLLECTION_ICON"
                width={24}
                height={24}
              />
              Collection Sources
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row gap-2">
          <button className="text-[#009540] font-medium py-2 px-4 border-2 bg-white border-[#009540] rounded flex items-center gap-2">
            <Image src={EDIT_ICON} alt="EDIT_ICON" width={16} height={16} />
            Edit
          </button>

          <button className="text-black font-medium py-2 px-4 border bg-white border-[#FFFFFF] rounded flex items-center gap-2">
            <Image src={EYE_ICON} alt="EYE_ICON" width={24} height={24} />
            Visualize
          </button>
        </div>
      </div>
      <TableComponent />
      <NewDataSidebar
        isSidebarVisible={isAddSidebarVisible}
        toggleSidebar={toggleAddSidebar}
      />
      <FilterDataSidebar
        isSidebarVisible={isFilterSidebarVisible}
        toggleSidebar={toggleFilterSidebar}
      />
    </div>
  );
};

export default Page;
