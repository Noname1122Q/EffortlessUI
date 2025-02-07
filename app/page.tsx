"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import LightDarkMode from "@/components/LightDarkMode";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>EffortlessUI - Your Component Library</title>
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900  transition-colors duration-300">
        <header className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            EffortlessUI
          </h1>
          <nav className="space-x-4">
            <a
              href="/"
              className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/tpis"
              className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
            >
              TPIs
            </a>
            <a
              href="/components"
              className="text-gray-800 dark:text-gray-200 transition-colors duration-300"
            >
              Components
            </a>
          </nav>
          <div className="flex flex-row gap-2">
            <Link href={"https://github.com/Noname1122Q/EffortlessUI"}>
              <SiGithub className="size-6 text-slate-800 dark:text-slate-300 transition-colors duration-300" />
            </Link>
            <LightDarkMode />
          </div>
        </header>

        {/* Hero Section */}
        <main className="text-center py-20 px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Accelerate Your Development
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 transition-colors duration-300">
            EffortlessUI provides pre-built components and integration tutorials
            to save you time.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="px-6 py-3 rounded-lg border border-gray-500 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              Explore Components
            </a>
          </div>
        </main>

        {/* Features Section */}
        <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Key Features
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pre-built Components",
                desc: "Beautiful, accessible components ready for use.",
              },
              {
                title: "Integration Tutorials",
                desc: "Guides for Tailwind, Prisma, Redux, and more.",
              },
              {
                title: "Dark/Light Mode",
                desc: "Seamlessly switch between light and dark themes.",
              },
              {
                title: "TypeScript Ready",
                desc: "Fully typed components for optimal developer experience.",
              },
              {
                title: "Responsive Design",
                desc: "Components adapt to all screen sizes.",
              },
              {
                title: "Efficiency-Focused",
                desc: "Built to save you time and effort.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-colors duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
