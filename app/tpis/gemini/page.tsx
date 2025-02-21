"use client";
import Step from "@/components/Step";
import Heading from "@/components/ui/heading";
import React from "react";

const steps = [
  {
    number: "1",
    title: "Prisma Installation",
    description: "",
    code: `npm install prisma`,
  },
];

const page = () => {
  return (
    <div className="p-4 lg:p-12">
      <Heading title="" description="" />
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
