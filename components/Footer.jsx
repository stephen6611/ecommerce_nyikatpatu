import React from 'react';
import { BsInstagram, BsToggleOff, BsWhatsapp} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Stephen All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/nyikatpatu/" target="_blank">
        <BsInstagram /> nyikatpatu
        </a>
        <a href="">
        <BsWhatsapp/> 081387742521
        </a>
      </p>
    </div>
  )
}

export default Footer