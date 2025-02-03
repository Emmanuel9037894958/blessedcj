import React, { useEffect } from "react";
import oilSvg from "../assets/myImages/images (8).jpeg";
import workerImage from "../assets/myImages/images (9).jpeg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import secondWorkersImage from "../assets/myImages/images (11).jpeg";
import myImage2 from "../assets/myImages/istockphoto-470342624-612x612.jpg";
import "../index.css";
import face from "../assets/new-Consul-General-Amb.-Lot-Egopija-e1621753192302.jpg";
import faceTwo from "../assets/woman.jpeg";
import faceThree from "../assets/myImages/profile_photo-190x190@-88383475.jpg";
import svgStar from "../assets/star.svg";
import halfSvg from '../assets/halfstar.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';

function WhyChooseUs() {
  useEffect(() =>{
    Aos.init({duration:2000})
  },[]);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <section data-aos="fade-up">
      <div>
        <h1 className="text-2xl pl-5 pr-20 pb-6 pt-12 font-bold">
          Why Choose Us For Your Diesel Supply Needs ?
        </h1>
      </div>
      <div className="">
        <div className="absolute z-20 text-white xl:pl-40">
          <p className="pt-4 pl-12 text-xl font-bold xl:pt-12">
            Best Diesel Supplier in Lagos & Abuja
          </p>
          <p className="text-center text-2xl pt-5 xl:text-3xl xl:pr-72 xl:text-center xl:pt-20">
            Our extensive network and commitment to quality make us the best
            diesel supplier in Lagos, Abuja and other strategic locations in
            Nigeria. We ensure timely and reliable diesel delivery, keeping your
            operations runing smoothly and efficiently.
          </p>
        </div>

        <img
          src={oilSvg}
          alt=""
          className="mx-auto w-full h-80 brightness-50 object-cover xl:h-[400px]"
        />
      </div>
      <div className="border-b-8 box">
        <h1 className="pl-5 text-2xl pr-28 pt-7 pb-5">
          Reliable Diesel Supply For Every Need
        </h1>
        <p className="pl-5 pr-20 text-xl pb-9">
          Our comprehensive diesel supply service meets the needs of various
          sectors. Whether for residental, commercial, or industrial use, We
          provide' consistant and dependable diesel supply across Lagos and all
          over Nigeria.
        </p>
      </div>
        <h1 className="pl-5 pt-11 text-3xl font-bold text-orange-500 pb-8 xl:text-center">
          customer review
        </h1>
      <div className=" xl:flex xl:gap-5 pb-14 extrathree:flex extrathree:gap-4 extrathree:pl-4 extranine:border-none" data-aos='fade-up'>
        <div className="pt-2 box bg-gray-200">
          <div className="flex gap-4 xl:ml-32">
            <img src={faceThree} alt="" className="w-20 rounded-full ml-5 mt-5" />
            <p className="pt-14 text-xl">David K.</p>
          </div>
          <p className="pl-5 pt-7 xl:text-lg">
            "I've tried several oil and gas suppliers in the past, but Blessed
            CJ Oil and Gas stands out from the rest. Their products are always
            of high quality, and their prices are very competitive. I've never
            had any issues with my orders, and the customer support team is
            always available to help. Keep up the great work!" -
          </p>
            <div className="flex pl-4">
           (<img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={halfSvg} alt=""  className="w-5"/>)
            </div>
        </div>
        <div className=" box bg-gray-200">
          <div className="flex gap-4 xl:ml-40 pt-4">
            <img src={faceTwo} alt="" className="w-20 rounded-full ml-5 mt-8 h-20" />
            <p className="pt-16 text-xl">Inioma T.</p>
          </div>
          <p className="pl-5 pt-2 xl:text-lg">
            "As a business owner, I need reliable suppliers who can deliver on
            time. Blessed CJ Oil and Gas has consistently met my expectations.
            Their delivery team is efficient, and I've never had any issues with
            delayed or missed deliveries. Highly recommend for any business
            looking for a trustworthy oil and gas supplier!" -
          </p>
            <div className="flex pl-4">
           ( <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={halfSvg} alt=""  className="w-5"/>)
            </div>
        </div>
        <div className=" box bg-gray-200">
          <div className="flex gap-4 xl:ml-[180px]">
            <img
              src={face}
              alt=""
              className="w-20 rounded-full ml-5 mt-8 h-20"
            />
            <p className="pt-16 text-xl">James D.</p>
          </div>
          <p className="pl-5 pt-2 xl:text-lg">
            "I was blown away by the competitive pricing offered by Blessed CJ
            Oil and Gas. I've saved a significant amount of money by switching
            to them, and the quality of their products is still top-notch. The
            customer support team is also very helpful and responsive. I'd
            definitely recommend them to anyone looking for a reliable and
            affordable oil and gas supplier!" -
          </p>
            <div className="flex pb-11 pl-4">
           ( <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>
            <img src={svgStar} alt=""  className="w-5"/>)
            </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-7 pt-6 xl:flex xl:pt-8 xl:bg-opacity-0 specificImages extrathree:flex extrathree:pl-4">
        <img
          src={secondWorkersImage}
          alt=""
          className="w-[400px] mx-auto h-72 rounded-lg"
        />

        <img
          src={workerImage}
          alt=""
          className="w-[400px] mx-auto h-72 rounded-lg"
        />

        <img
          src={myImage2}
          alt=""
          className="w-[400px] mx-auto h-72 rounded-lg"
        />
      </div>
      <p className="pl-5 pt-6 text-2xl font-bold text-blue-900">
        Timely Delivery with Our Door-to-Door Service
      </p>
      <p className="pl-5 pr-16 text-lg pt-5 text-blue-900 xl:pb-2">
        Our door-to-door diesel delivery service guarantees timely arrival.We
        prioritize prompt service to keep your operations runing smoothly
        without interruptions, Thank you !
      </p>
    </section>
  );
}

export default WhyChooseUs;
