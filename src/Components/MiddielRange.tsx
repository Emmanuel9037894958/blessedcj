import svgImage from "../assets/star.svg";
import ceoImage from "../assets/ceoimage.jpg";
import ceoImageTwo from "../assets/second-ceoimage.jpg";
import dieselImage from "../assets/images (18).jpeg";
import presidentImage from "../assets/images (17).jpeg";
import presidentTinubuImage from "../assets/images (16).jpeg";
import stationImage from "../assets/IMG-20250209-WA0045.jpg";
import { MessageSquareIcon } from "lucide-react";
import Footer from "./Footer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import WhyChooseUs from "./WhyChooseUs";

function MiddielRange() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className=" sm:px-6 xl:px-16 py-8 space-y-12 pt-0">
      {/* Header Icons */}
      <div className="flex flex-wrap justify-center items-center gap-5 text-center text-sm sm:text-base font-medium">
        <div className="flex items-center gap-2">
          <img src={svgImage} alt="star" className="w-5 h-5" />
          <p>Quality Driven</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={svgImage} alt="star" className="w-5 h-5" />
          <img src={svgImage} alt="star" className="w-5 h-5" />
          <p>Customer Focused</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={svgImage} alt="star" className="w-5 h-5" />
          <img src={svgImage} alt="star" className="w-5 h-5" />
          <img src={svgImage} alt="star" className="w-5 h-5" />
          <p>Global Source</p>
        </div>
      </div>

      {/* Heading Section */}
      <div className="text-center space-y-2 px-2">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
          Leading the downstream Oil and Gas industry in Nigeria since 2008
        </h1>
        <p className="text-orange-600 text-sm sm:text-base">
          We service global clients in more than 20 countries across Africa & Nigeria.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-xl shadow-sm">
        {[
          {
            title: "Next Day Delivery",
            desc: "At BlessedCJ Oil and Gas Company, 90% of our orders are successfully delivered within 24 hours.",
          },
          {
            title: "Dedicated Account Managers",
            desc: "We will assign you an account manager who will be your point of contact from day one.",
          },
          {
            title: "Low Prices",
            desc: "Our aim is to buy the diesel at the lowest or even at cost price and pass the savings on to you.",
          },
          {
            title: "Same Day Emergency Delivery",
            desc: "At BlessedCJ Oil and Gas Company, 94% of emergency orders are delivered the same day.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg border shadow-md flex flex-col justify-between"
          >
            <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-3">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="border border-gray-300 shadow-md rounded-md overflow-hidden">
        <h1 className="text-center text-xl sm:text-2xl font-bold py-6 bg-white">
          News & Articles
        </h1>

        {/* News & Articles */}

        <div className="embla overflow-hidden block lg:hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4 px-4">
            {[
              ceoImageTwo,
              presidentTinubuImage,
              stationImage,
              dieselImage,
              ceoImage,
              presidentImage,
            ].map((img, i) => (
              <div
                key={i}
                className="embla__slide flex-shrink-0 w-[280px] sm:w-[320px] h-64 sm:h-[35rem] overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout - Laptop & Desktop Only */}
        <div className="hidden lg:grid grid-cols-3 gap-6 px-4 mt-12">
          {[
            ceoImageTwo,
            presidentTinubuImage,
            stationImage,
            dieselImage,
            ceoImage,
            presidentImage,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Grid Image ${i}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>


        <a
          href="https://abcnews.go.com/Business/rising-oil-prices-after-iran-strike-increase-us/story?id=114394795"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center"
        >
          <button className="bg-orange-500 text-white flex items-center gap-2 px-4 py-2 mt-4 rounded hover:bg-orange-600 transition duration-200 mx-auto">
            🕓 Jan 12, 2024 <MessageSquareIcon size={18} /> 23
          </button>
        </a>

        {/* Article Description */}
        <div className="text-center py-6 px-2 bg-white">
          <h2 className="text-base sm:text-lg font-semibold">
            Oil Expert Advocates More
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Investments in Downstream Sector
          </p>
        </div>
        <WhyChooseUs />
        <Footer />
      </div>
    </section>
  );
}

export default MiddielRange;
