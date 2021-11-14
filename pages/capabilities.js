import Layout from "../components/Shared/Layout";
import Hero from "../components/PageComponents/CapabilitiesPage/Hero";
import FadeInImageWithText from "../components/Shared/FadeInImageWithText";

export default function Capabilities() {
  return (
    <Layout>
      <Hero />
      <FadeInImageWithText
        imageRight
        src="https://via.placeholder.com/1920x1080"
        alt="Placeholder image"
        title="Talent Placement"
        content="End-to-end recruitment needs. Expanding your teams with the right talent can be challenging, it requires a huge time investment and specialist talent attraction skill."
        href="/talent-placement"
        link="Learn more about Talent Placement"
      />
      <FadeInImageWithText
        src="https://via.placeholder.com/1920x1080"
        alt="Placeholder image"
        title="Pre-Employment"
        content="Outsource the phases or points of your recruitment process that you do not have the internal capability, appetite or time for."
        href="/pre-employment"
        link="Learn more about Pre-Employment"
      />
    </Layout>
  );
}
