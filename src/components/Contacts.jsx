import React, { useState, useRef, useEffect } from "react";
import Footer from "./Footer";

const Contacts = () => {
  const [name] = useState("Olalekan Alabi");
  const [error, setError] = useState(false);
  const [errorFunc] = useState(null);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstNameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      emailRef.current.value === "" ||
      messageRef.current.value === "" 

    ) {
        alert('Fields cannot be empty')
      setError(true);
    } else {
      firstNameRef.current.value === "";
      lastNameRef.current.value === "";
      emailRef.current.value === "";
      messageRef.current.value === "";
      alert("Submission Successfully");
      setError(false);
      e.target.reset();
    }
  };


  const messageBoxStyles =
    "border border-[#D0D5DD] resize-none py-[12px] px-[14px] h-[132px] rounded-lg text-[#667085] outline-none placeholder:text-[#667085] shadow-[0px_1px_2px_rgba(16, 24, 40, 0.05] focus:shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#D1E9FF]";

  return (
    <form
      onSubmit={handleSubmit}
      className="font-sans px-4 py-16 w-full md:px-[112px]"
    >
      <div className="md:max-w-[1216px]">
        <div className="md:mx-auto md:w-[720px] md:mb-[96px]">
          <div className="mb-12 w-full">
            <h1 className="font-semibold text-4xl">Contact Me</h1>
            <p className="text-lg  mt-4 w-[343cpx] md:w-auto md:text-xl">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <div className="flex flex-col w-full mb-6 md:flex-row md:gap-x-6">
            <div className="flex flex-col mb-6 w-full">
              <label
                className=" mb-[6px] font-medium text-sm "
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="border border-[#D0D5DD] py-[10px] px-[14px]  rounded-lg text-[#667085] outline-none placeholder:text-[#667085]"
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                ref={firstNameRef}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className=" mb-[6px] font-medium text-sm "
                htmlFor="last_name"
              >
                Last name
              </label>
              <input
                className="border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg text-[#667085] outline-none placeholder:text-[#667085]"
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                ref={lastNameRef}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-[6px] font-medium text-sm " htmlFor="email">
              Email
            </label>
            <input
              className="border border-[#D0D5DD] py-[10px] px-[14px] rounded-lg text-[#667085] outline-none placeholder:text-[#667085]"
              type="email"
              id="email"
              placeholder="yourname@email.com"
              ref={emailRef}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-[6px] font-medium text-sm " htmlFor="message">
              Message
            </label>
            <textarea
              className={
                error
                  ? `${messageBoxStyles} shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#FFD3CC]`
                  : messageBoxStyles
              }
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              ref={messageRef}
            />
            {error && (
            <span className=" text-[#F83F23]  text-sm font-medium mt-[6px]">
              Please enter a message
            </span>
             )} 
          </div>
          <div className=" text-[#475467] mb-8">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            <span>
              You agree to providing your data to {name} who may contact you.
            </span>
          </div>
          <button
            id="btn__submit"
            className="bg-[#1570EF] text-white font-semibold mb-[66px] py-3 px-5 w-full rounded-lg md:mb-[92px] hover:bg-blue-500"
          >
            Send Message
          </button>
        </div>
        <Footer />
      </div>
    </form>
  );
};

export default Contacts;
