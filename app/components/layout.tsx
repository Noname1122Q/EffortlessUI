import Navbar from "@/components/Navbar";
import ComponentSidebar from "@/components/sidebars/ComponentSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="h-screen w-full flex">
        <ScrollArea>
          <ComponentSidebar />
        </ScrollArea>
        <ScrollArea className="flex-1">
          {" "}
          <Navbar />
          <SidebarTrigger />
          {children}
        </ScrollArea>
      </div>
    </SidebarProvider>
  );
};

export default ComponentsLayout;
