import type { WorkExperience } from "../../lib/type";

import CompanyFooter from "./footer";
import CompanyHeader from "./header";
import CompanyMain from "./main";

const CompanyProfile = ({ company }: { company: WorkExperience }) => {
  return (
    <>
      <CompanyHeader company={company} />
      <CompanyMain company={company} />
      <CompanyFooter company={company} />
    </>
  );
};

export default CompanyProfile;
