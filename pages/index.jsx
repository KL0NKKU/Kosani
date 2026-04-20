import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';
import Contact from 'components/Contact';

const Home = () => {
  return (
    <Fragment>
      {/* Page loading progress bar */}
      <PageProgress />

      {/* Meta Information */}
      <Head>
        <title>Kosani Oy</title>
        <meta
          name="description"
          content="Free Next.js website template for builders, contractors & construction firms – built with Bootstrap"
        />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="tietoa-meista" className="wrapper">
          <div className="container py-12 py-md-14">
            <About
              headingH1="Paikallinen ja luotettava LVI-kumppani"
              span=""
              para="Kosani Oy on vuonna 2007 perustettu perheyritys, joka palvelee asiakkaita Hyvinkäällä ja lähialueilla. Tarjoamme LVI-alan työt ammattitaidolla ja pitkällä kokemuksella. Tavoitteena on tarjota sujuvaa palvelua, laadukasta työnjälkeä ja ratkaisuja, jotka kestävät käytössä."
              para2=" "
              imgPosition="left"
              src="/img/welcome-to-constructions.webp"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="palvelut" className="wrapper whychoose-bg">
          <div className="container py-14 py-md-16">
            <WhyChoose />
          </div>
        </section>
        <Contact />
      </main>
    </Fragment>
  );
};

export default Home;
