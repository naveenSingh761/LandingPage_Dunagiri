import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="Myfooter">
        <div className="contactFooterSec">
          <h3>Contact Us</h3>

          <p>TEL: +91 98102 67719</p>

          <p>+91 96901 32425</p>

          <p>WhatsApp: +91 98102 67719</p>

          <p>E-MAIL: delighted@dunagiri.com</p>
        </div>
        <div className="addressFooterSec">
          <h3>Address</h3>

          <p>Village Chari, Near Mahavatar</p>
          <p>Babaji's Cave, PO Dunagiri,</p>
          <p>Block Dwarahat, District</p>
          <p>Almora Uttarakhand, India </p>
        </div>
        <div className="socialFooterSec">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <FaFacebookF color="blue" />
            <FaInstagram color="deeppink" />
            <FaYoutube color="crimson" />
          </div>
        </div>
      </div>

      <div className="copyrightFooterSec">
        <p>Privacy Pollicy</p>
        <p>Cancellation and Refund Policy</p>
        <p>Terms and Conditions</p>
        <p>FAQs</p>
        <p>Contact Us</p>
      </div>
      <div className="copyrightFooterSec">
        <p>© 2023 by DUNAGIRI RETREAT </p>
      </div>
    </>
  );
};

export default Footer;
