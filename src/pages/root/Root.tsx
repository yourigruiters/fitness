import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

const Root = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <section className="flex flex-row w-full h-screen bg-default-900 overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} close={setIsSidebarOpen} />
      <section className="relative w-full h-full sm:ml-64">
        <Header
          sidebarIsOpen={isSidebarOpen}
          toggleSidebar={setIsSidebarOpen}
        />
        <div className="w-full h-full p-6 bg-gray-100 overflow-y-scroll">
          <Outlet />
        </div>
      </section>
    </section>
  );
};

export default Root;
