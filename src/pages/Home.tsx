import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NavBar from "../Components/NavBar";
import { EmblaCarousel } from "../EmblaCarousel";
import ship from "../assets/images (22).jpeg";
import station from "../assets/myImages/istockphoto-1354049311-612x612.jpg";
import trainDieselImage from "../assets/images (21).jpeg";
import imageT from "../assets/fine.jpeg";
import myImageSever from "../assets/images (19).jpeg";
import { Link } from "react-router-dom";
import MiddielRange from "../Components/MiddielRange";
import whatappSvg from "../assets/whasaap.svg";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";


function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const businessImportations = [
    { companyGallary: ship, dec: "Petroleum Products Importation" },
    { companyGallary: station, dec: "Petroleum Products Marketing" },
  ];

  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [liters, setLiters] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !fullName ||
      !companyName ||
      !deliveryAddress ||
      !phoneNo ||
      !fuelType ||
      !liters
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("Form submitted successfully!");
    setFullName("");
    setCompanyName("");
    setDeliveryAddress("");
    setPhoneNo("");
    setFuelType("");
    setLiters("");
  };

  return (
    <section>
      <div className="relative">

        <NavBar />

        <div className="fixed top-[480px] right-1 z-50">
          <a href="https://wa.link/ekmonf" className="relative block">

            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping pointer-events-none"></span>


            <img
              src={whatappSvg}
              alt="WhatsApp"
              className="bg-green-800 rounded-full block lg:hidden w-16 shadow-lg shadow-green-500/40 relative z-10"
            />
          </a>
        </div>





        {/* Hero Carousel */}
        <EmblaCarousel />

        {/* Typewriter Section */}


        {/* Welcome Section */}
        <div className="mt-10 px-4 sm:px-8 lg:px-32">
          <h3 className="text-xl sm:text-2xl text-pink-900 font-light">
            Welcome to Blessed CJ Oil & Gas Ltd.
          </h3>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-900 mt-2 max-w-4xl">
            We are a leading Downstream Oil & Gas Company in Nigeria.
          </h1>
          <div className="text-base sm:text-lg mt-4 max-w-4xl space-y-4 text-gray-800">
            <p>
              Blessed CJ is an indigenous Oil and Gas Company active across the
              entire downstream value chain, with emphasis on petroleum trading,
              marketing, distribution, and retail segments of the Nigerian Oil
              and Gas sector.
            </p>
            <p>
              The company was founded in 2008 with its headquarters in Lagos,
              one of Africa's largest and most dynamic business hubs. Over the
              years, our strong performance and commitment to excellence have
              led to significant growth in both market share and customer base.
              We continue to expand our operations, innovate across our service
              offerings, and build long-term relationships with customers
              across the region.
            </p>
          </div>
        </div>

        {/* Business Importations Section */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 px-4 sm:px-8 lg:px-32">
          {businessImportations.map((image, i) => (
            <div
              key={i}
              className="flex flex-col items-center sm:flex-1 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={image.companyGallary}
                alt={image.dec}
                className="w-full h-auto max-h-80 object-cover"
              />
              <Link to="/petroleumproductsimportation" className="w-full">
                <button className="bg-green-600 text-white font-bold h-10 w-full hover:bg-green-700 rounded-b-lg">
                  {image.dec}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Image Carousel with Bulk Order Form */}
        <div
          className="relative w-full h-[85vh] mt-10 overflow-hidden"
          ref={emblaRef}
        >
          <div className="embla__container flex">
            {[trainDieselImage, myImageSever, imageT].map((imgSrc, idx) => (
              <div
                key={idx}
                className="embla__slide flex-shrink-0 w-full sm:w-auto"
              >
                <img
                  src={imgSrc}
                  alt={`slide-${idx}`}
                  className="w-full h-[520px] sm:h-[520px] object-cover mx-auto"
                />
              </div>
            ))}
          </div>

          {/* Bulk Order Form */}
          <div className="absolute top-[260px] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white backdrop-blur-md bg-white/50 p-6 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[700px]">
            <h1 className="text-center text-2xl font-bold text-orange-700 mb-4">
              BULK Order
            </h1>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="h-10 px-3 rounded border border-gray-300"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Company Name"
                className="h-10 px-3 rounded border border-gray-300"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Delivery Address"
                className="h-10 px-3 rounded border border-gray-300"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone No"
                className="h-10 px-3 rounded border border-gray-300"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <select
                className="h-10 px-2 rounded border border-gray-300"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
              >
                <option value="">Select Fuel Type</option>
                <option value="PMS">Premium Motor Spirit (PMS)</option>
                <option value="AGO">Diesel (AGO)</option>
                <option value="JET_A1">Aviation Fuel (JET A-1)</option>
                <option value="DPK">Kerosene (DPK)</option>
                <option value="LPG">LPG</option>
                <option value="Lubricants">Lubricants</option>
              </select>
              <select
                className="h-10 px-2 rounded border border-gray-300"
                value={liters}
                onChange={(e) => setLiters(e.target.value)}
              >
                <option value="">How many liters?</option>
                <option value="500-900">500 - 900</option>
                <option value="1000-1999">1,000 - 1,999</option>
                <option value="2000-2300">2,000 - 2,300</option>
                <option value="2301-3999">2,301 - 3,999</option>
                <option value="4000-5999">4,000 - 5,999</option>
                <option value="6000-7999">6,000 - 7,999</option>
                <option value="8000-9000">8,000 - 9,000</option>
                <option value="10000-14000">10,000 - 14,000</option>
                <option value="15000-19000">15,000 - 19,000</option>
                <option value="20000-24999">20,000 - 24,999</option>
                <option value="25000-35999">25,000 - 35,999</option>
                <option value="30000-45999">30,000 - 45,999</option>
                <option value="50000+">50,000 +</option>
              </select>
              <div className="md:col-span-2 flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-orange-600 text-white font-bold py-2 px-6 rounded hover:bg-orange-700"
                >
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-orange-500">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <Typewriter
              words={[
                "We supply quality diesel",
                "We deliver nationwide",
                "We value our customers",
              ]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <MiddielRange />
      </div>
    </section>
  );
}

export default Home;
