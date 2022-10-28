import React from "react";
import zuri from '../assets/zuri.svg'

const Footer = () => {
  return (
    <footer className="hidden justify-between pt-3 border-t md:flex">
      <img src={zuri} alt="Zuri Logo" className="max-w-[187px]"/>
      <p className="font-medium text-[#667085]">
        HNG Internship 9 Frontend Task
      </p>
     <p>INGRESSIVE FOR GOOD</p>
    </footer>
  );
};

export default Footer;
