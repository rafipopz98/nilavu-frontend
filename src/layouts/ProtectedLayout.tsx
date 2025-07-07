import { Outlet } from "react-router-dom";
import AppSidebar from "../components/basic/AppSidebar";
import Navbar from "../components/basic/Navbar";
import { SidebarProvider } from "../components/ui/sidebar";

const ProtectedLayout = () => {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default ProtectedLayout;
