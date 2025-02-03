import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import logoImage from "./assets/IMG-20250114-WA0049.jpg";
import myFirstImage from "./assets/Tank-Farm.jpg";
import mySecondImage from "./assets/images (3).jpeg";
import myThirdImage from "./assets/fine.jpeg";
import myFourthImage from "./assets/images (10).jpeg";
import myTankImage from "./assets/myImages/images (14).jpeg";
import Button from "./Components/Button";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section>
      <div className="absolute z-30 pt-[348px] pl-[246px] xl:ml-[400px] md:mt-[350px] md:ml-[100px] lg:mt-0 lg:ml-0">
        <Button />
      </div>
      <div className="embla relative " ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide w-full relative">
            <img
              src={logoImage}
              alt="Logo"
              className="w-full h-[400px] object-cover md:h-[770px] brightness-50"
            />
          </div>
          <div className="embla__slide w-full relative">
            <h1 className="absolute text-4xl font-bold pr-[110px] ml-10 mt-20 text-gray-300 md:pt-[300px] md:text-5xl space-x-2xl:text-6xl">
              <span className="  font-normal xl:text-5xl xl:font-bold">
                One of Africa's largest offshore
              </span>
              Offshore Petroleum intake & offtake
              <span className="font-medium">and storage terminals...</span>
            </h1>
            <img
              src={myFourthImage}
              alt="Petroleum Storage"
              className="w-full h-[400px] object-cover md:h-[770px]"
            />
          </div>

          <div className="embla__slide w-full relative">
            <h1 className="absolute text-3xl font-medium pr-[120px] ml-10 pt-32 text-gray-300 md:pt-[400px]">
              <span className="text-yellow-100 md:text-5xl xl:text-5xl xl:font-bold">
                Plan And Manage
              </span>
             <p className="text-white xl:text-4xl"> your Diesel and Fuel Expenses
             Effectively</p>
            </h1>
            <img
              src={myFirstImage}
              alt="Tank Farm"
              className="w-full h-[400px] object-cover md:h-[770px]"
            />
          </div>

          <div className="embla__slide w-full relative">
            <h1 className="absolute text-3xl font-bold pr-[120px] ml-10 mt-28 text-gray-300 md:pt-[340px] md:text-5xl ">
              <span className="font-light xl:text-6xl">
                We control one of the most
              </span>
              Technologically Advanced Storage Facilities
              <span className="font-light"> in Nigeria & Africa...</span>
            </h1>
            <img
              src={mySecondImage}
              alt="Advanced Storage"
              className="w-full h-[400px] object-cover md:h-[770px]"
            />
          </div>

          <div className="embla__slide w-full relative">
            <div className="absolute md:pt-[300px] md:text-4xl">
              <h1 className="text-4xl pr-48 pt-32 pl-7 text-gray-700 xl:text-6xl ">
                On-demand Fuel & Diesel delivery service
              </h1>
              <p className="pl-7 xl:text-5xl">
                PMS | AGO | AKT | Lubricants | Base oil
              </p>
            </div>
            <img
              src={myTankImage}
              alt="Fuel Delivery"
              className="w-full h-[400px] object-cover md:h-[770px]"
            />
          </div>

          <div className="embla__slide w-full relative">
            <h1 className="absolute text-4xl font-bold pr-[120px] ml-10 mt-32 text-gray-300 md:pt-[300px] space-x-2 xl:text-6xl">
              <span className="font-light md:text-5xl">
                We offer one of the largest
              </span>
              offshore Liquid Bulk Terminals (SPM&CBM)
              <span className="font-light"> in Africa</span>
            </h1>
            <img
              src={myThirdImage}
              alt="Liquid Bulk Terminals"
              className="w-full h-[400px] object-cover md:h-[770px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
