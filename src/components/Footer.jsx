import React from "react";
import zuri from '../assets/zuri.svg'
import ingressive from '../assets/I4G.svg'

const Footer = () => {
  return (
    <footer className="hidden justify-between pt-9 border-t md:flex">
      <img src={zuri} alt="Zuri Logo" className="max-w-[187px]" />
      <p className="font-medium text-[#667085]">
        HNG Internship 9 Frontend Task
      </p>
      <img src={ingressive} alt="Zuri Logo" className="max-w-[187px]" />
    </footer>
  );
};

export default Footer;
