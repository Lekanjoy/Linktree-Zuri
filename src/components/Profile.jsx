import React from "react";
import image from "../assets/image.svg";
import more from "../assets/more.svg";
import share from "../assets/share.svg";

const Profile = () => {
  return (
    <header className="relative w-full flex items-center justify-center flex-col">
      <img
        id="profile_img"
        src={image}
        className="mb-6"
        alt="Profile Image of User"
      />
      <p id="twitter" className="text-lg font-bold mb-8">
        Olalaykun
      </p>
      <p id="slack" className="hidden">
        Alabi Olalekan
      </p>
      <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#D0D5DD] absolute cursor-pointer right-0 -top-[20px] md:hidden">
        <img src={more} className="" alt="More Icon" />
      </div>
      <div className="hidden w-[40px] h-[40px] items-center justify-center rounded-full border border-[#D0D5DD] absolute cursor-pointer right-0 -top-[20px] md:flex ">
        <img src={share} className="" alt="More Icon" />
      </div>
    </header>
  );
};

export default Profile;
