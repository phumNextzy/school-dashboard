import React, { useState } from "react";
import Image from "next/image";
import FILTER_ICON from "@/app/assets/icons/filter.svg";
import SEARCH_ICON from "@/app/assets/icons/search.svg";

interface SidebarProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

interface FilterOptions {
  name: string;
  value: string;
}

function FilterDataSidebar({ isSidebarVisible, toggleSidebar }: SidebarProps) {
  const [departmentOptions, setDepartmentOptions] = useState<FilterOptions[]>([
    { name: "Human Resources", value: "Human Resources" },
    { name: "IT/IS", value: "IT/IS" },
    { name: "Admission", value: "Admission" },
    { name: "Marketing", value: "marketing" },
  ]);

  const [dataSubjectOptions, setDataSubjectOptions] = useState<FilterOptions[]>([
    { name: "Employees", value: "Employees" },
    { name: "Faculty Staff", value: "Faculty Staff" },
    { name: "Students", value: "Students" },
  ]);
  return (
    <>
      <div
        className={`fixed top-16 lg:top-0 xl:top-0 rounded-t-lg lg:rounded-none xl:rounded-none right-0 w-full h-full lg:w-[340px] xl:w-[340px] bg-white text-black shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center px-6 h-16 border-b">
            <div className="flex flex-row gap-1">
              <Image
                src={FILTER_ICON}
                alt="FILTER_ICON"
                width={16}
                height={16}
              />
              <h2 className="font-semibold text-base text-center">Filter</h2>
            </div>

            <div className="flex flex-row gap-8">
              <h4
                onClick={toggleSidebar}
                className="my-auto text-sm cursor-pointer"
              >
                Reset
              </h4>
              <button
                type="button"
                className="text-white border py-2 px-3 bg-[#009540] border-[#FFFFFF] rounded-lg flex gap-2 w-[101px] h-[40px] text-sm"
                onClick={() => console.log("Save clicked")}
              >
                <p>Apply Filter</p>
              </button>
            </div>
          </div>

          <div className="border-b h-[48px] flex items-center">
            <div className="px-6 flex flex-row gap-2 items-center">
              <Image
                src={SEARCH_ICON}
                alt="SEARCH_ICON"
                width={16}
                height={16}
              />
              <h4 className="my-auto">Search filter</h4>
            </div>
          </div>

          <div className="px-6">
            <div className="my-4">
              <h4 className="text-[#8C8C8C] text-xs font-semibold">DEPARTMENT</h4>
              <div className="flex flex-col my-4">
                {departmentOptions.map((option) => (
                  <div
                    className="flex flex-row gap-2 items-start mb-4"
                    key={option.value}
                  >
                    <input
                      id={option.value}
                      type="checkbox"
                      value={option.value}
                      className="w-4 h-4 text-[#009540] bg-gray-100 border-[#FFFFFF] rounded focus:ring-[#009540] peer-checked:bg-[#009540] focus:ring-1 my-auto"
                    />
                    <label
                      htmlFor={option.value}
                      className="text-sm font-medium text-black mt-1"
                    >
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-4">
              <h4 className="text-[#8C8C8C] text-xs font-semibold">DATA SUBJECT</h4>
              <div className="flex flex-col my-4">
                {dataSubjectOptions.map((option) => (
                  <div
                    className="flex flex-row gap-2 items-start mb-4"
                    key={option.value}
                  >
                    <input
                      id={option.value}
                      type="checkbox"
                      value={option.value}
                      className="w-4 h-4 text-[#009540] bg-gray-100 border-[#FFFFFF] rounded focus:ring-[#009540] peer-checked:bg-[#009540] focus:ring-1 my-auto"
                    />
                    <label
                      htmlFor={option.value}
                      className="text-sm font-medium text-black mt-1"
                    >
                      {option.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSidebarVisible && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </>
  );
}

export default FilterDataSidebar;
