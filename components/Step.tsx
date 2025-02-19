import React from "react";
import CodeBlock from "./ui/code-block";

type Props = {
  number: string;
  title: string;
  description?: string;
  code?: string;
};

const Step = ({ number, title, description, code }: Props) => {
  return (
    <div className="flex flex-col p-2 ">
      <h2 className="font-semibold text-xl">
        {number}. {title}
      </h2>
      <p className="text-gray-600 text-sm font-normal">{description}</p>
      {code && <CodeBlock codeString={code} />}
    </div>
  );
};

export default Step;
