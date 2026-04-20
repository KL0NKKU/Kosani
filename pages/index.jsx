import { Fragment } from 'react';
import Head from 'next/head';

// Components
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import WhyChoose from 'components/WhyChoose';
import Contact from 'components/Contact';

const Home = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Kosani Oy',
    url: 'https://www.kosani.fi/',
    email: 'tomi.kosani@gmail.com',
    telephone: '+358405589933',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ojantaustantie 15',
      postalCode: '05400',
      addressLocality: 'Hyvinkää',
      addressCountry: 'FI'
    },
    areaServed: ['Hyvinkää', 'Lähialueet'],
    description:
      'Kosani Oy tarjoaa LVI-asennukset, saneeraukset, uudiskohteet sekä huollot ja korjaukset Hyvinkäällä ja lähialueilla.'
  };

  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>LVI-palvelut Hyvinkäällä | Kosani Oy</title>
        <meta
          name="description"
          content="Kosani Oy tarjoaa LVI-asennukset, saneeraukset, uudiskohteet sekä huollot ja korjaukset Hyvinkäällä ja lähialueilla."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.kosani.fi/" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fi_FI" />
        <meta property="og:site_name" content="Kosani Oy" />
        <meta property="og:title" content="LVI-palvelut Hyvinkäällä | Kosani Oy" />
        <meta
          property="og:description"
          content="Kosani Oy tarjoaa LVI-asennukset, saneeraukset, uudiskohteet sekä huollot ja korjaukset Hyvinkäällä ja lähialueilla."
        />
        <meta property="og:url" content="https://www.kosani.fi/" />
        <meta property="og:image" content="https://www.kosani.fi/img/logo.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LVI-palvelut Hyvinkäällä | Kosani Oy" />
        <meta
          name="twitter:description"
          content="Kosani Oy tarjoaa LVI-asennukset, saneeraukset, uudiskohteet sekä huollot ja korjaukset Hyvinkäällä ja lähialueilla."
        />
        <meta name="twitter:image" content="https://www.kosani.fi/img/logo.webp" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main className="content-wrapper overflow-hidden">
        <Hero />

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
