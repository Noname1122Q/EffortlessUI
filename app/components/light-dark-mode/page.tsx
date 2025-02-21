"use client";
import Step from "@/components/Step";
import Heading from "@/components/ui/heading";
import React from "react";

const steps = [
  {
    number: "1",
    title: "Create Component",
    description: "",
    code: `import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function LightDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Set initial theme based on saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center  bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-500 transition-transform duration-300 " />
      ) : (
        <Moon className="w-6 h-6 text-gray-600 transition-transform duration-300 " />
      )}
    </button>
  );
}`,
  },
  {
    number: "2",
    title: "How to use?",
    description: "Just call the component anywhere you would like to use it. ",
    code: `<LightDarkMode />`,
  },
];

const page = () => {
  return (
    <div className="p-4 lg:p-12">
      <Heading
        title="Light Dark Mode"
        description="Implementing light/dark mode functionality with local storage."
      />
      <div className="space-y-4 p-4 flex flex-col ">
        {steps.map((step) => (
          <Step
            key={step.title}
            number={step.number}
            title={step.title}
            description={step.description}
            code={step.code}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
