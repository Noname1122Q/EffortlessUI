"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";

const components = [
  {
    groupLabel: "Auth",
    items: [
      {
        label: "Light/Dark Mode",
        href: "/components/light-dark-mode",
      },
    ],
  },
];

const ComponentSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {components.map((component, i) => (
          <SidebarGroup className="p-2" key={i}>
            <SidebarGroupLabel className="font-bold">
              {component.groupLabel}
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-2 gap2">
              {component.items.map((item) => (
                <SidebarMenuItem
                  className={cn(
                    "list-none text-center hover:scale-105 transition-all duration-150 text-lg font-normal",
                    pathname === item.href &&
                      "opacity-70 bg-gray-700 rounded-lg"
                  )}
                  key={item.label}
                >
                  <Link href={item.href}>{item.label}</Link>
                </SidebarMenuItem>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default ComponentSidebar;
