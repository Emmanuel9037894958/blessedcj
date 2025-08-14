import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import aboutImage from "../assets/images (6).jpeg";
import aboutImage2 from "../assets/images (7).jpeg";
import aboutImage3 from "../assets/images (8).jpeg";
import companyLogo from "../assets/IMG-20250114-WA0049.jpg";
import mobileOilImage from "../assets/Mobil-Oil.jpg";
import enveloImage from "../assets/bx-envelope (1).svg";
import enveloImage2 from "../assets/bx-envelope (1).svg";
import phoneImage from "../assets/bx-phone (1).svg";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { PhoneIncomingIcon } from "lucide-react";
import NavBar from "../Components/NavBar";
import Aos from "aos";
import "aos/dist/aos.css";
import oilImage from '../assets/oil-fac.jpg'

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="overflow-hidden">
      <NavBar />
      <div>
        <img
          src={companyLogo}
          alt=""
          className="w-24 h-24 fixed z-20 rounded-full ml-3 xl:mt-24 md:mt-24 lg:mt-16 extranine:my-24 extra:mt-24 xl:w-32 xl:h-32"
        />
      </div>
      <div className="absolute text-white z-30 pt-52">
        <h1 className="pl-8 pb-4 text-4xl xl:text-5xl xl:font-bold">About Us</h1>
        <p className="pl-8 text-xl xl:text-5xl italic">
          Get to know who we are and what we represent
        </p>
      </div>
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img
              src={aboutImage}
              alt=""
              className="w-full h-[370px] object-cover xl:h-[500px]"
            />
          </div>
          <div className="embla__slide">
            <img
              src={aboutImage3}
              alt=""
              className="w-full h-[370px] object-cover xl:h-[500px]"
            />
          </div>
          <div className="embla__slide">
            <img
              src={aboutImage2}
              alt=""
              className="w-full h-[370px] object-cover xl:h-[500px]"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl pl-5 pt-16">Our Journey So Far "</h1>
        <p className="pl-5 pt-4 pr-4 pb-6">
          Blessed CJ OIL & Gas pipeline Network is in limited areas and the
          quickest solution to capture this growing market is CNG (Compressed
          Natural Gas). With the advent of the"Gas on wheels" methodology , gas
          distribution has been actively gathering momentum. However, supply of
          CNG is flawed after a distance range of 200 kms. One solution that can
          effectively tackle this flaw is the adoption of LNG (Liquefied Natural
          GAS) as an alternative to CNG most especially for longer distances.
          LNG has a higher calorific value, is more economical in terms of
          higher volume of gas being transported (6x more than CNG). First
          Deliverly Expected by Q4 2021.
        </p>
      </div>
      <div className="bg-gray-100">
        <p className="pl-5 pt-4 pr-4 pb-4">
          Green Fuels Limited (GFL) established an SPV called Green Liquified
          Natural Gas Limited (GLNG) in view to cater to the power needs of
          industrial customers and also in the final stages of developing a $40
          million mini-LNG (Liquefied Natural Gas) facility in the Southwestern
          part of Nigeria. It consists of multiple LNG plants of 144 TPD each
          with an equivalent capacity of 200,000 SCM of gas per day, enabling
          the company to deliver a large quantum of gas at a reasonable cost
          anywhere in Nigeria. Industrial customers in Nigeria face severe power
          issues both in terms of reliability and quantity of power. There are
          Giga Watts of captive solutions in place today but are expensive and
          require specialized skills & mangement.
        </p>
        <div>
          <p className="pl-5 pt-3 pr-4 pb-8 ">
            The LNG station has been designed with 1 x 200,000 SCMD Liquefaction
            facility, along with numerous ancillary systems providing security
            and favourable operating conditions. The entire Liquefaction
            facility contains state-of-the-art fire and gas detection systems
            which complement the emergency slam shut values installed in the gas
            supply system. The electrical panels all contain fire suppression
            mechanisms to prevent fire damage, and the compressor house itself
            has been designed to provide suitable emergency exits with fire
            containment as a core consideration. GLNG will operate with a fleet
            of ultra-modern trucks to pull various sizes of LNG Storage and
            delivery vessels with a storage capacity of 26,000 SCM which will be
            used to deliver LNG to customers.
          </p>
        </div>
        <div className="border-green-900 w-full bg-gray-200 ">
          <h1 className="text-center text-xl pt-6 pb-6 text-green-700">
            TOP ARTICLES & BLOGS
          </h1>
          <button className="btn btn-ghost text-white font-bold absolute ml-20 mt-28 w-36 border-green-900 hover:bg-white xl:ml-[548px] xl:text-2xl lg:ml-[440px] extrathree:ml-80 extraeight:ml-40 extrapointerone:ml-[290px] extra:ml-[196px] extratwo:ml-[267px] endpoint:ml-[380px] 2xl:ml-[700px]">
            EXPORE
          </button>
          <img
            src={mobileOilImage}
            alt=""
            className="w-[400px] h-62 mx-auto focus:bg-black object-cover"
          />
          <p className="pl-5 pr-12 pt-5 text-green-700 text-lg pb-14 xl:text-2xl xl:text-center">
            The Federal Government has revealed that Nigerias can convert cars
            using petrol to gas, which is cheaper, with effect...
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="relative bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${oilImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for opacity */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-center pt-10 pb-8 text-2xl text-white">
              ENQUIRE
            </h1>

            <form className="grid gap-4 justify-items-center py-4 px-2 sm:px-4">
              <input
                type="text"
                placeholder="Your Name:"
                className="w-full max-w-md h-10 pl-3 rounded"
              />
              <input
                type="text"
                placeholder="Company Name:"
                className="w-full max-w-md h-10 pl-3 rounded"
              />
              <input
                type="email"
                placeholder="Your Email ID:"
                className="w-full max-w-md h-10 pl-3 rounded"
              />
              <input
                type="tel"
                placeholder="Mobile Number:"
                className="w-full max-w-md h-10 pl-3 rounded"
              />
              <textarea
                placeholder="Brief details of your requirements"
                rows={5}
                className="w-full max-w-md pl-3 rounded"
              ></textarea>

              <div className="pb-7 pt-5">
                <button className="w-40 sm:w-48 text-white bg-green-700 rounded-full text-lg sm:text-xl font-bold">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-green-700 text-white pt-6 border-white">
          <div className="p-4 sm:p-6">
            <h1 className="text-lg sm:text-xl font-semibold">
              Blessed CJ Liquefied Natural Gas Limited
            </h1>

            <div className="flex items-center gap-3 pt-4">
              <img
                src={enveloImage}
                alt="Envelope Icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="text-sm sm:text-base">supports@bcj-ng.com</p>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <img
                src={enveloImage2}
                alt="Envelope Icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="text-sm sm:text-base">info@bcj-ng.com</p>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <img
                src={phoneImage}
                alt="Phone Icon"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="text-sm sm:text-base">+234 803 473 3871</p>
            </div>
          </div>



          <div className="flex gap-5 pl-5 pt-8 pb-8 ">
            <div className=" w-9 h-10 pl- pt-1 rounded-full">
              <FacebookIcon
                className="text-white rounded-btn  mt-1 bg-blue-600 h-9 w-9"
                fill="white"
              />
            </div>
            <div className=" w-9 h-8 pl-1 pt-3 rounded-full">
              <TwitterIcon
                className="text-white bg-white rounded-btn h-9 w-9"
                fill="blue"
              />
            </div>
            <div className=" w-9 h-8 pl-1 pt-1 rounded-full mt-3 bg-green-700">
              <PhoneIncomingIcon className="h-8 w-9" fill="white" />
            </div>
          </div>
          <div className="flex gap-2 justify-center pb-3">
            ©{new Date().getFullYear()}
            <p>MKPUME GLOBAL. All Rights Reserverd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
