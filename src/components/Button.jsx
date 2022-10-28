import React from "react";

const Button = ({ text, id, href, title }) => {
  return (
    <a
      id={id}
      title={title}
      href={href}
      target="parent"
      className="text-[#101828] text-center font-medium text-sm rounded-[8px]
       mb-6 flex items-center justify-center h-[68px] bg-[#EAECF0] md:h-[60px]"
    >
      {text}
    </a>
  );
};

export default Button;
