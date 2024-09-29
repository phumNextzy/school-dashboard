import { ReactNode } from "react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="w-full md:w-1/6 bg-[#F5F5F5] text-black p-0 xl:px-6 xl:py-4">
          <Sidebar />
        </div>
        <main className="w-full md:w-5/6 p-0 xl:p-6">{children}</main>
      </div>
    </div>
  );
}
