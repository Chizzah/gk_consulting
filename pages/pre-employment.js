import Layout from "../components/Shared/Layout";
import Service from "../components/Shared/Service";
import PreEmploymentHero from "../components/PageComponents/CapabilitiesPage/PreEmploymentHero";

export default function PreEmployment() {
  return (
    <Layout>
      <PreEmploymentHero />
      <Service
        imageRight
        title="Sourcing or Candidate Search"
        content="In some instances, companies want specialist Search professionals to source candidates on their behalf. GK will then provide a list of candidates (who are open to new opportunities), and have been contacted about the role, based on a detailed brief of who will best fit the role."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
      <Service
        title="Screening and Shortlisting"
        content="Many companies have strong employer brands, this translates into a rich talent database or pipeline. Perhaps you need a trained eye in mining through CVs to create a golden shortlist, outsource this task to us. We can create a screened shortlist, of your talent database, based on a detailed brief of who will best fit the role."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
      <Service
        imageRight
        title="Reference Checks"
        content="For some smaller companies with reliable referral programs, finding the best fit is often easy. Outsource the task of conducting employment reference checks to us."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
      <Service
        title="Background Verification Checks"
        content="For some smaller companies with reliable referral programs, finding the best fit is often easy. We run all verification checks through MiE - simply provide with a list of checks to verify."
        src="https://via.placeholder.com/720x480"
        alt="Placeholder image"
      />
    </Layout>
  );
}
