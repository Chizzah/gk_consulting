import Layout from "../components/Shared/Layout";
import Hero from "../components/PageComponents/AboutPage/Hero";
import WhoWeAre from "../components/PageComponents/AboutPage/WhoWeAre";
import CoreValues from "../components/PageComponents/AboutPage/CoreValues";

export default function About() {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <CoreValues />
    </Layout>
  );
}
