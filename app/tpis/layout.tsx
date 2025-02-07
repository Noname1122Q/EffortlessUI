import Navbar from "@/components/Navbar";
import TPIsSidebar from "@/components/TPIsSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const TPIsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex">
      <ScrollArea>
        <TPIsSidebar />
      </ScrollArea>
      <ScrollArea className="flex-1">
        {" "}
        <Navbar />
        {children}
      </ScrollArea>
    </div>
  );
};

export default TPIsLayout;
