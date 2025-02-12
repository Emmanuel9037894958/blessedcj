// import React from "react";
import svgImage from "../assets/star.svg";
import ceoImage from "../assets/1734866388736_2.jpg";
import { MessageSquareIcon } from "lucide-react";
import Footer from "./Footer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import WhyChooseUs from "./WhyChooseUs";
import ceoImageTwo from "../assets/1734866356233.jpg";
import dieselImage from "../assets/images (18).jpeg";
import presidentImage from "../assets/images (17).jpeg";
import presidentTinubuImage from "../assets/images (16).jpeg";
import stationImage from "../assets/IMG-20250209-WA0045.jpg";

function MiddielRange() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section>
      <div className="flex justify-center pt-1">
        <img src={svgImage} alt="star image" />
        <h1>Quality Driven</h1>
        <img src={svgImage} alt="" />
        <img src={svgImage} alt="" />
        <p className="font-medium">Customer Focused</p>
        <img src={svgImage} alt="" />
        <img src={svgImage} alt="" />
        <img src={svgImage} alt="" />
        <p>Global Source</p>
      </div>
      <div>
        <h1 className="pr-20 pl-4 pt-3 font-normal xl:text-2xl">
          Leading the downstream Oil and gas industry in Nigeria since 2008
        </h1>
        <p className="pr-20 pl-4 font-normal text-orange-600 pb-3">
          We service global clients, in more than 20 countries in Africa & i
          Nigeria.
        </p>
      </div>
      <div className="flex flex-col gap-3 pt-3-4 bg-gray-200 rounded-xl mx-auto xl:grid grid-cols-2 xl:gap-9 xl:pt-8 xl:pb-8 xl:pl-6">
        <div className="border mx-auto pl-4 flex flex-col pb-4 bg-white justify-center xl:rounded-xl">
          <h1 className="text-2xl font-bold text-slate-400 pt-8 xl:pb-3">
            Next Day Delivery
          </h1>
          <p className="xl:text-xl xl:pr-72">
            At BlessedCJ oil and Gas Company 9% of our orders are successfully
            delivered within 24 hours.
          </p>
        </div>
        <div className="border mx-auto flex flex-col pl-4 pb-4 bg-white justify-center xl:rounded-xl">
          <h1 className="text-2xl font-bold text-slate-400 xl:pb-3">
            Dedicated Account Managers
          </h1>
          <p className="xl:text-xl xl:pr-72">
            We will assign you an account manager who will be your point of
            contact from day one.
          </p>
        </div>
        <div className="border mx-auto flex flex-col pl-4 pb-4 bg-white justify-center xl:rounded-xl">
          <h1 className="text-2xl font-bold text-slate-400 xl:pb-3">
            {" "}
            Low prices
          </h1>
          <p className="xl:text-xl xl:pr-">
            Our aim is to buy the Diesel on lowest or even at Cost rate and pass
            the savings on to you.
          </p>
        </div>
        <div className="border mx-auto flex flex-col pl-4 pb-4 bg-white justify-center xl:rounded-xl">
          <h1 className="text-2xl font-bold text-slate-400 xl:pb-3">
            Some day Emergency Delivery
          </h1>
          <p className="xl:text-xl xl:pr-">
            At Blessed CJ oil and Gas Company 94% of our orders are successfully
            delivered within 24 hours.
          </p>
        </div>
      </div>
      <div
        className=""
        style={{
          border: "1px solid gray",
          marginInline: "auto",
          boxShadow: "5px 5px 5px 5px solid black",
        }}
      >
        <h1 className="text-center text-2xl font-bold">News & Articles</h1>
        <div className="embla relative " ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <img
                src={ceoImageTwo}
                alt=""
                className="h-[370px] w-80 mx-auto pt-3 box object-cover"
              />
            </div>
            <div className="embla__slide">
              <a href="https://abcnews.go.com/Business/rising-oil-prices-after-iran-strike-increase-us/story?id=114394795">
                <img
                  src={presidentTinubuImage}
                  alt=""
                  className="h-[370px] w-80 mx-auto pt-3 box object-cover"
                />
              </a>
            </div>
            <div className="embla__slide">
              <img
                src={stationImage}
                alt=""
                className="h-[370px] w-90 mx-auto pt-3 box object-cover"
              />
            </div>
            <div className="embla__slide">
              <img
                src={dieselImage}
                alt=""
                className="h-[370px] w-90 mx-auto pt-3 box object-cover"
              />
            </div>
            <div className="embla__slide">
              <img
                src={ceoImage}
                alt=""
                className="h-[370px] w-80 mx-auto pt-3 box object-cover"
              />
            </div>
            <div className="embla__slide">
              <img
                src={presidentImage}
                alt=""
                className="h-[370px] w-80 mx-auto pt-3 box object-cover"
              />
            </div>
          </div>
        </div>
        <a href="https://abcnews.go.com/Business/rising-oil-prices-after-iran-strike-increase-us/story?id=114394795">
          <div className="flex flex-row gap-3">
            <button className="btn bg-orange-500 text-white mx-auto mt-3">
              <h1>🕓 January 12, 2024</h1>
              <MessageSquareIcon />
              <p>23</p>
            </button>
          </div>
        </a>
        <h1
          style={{
            textAlign: "center",
            fontSize: "large",
            fontWeight: "400",
            paddingTop: "14px",
          }}
        >
          Oil Expert Advocates More
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "large",
            fontWeight: "400",
            paddingBottom: "12px",
          }}
        >
          Investments in Downstream sector
        </p>
      </div>
      <WhyChooseUs />
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default MiddielRange;
