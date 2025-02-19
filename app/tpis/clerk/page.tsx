"use client";
import Step from "@/components/Step";
import Heading from "@/components/ui/heading";
import React from "react";

const installation = `npm i clerk`;

const page = () => {
  return (
    <div className="p-4 lg:p-12">
      <Heading
        title="Clerk Auth Setup"
        description="Follow the provided steps to initialize clerk in your existing project."
      />
      <div className="space-y-4 p-4 flex flex-col ">
        <Step number="1" title="Clerk Installation" code={installation} />
      </div>
    </div>
  );
};

export default page;
