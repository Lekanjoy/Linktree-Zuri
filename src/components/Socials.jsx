import React from "react";
import github from "../assets/Icon.svg";
import slack from '../assets/slack.svg'

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-x-6 mb-20">
      <img src={slack} alt="Slack Logo" />
      <a href="https://github.com/Lekanjoy">
        <img src={github} alt="GitHub Logo" />
      </a>
    </div>
  );
};

export default Socials;
