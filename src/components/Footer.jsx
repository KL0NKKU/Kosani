import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { usefulLinks } from '../data.js';

/**
 * Widget component renders a titled list of links
 * @param {Array} list - Array of link objects { id, url, title }
 * @param {string} title - Widget title
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">{title}</h4>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ id, title }) => (
        <li key={id} className="roboto">
          <NextLink href="#" title={title} />
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top footer-bg overflow-hidden">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo and Company Description */}
          <div className="col-xl-3">
            <div className="widget d-flex flex-column align-items-center">
              <div className="mb-5 d-flex justify-content-md-center justify-content-xxl-start w-100">
                <Image
                  src="/img/logo.webp"
                  alt="Logo | Kosani Oy"
                  width={200}
                  height={80}
                  unoptimized={true} // Prevents Next.js image optimization
                  className="text-center"
                />
              </div>
              <p className="lead mb-2 text-md-center text-xl-start fs-18 roboto">.</p>
            </div>

            {/* Social Media Links */}
            <div className="d-flex align-items-xl-start align-items-md-center flex-column">
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Quick Links Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <Widget list={usefulLinks} title="Linkit" />
          </div>

          {/* Contact Information Widget */}
          <div className="col-md-6 col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Ota Yhteyttä</h4>

              {/* Address */}
              <div className="d-flex mb-3 align-items-start">
                <i className="uil uil-location-pin-alt fs-30 text-main" />
                <address className="ms-2 m-0 mt-1 roboto">Ojantaustantie 15, 05400 Hyvinkää</address>
              </div>

              {/* Email */}
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-main" />
                <a href="mailto:buildify@gmail.com" className="link-body ms-2 roboto">
                  info@kosani.fi
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="d-flex">
                <i className="uil uil-phone-volume fs-26 text-main" />
                <p className="mt-1 ms-2 fs-18 d-flex flex-column roboto">
                  <a href="tel:+358405589933">040 558 9933</a>
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="col-xl-3 mt-md-5 mt-xl-0 mt-10 justify-content-md-center d-flex">
            <div className="widget">
              <h4 className="widget-title fs-18 mb-3 text-uppercase oswald">Google Map</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.2336379089686!2d24.840636878122755!3d60.672223275292296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468e0e6c34951593%3A0x33dbc88c1e1d5bcc!2sOjantaustantie%2015%2C%2005800%20Hausj%C3%A4rvi!5e0!3m2!1sfi!2sfi!4v1776701000745!5m2!1sfi!2sfi"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </div>

          {/* Horizontal separator */}
          <hr className="mt-4 mt-md-4 mb-7" />

          {/* Footer copyright */}
          <div className="d-md-flex align-items-center justify-content-center">
            <p className="mb-2 mb-lg-0 text-center roboto">© {currentYear} Kosani Oy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
