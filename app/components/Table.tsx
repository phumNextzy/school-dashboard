import Image from "next/image";
import TRASH_ICON from "@/app/assets/icons/trash.svg";
import EDIT_BLACK_ICON from "@/app/assets/icons/edit-black.svg";
import { User } from "@/app/types/users";
import ORDER_ICON from "@/app/assets/icons/order.svg"

interface TableComponentProps {
  userData: User[];

}



const TableComponent = ({ userData }: TableComponentProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-6 px-6 bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-white border-b">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex justify-between min-w-[150px]">
                Description
                <Image src={ORDER_ICON} alt="ORDER_ICON" width={7} height={14} />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex justify-between min-w-[150px]">
                Departments
                <Image src={ORDER_ICON} alt="ORDER_ICON" width={7} height={14} />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex justify-between min-w-[150px]">
                Data Subject Types
                <Image src={ORDER_ICON} alt="ORDER_ICON" width={7} height={14} />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.title}
              </th>
              <td className="px-6 py-4 min-w-[150px]">{item.description}</td>
              <td className="px-6 py-4 min-w-[150px]">{item.department}</td>
              <td className="px-6 py-4 min-w-[150px]">{item.dataSubjectTypes.join(', ')}</td>
              <td className="px-6 py-4 text-right min-w-[150px]">
                <div className="flex flex-row gap-6">
                  <Image
                    src={EDIT_BLACK_ICON}
                    alt="EDIT_BLACK_ICON"
                    width={16}
                    height={16}
                  />
                  <Image
                    src={TRASH_ICON}
                    alt="TRASH_ICON"
                    width={16}
                    height={16}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {userData.length > 0 && (
              <tfoot className="bg-white">
              <tr>
                <td colSpan={5} className="py-4 text-right">
                  Showing 1 - {userData.length} of {userData.length} results
                </td>
              </tr>
            </tfoot>
        )}
    
      </table>
    </div>
  );
};

export default TableComponent;
