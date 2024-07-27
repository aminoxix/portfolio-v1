import Badge from "../../atoms/badge";
import type { WorkExperience } from "../../lib/type";

const CompanyFooter = ({ company }: { company: WorkExperience }) => {
  return (
    <div className="flex flex-wrap gap-4 pt-10">
      {company.tech_stack.map((tech) => (
        <Badge key={tech} text={tech} />
      ))}
    </div>
  );
};

export default CompanyFooter;
