import Navbar from "@/components/Navbar";
import TPIsSidebar from "@/components/sidebars/TPIsSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const TPIsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="h-screen w-full flex">
        <ScrollArea>
          <TPIsSidebar />
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

export default TPIsLayout;
