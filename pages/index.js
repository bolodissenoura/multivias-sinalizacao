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

const Home = () => {
  return (
    <>
      <Head>
        <title>MultiVias</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Lorem, ipsum "
        title=" Why should you use this landing page">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur 
        provident similique, esse dicta illo, in asperiores atque fugiat quia eius. 
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur 
        provident similique, esse dicta illo, in asperiores atque fugiat quia eius. 
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatu
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
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