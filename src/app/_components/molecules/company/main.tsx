import type { WorkExperience } from "../../lib/type";

const CompanyMain = ({ company }: { company: WorkExperience }) => {
  return (
    <div className="flex flex-col gap-10 pt-14 md:pt-36">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary md:text-3xl">
          {company.role}
        </h1>
        <p className="hidden text-white md:block">
          {company.tenure} {company.tenure !== "present" && "months"}
        </p>
      </div>
      <ul className="flex flex-col gap-3 text-white">
        {company.responsibilities.map((responsibility) => (
          <li className="text-justify" key={responsibility}>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyMain;
