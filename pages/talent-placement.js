import Layout from "../components/Shared/Layout";
import Service from "../components/Shared/Service";
import TalentPlacementHero from "../components/PageComponents/CapabilitiesPage/TalentPlacementHero";

export default function TalentPlacement() {
  return (
    <Layout>
      <TalentPlacementHero />
      <Service
        imageRight
        title="IT or Tech Recruitment Specialists"
        content="Web Developers. Software Developers or Engineers. Business Analysts. Scrum Masters. Product Owners. User Experience Designers. User Interface Designers. Product Designers. User Experience Researchers."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
      <Service
        title="Sales and Marketing Recruitment Specialists"
        content="Account Managers. Account Executives. Digital Marketing Specialists. Graphic Designers. SEO Specialists. Analysts."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
      <Service
        imageRight
        title="Supply Chain or Logistics Recruitment Specialists"
        content="Demand Planning Analysts. Procurement Managers. Distribution Centre Supervisors. Fleet Managers. Facilities Managers."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
      <Service
        title="Finance and Operations Recruitment Specialists"
        content="Payroll Managers. Payroll Specialists. Financial Analysts. Quantitative Analysts. Project Managers. Project Coordinators. Change Management Specialists."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
    </Layout>
  );
}
