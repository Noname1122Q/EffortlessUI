import React from "react";

type Props = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: Props) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight ">{title}</h2>
      <p className="text-sm text-muted-foreground"> {description}</p>
    </div>
  );
};

export default Heading;
