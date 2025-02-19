"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
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

const tpis = [
  {
    groupLabel: "Auth",
    items: [
      {
        label: "Clerk",
        href: "/tpis/clerk",
      },
      {
        label: "Google OAuth",
        href: "/tpis/oauth",
      },
    ],
  },
  {
    groupLabel: "Database",
    items: [
      {
        label: "Prisma",
        href: "/tpis/prisma",
      },
    ],
  },
  {
    groupLabel: "AI",
    items: [
      {
        label: "Gemini API",
        href: "/tpis/gemini",
      },
    ],
  },
  {
    groupLabel: "Services",
    items: [
      {
        label: "Resend Email",
        href: "/tpis/resend",
      },
    ],
  },
];

const TPIsSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {tpis.map((tpi, i) => (
          <SidebarGroup className="p-2" key={i}>
            <SidebarGroupLabel className="font-bold">
              {tpi.groupLabel}
            </SidebarGroupLabel>
            <SidebarGroupContent className="space-y-2 gap2">
              {tpi.items.map((item) => (
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

export default TPIsSidebar;
