import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

import { benefitOne, benefitTwo } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Carrosel from "../components/carrosel";


const Home = () => {

  return (
    <>
      <Head>
        <title>MultiVias</title>
        <meta
          name="description"
          content="emporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae "
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="node_modules/keen-slider/keen-slider.min.css"
        />
      </Head>

      <Navbar />
      <Hero />
      <Carrosel/>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Footer />    </>
  );
}

export default Home;