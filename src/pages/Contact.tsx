// import React from "react";
import telephoneImage from "../assets/IMG-20250129-WA0069.jpg";
import NavBar from "../Components/NavBar";
import companyLogo from "../assets/IMG-20250114-WA0049.jpg";
import mailSvg from "../assets/mail.svg";
import phoneImage from "../assets/IMG-20250129-WA0069.jpg";
import whatsaapImage from "../assets/bxl-whatsapp.svg";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { PhoneIncomingIcon } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [yourName, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNum, setMobileNum] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!yourName || !companyName || !emailId || !mobileNum) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("Form submitted successfully!");
    setName("");
    setCompanyName("");
    setEmailId("");
    setMobileNum("");
  };
  return (
    <section className="overflow-hidden">
      <div className="">
        <img
          src={companyLogo}
          alt=""
          className="w-24 h-24 fixed z-20 rounded-full mt-14 ml-2 extra:mt-2 xl:mt-16 xl:w-32 xl:h-32 extraeight:mt-2"
        />
      </div>
      <div className="">
        <NavBar />
      </div>
      <div className="">
        <h1 className="absolute pt-48 pl-8 text-white text-4xl xl:text-5xl xl:pl-52 xl:pt-60">
          Contact Us
        </h1>
        <img
          src={telephoneImage}
          alt=""
          className="w-full h-80 object-cover xl:h-[600px] extrasix:h-[400px] extrathree:h-[400px] extraone:h-[400px] extra:h-[400px] extraeight:h-[400px]"
        />
      </div>
      <div>
        <h1 className="pl-5 pt-8 text-3xl text-green-600">Get in Touch...</h1>
        <h1 className="pl-5 pt-10 pb-3  font-bold">BCJOG HEAD OFFICE</h1>
        <p className="pl-5 pr-28">
          1A,Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem,
          ipsum dolor.
        </p>
        <h1 className="pl-5 pt-10 pb-3  font-bold">BCJOG CO-OPORATE OFFICE </h1>
        <p className="pl-5 pr-28">
          1A,Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem,
          ipsum dolor.
        </p>
      </div>
      <p className="pl-5 pr-5 pt-5">
        Kindly fill out the form below, we will get back to you shortly
      </p>
      <form
        className="grid gap-6 pl-5 pt-16 xl:ml-[480px]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-[400px] h-10 pl-3 rounded border-b-2 border-0 extranine:w-52"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-[400px] h-10 pl-3 rounded border-b-2 border-0 extranine:w-52"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="your Email ID"
          className="w-[400px] h-10 pl-3 rounded border-b-2 border-0 extranine:w-52"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          className="w-[400px] h-10 pl-3 rounded border-b-2 border-0 extranine:w-52"
          value={mobileNum}
          onChange={(e) => setMobileNum(e.target.value)}
        />
        <textarea
          name=""
          id=""
          placeholder="Brief details of your requirements"
          rows={5}
          className="w-[400px] "
        ></textarea>
      <div className="mx-auto pb-24 xl:ml-[40px] extra:pl-14 extrafive:pl-8 xl:mt-0 extraeight:ml-6">
        <button className="btn bg-green-600 text-white text-lg w-32 extraeight:ml-7 extranine:ml-0">
          SUBMIT
        </button>
      </div>
      </form>
      <div className="bg-black text-white h-[500px]">
        <div className="xl:flex xl:gap-72 xl:justify-center">
          <div className="grid justify-items-center pt-8 text-lg">
            <img
              src={whatsaapImage}
              alt=""
              className="w-12 bg-white rounded-full "
            />
            <h1 className="pt-4">+234 5111 111 2232</h1>
            <h1>+234 1166 777 767</h1>
          </div>
          <div className="grid justify-items-center pt-8 text-lg">
            <img
              src={phoneImage}
              alt=""
              className="w-12 bg-white rounded-full"
            />
            <h1 className="pt-4">+234 1111 165 2232</h1>
            <h1>+234 8166 794 067</h1>
          </div>
          <div className="grid justify-items-center pt-8 pb-4 text-lg">
            <img src={mailSvg} alt="" className="w-12 bg-white rounded-full" />
            <p className="pt-4">SUPPORT@BCJOG-NG.COM</p>
            <p>INFO@BCJOG-NG.COM</p>
          </div>
        </div>
        <div className="bg-green-600 text-white pt-6 border-white mt-8">
          <h1 className="text-lg pl-5 pr-28 pt-5">
            Blessed CJ Liquefied Natural Gas Limited
          </h1>
          <div className="flex gap-4 pt-5 pl-5">
            <img src={whatsaapImage} alt="" className="" />
            <h1>supports@bcj-ng.com</h1>
          </div>
          <div className="flex gap-4 pt-5 pl-5">
            <img src={mailSvg} alt="" className="" />
            <h1>info@bcj-ng.com</h1>
          </div>
          <div className="flex gap-4 pt-5 pl-5">
            <img src={phoneImage} alt="" className="w-7 rounded-full" />
            <h1>+234 803 473 3871</h1>
          </div>

          <div className="flex gap-5 pl-5 pt-8 pb-8 ">
            <div className=" w-9 h-10 pl-1 pt-1 rounded-full bg-black">
              <FacebookIcon
                className="text-white rounded-btn  mt-1"
                fill="white"
              />
            </div>
            <div className=" w-9 h-8 pl-1 pt-1 rounded-full bg-black">
              <TwitterIcon className="text-white" />
            </div>
            <div className=" w-9 h-8 pl-1 pt-1 rounded-full bg-black">
              <PhoneIncomingIcon className="text-white " />
            </div>
          </div>
          <div className="flex gap-2 justify-center pb-3">
            ©{new Date().getFullYear()}
            <p>MKPUME GLOBAL. All Rights Reserverd</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
