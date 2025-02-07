"use client";
import CodeBlock from "@/components/ui/code-block";
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
        <div className="justify-start flex flex-col">
          <strong className="text-xl">1. Clerk Installation</strong>
          <CodeBlock codeString={installation} />
        </div>
      </div>
    </div>
  );
};

export default page;
