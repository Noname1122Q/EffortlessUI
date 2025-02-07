"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const tpis = [
  {
    name: "Clerk",
    link: "/tpis/clerk",
  },
  {
    name: "Prisma",
    link: "/tpis/prisma",
  },
  {
    name: "Google OAuth",
    link: "/tpis/oauth",
  },
  {
    name: "Resend Email",
    link: "/tpis/resend",
  },
  {
    name: "Gemini AI",
    link: "/tpis/gemini",
  },
];

const TPIsSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 border-r border-slate-600 dark:border-slate-300">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 shadow-md p-4 transition-colors duration-300">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white my-4">
          TPIs
        </h2>
        <div className="flex flex-col items-center gap-3 w-full text-slate-600 dark:text-slate-300">
          {tpis.map((tpi, i) => (
            <Link
              className={cn(
                "w-full items-center justify-center text-center hover:bg-slate-200 hover:dark:bg-gray-700 transition-all duration-300 hover:cursor-pointer hover:scale-105 text-lg rounded-lg p-2",
                pathname == tpi.link && "dark:bg-slate-800 bg-slate-300"
              )}
              href={tpi.link}
              key={i}
            >
              {tpi.name}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default TPIsSidebar;
