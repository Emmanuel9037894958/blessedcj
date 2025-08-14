import { useState } from "react";
import NavBar from "../Components/NavBar";

// Assets
import telephoneImage from "../assets/IMG-20250129-WA0069.jpg";
import companyLogo from "../assets/IMG-20250114-WA0049.jpg";
import mailSvg from "../assets/mail.svg";
import phoneImage from "../assets/IMG-20250129-WA0069.jpg";
import whatsaapImage from "../assets/bxl-whatsapp.svg";
import oilImage from "../assets/oil-fac.jpg";

// Icons
import { FacebookIcon, TwitterIcon, PhoneIncomingIcon } from "lucide-react";

function Contact() {
  const [yourName, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNum, setMobileNum] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
      {/* Logo */}
      <div className="fixed z-20 top-24 left-2 xl:top-28">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-24 h-24 rounded-full xl:w-32 xl:h-32"
        />
      </div>

      {/* Navbar */}
      <NavBar />

      {/* Header image */}
      <div className="relative">
        <h1 className="absolute pt-52 font-bold pl-8 text-white text-4xl xl:text-5xl xl:pl-52 xl:pt-60">
          Contact Us
        </h1>
        <img
          src={telephoneImage}
          alt="Telephone"
          className="w-full h-80 object-cover xl:h-[600px] extrasix:h-[400px] extrathree:h-[400px] extraone:h-[400px] extra:h-[400px] extraeight:h-[400px]"
        />
      </div>

      {/* Office addresses */}
      <div>
        <h1 className="pl-5 pt-8 text-3xl text-green-600">Get in Touch...</h1>
        <h1 className="pl-5 pt-10 pb-3 font-bold">BCJOG HEAD OFFICE</h1>
        <p className="pl-5 pr-28">
          1A, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem,
          ipsum dolor.
        </p>

        <h1 className="pl-5 pt-10 pb-3 font-bold">BCJOG CORPORATE OFFICE</h1>
        <p className="pl-5 pr-28">
          1A, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem,
          ipsum dolor.
        </p>
      </div>

      {/* Form */}
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
          className="w-[400px] h-10 pl-3 rounded border-b-2 extranine:w-52"
          value={yourName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-[400px] h-10 pl-3 rounded border-b-2 extranine:w-52"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email ID"
          className="w-[400px] h-10 pl-3 rounded border-b-2 extranine:w-52"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          className="w-[400px] h-10 pl-3 rounded border-b-2 extranine:w-52"
          value={mobileNum}
          onChange={(e) => setMobileNum(e.target.value)}
        />
        <textarea
          placeholder="Brief details of your requirements"
          rows={5}
          className="w-[400px]"
        ></textarea>

        <div className="mx-auto pb-24 xl:ml-[40px] extra:pl-14 extrafive:pl-8 extraeight:ml-6">
          <button className="btn bg-green-600 text-white text-lg w-32 extraeight:ml-7 extranine:ml-0">
            SUBMIT
          </button>
        </div>
      </form>

      {/* Contact section with background + overlay */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${oilImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative xl:flex xl:gap-72 xl:justify-center text-white">
          {/* WhatsApp */}
          <div className="grid justify-items-center pt-8 text-lg font-bold">
            <img
              src={whatsaapImage}
              alt="WhatsApp"
              className="w-12 bg-white rounded-full"
            />
            <h1 className="pt-4 ">+000 5111 111 2232</h1>
            <h1>+000 1166 777 767</h1>
          </div>

          {/* Phone */}
          <div className="grid justify-items-center pt-8 text-lg font-bold">
            <img
              src={phoneImage}
              alt="Phone"
              className="w-12 bg-white rounded-full"
            />
            <h1 className="pt-4 ">+000 1111 165 2232</h1>
            <h1>+000 8166 794 067</h1>
          </div>

          {/* Email */}
          <div className="grid justify-items-center pt-8 pb-4 text-lg font-bold">
            <img src={mailSvg} alt="Mail" className="w-12 bg-white rounded-full" />
            <p className="pt-4">SUPPORT@BCJOG-NG.COM</p>
            <p>INFO@BCJOG-NG.COM</p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative bg-green-600 text-white pt-6 mt-8 border-t border-white">
          <div className="px-5 max-w-7xl mx-auto space-y-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Blessed CJ Liquefied Natural Gas Limited
            </h1>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={whatsaapImage} alt="whatsapp" className="w-5 h-5" />
                <p className="text-sm sm:text-base">supports@bcj-ng.com</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={mailSvg} alt="mail" className="w-5 h-5" />
                <p className="text-sm sm:text-base ">info@bcj-ng.com</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={phoneImage}
                  alt="phone"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-sm sm:text-base">+234 803 473 3871</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black">
                <FacebookIcon className="text-white w-5 h-5" />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black">
                <TwitterIcon className="text-white w-5 h-5" />
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black">
                <PhoneIncomingIcon className="text-white w-5 h-5" />
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center justify-center pb-4 text-sm text-center">
              <span>© {new Date().getFullYear()}</span>
              <p className="font-bold">MKPUME GLOBAL. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
