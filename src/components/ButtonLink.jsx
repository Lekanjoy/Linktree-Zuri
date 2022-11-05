import React from 'react'
import {Link} from 'react-router-dom'

const ButtonLink = ({id, to, text}) => {
  return (
    <Link
      id={id}
      to={to}
      className="text-[#101828] text-center font-medium text-sm rounded-[8px]
       mb-6 flex items-center justify-center h-[68px] bg-[#EAECF0] md:h-[76px] md:font-semibold"
    >
      {text}
    </Link>
  );
}

export default ButtonLink;