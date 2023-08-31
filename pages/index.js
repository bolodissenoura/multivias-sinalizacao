import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
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
      <SectionTitle
        pretitle="Lorem, ipsum"
        title="Lorem, ipsum dolor sit amet consectetur adipisicit">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur 
        provident similique, esse dicta illo, in asperiores atque fugiat quia eius. 
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Lorem, ipsum"
        title="Temporibus eum nihil ea quaerat possimus enim harum,">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatu
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Perguntas Frequentes">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus eum nihil ea quaerat possimus enim harum
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;