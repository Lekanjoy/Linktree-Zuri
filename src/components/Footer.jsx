import React from "react";
import zuri from '../assets/zuri.svg'
import ingressive from '../assets/I4G.svg'

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-4 w-full  justify-between pt-9 border-t md:flex md:flex-row">
      <img src={zuri} alt="Zuri Logo" className="w-[140px] md:w-[185px]" />
      <p className="font-medium text-sm text-[#667085] md:text-base">
        HNG Internship 9 Frontend Task
      </p>
      <img src={ingressive} alt="Zuri Logo" className="w-[99px] md:w-[132px]"/>
    </footer>
  );
};

export default Footer;
