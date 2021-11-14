import Layout from "../components/Shared/Layout";
import WeGetIt from "../components/PageComponents/IndexPage/WeGetIt";
import Hero from "../components/Shared/Hero";
import About from "../components/PageComponents/IndexPage/About";
import Process from "../components/PageComponents/IndexPage/Process";
import Capabilities from "../components/PageComponents/IndexPage/Capabilities";
import Clients from "../components/PageComponents/IndexPage/Clients";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <WeGetIt />
      <About />
      {/* <Process /> */}
      {/* <Capabilities /> */}
      <Clients />
    </Layout>
  );
}
