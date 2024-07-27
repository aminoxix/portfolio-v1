import Image from "next/image";
import type { WorkExperience } from "../../lib/type";

const CompanyHeader = ({ company }: { company: WorkExperience }) => {
  return (
    <div className="relative flex h-56 w-full rounded bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="-bottom-14 flex w-full items-center justify-center gap-2 md:absolute">
        <Image
          className="pl-4"
          src={String(company.icon)}
          alt={String(company.name)}
          width={134}
          height={134}
        />
        <div className="flex w-full flex-col gap-1 md:gap-8">
          <h1 className="text-xl font-semibold text-black md:text-2xl">
            {company.officialName}
          </h1>
          <h2 className="text-white">{company.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
