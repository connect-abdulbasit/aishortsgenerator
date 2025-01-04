import { AppSidebar } from "@/components/ui/app-sidebar";
import Header from "@/components/ui/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Header />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
