import { workExperience } from "~/app/_components/lib/data";
import CompanyProfile from "~/app/_components/molecules/company";

const CompanySlug = ({ params }: { params: { slug: number } }) => {
  const slug = params.slug;
  const company = workExperience.find(
    (company) => company.track === Number(slug),
  );

  return company ? <CompanyProfile company={company} /> : null;
};

export default CompanySlug;
