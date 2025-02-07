import ComponentSidebar from "@/components/ComponentSidebar";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex">
      <ScrollArea>
        <ComponentSidebar />
      </ScrollArea>
      <ScrollArea className="flex-1">
        {" "}
        <Navbar />
        {children}
      </ScrollArea>
    </div>
  );
};

export default ComponentsLayout;
