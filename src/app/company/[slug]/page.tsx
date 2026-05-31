import { workExperience } from "~/app/_components/lib/data";
import CompanyProfile from "~/app/_components/molecules/company";

const CompanySlug = async ({
  params,
}: {
  params: Promise<{ slug: number }>;
}) => {
  const { slug } = await params;
  const company = workExperience.find(
    (company) => company.track === Number(slug),
  );

  return company ? <CompanyProfile company={company} /> : null;
};

export default CompanySlug;
