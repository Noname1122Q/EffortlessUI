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
  {
    number: "2",
    title: "Prisma Setup",
    description:
      "Run the code provided below to to create a prisma/schema.prisma directory. ",
    code: `npx prisma init`,
  },
  {
    number: "3",
    title: "Prisma Client Setup",
    description:
      "Create a db.ts file which provides access to the PrismaClient. ",
    code: `import { PrismaClient } from "@prisma/client";

    declare global {
      var cachedPrisma: PrismaClient;
    }

    export let prisma: PrismaClient;

    if (process.env.NODE_ENV === "production") {
      prisma = new PrismaClient();
    } else {
      if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
      }

      prisma = global.cachedPrisma;
    }
    `,
  },
  {
    number: "4",
    title: "Database Connnection",
    description:
      "For PostgreSQL use NeonDB. For MongoDB use Compass or Atlas. For SQL use PlanetScale. ",
    code: `DATABASE_URL=mydatabaseurl`,
  },
  {
    number: "5",
    title: "Add a database model.",
    description: "Use the model keyword to create a model ",
    code: `
      model User {
        id            String    @id @default(cuid())
        name          String?
        email         String?   @unique
        emailVerified DateTime?
        image         String?
      }
    `,
  },
  {
    number: "6",
    title: "Generate Prisma Client",
    description:
      "You have to generate the prisma client to access all necessary fields or models in the previously defined prisma object. ",
    code: `npx prisma generate`,
  },
  {
    number: "7",
    title: "Push Models To The Database",
    description:
      "Pushes the models inside the schema.prisma to your database. Also does the generation of the the PrismaClient.",
    code: `npx prisma db push`,
  },
  {
    number: "**",
    title: "Bonus Tip",
    description:
      "If you need to cleaar your database you can run the following:",
    code: `npx prisma migrate reset`,
  },
];

const page = () => {
  return (
    <div className="p-4 lg:p-12">
      <Heading
        title="Clerk Auth Setup"
        description="Follow the provided steps to initialize clerk in your existing project."
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
