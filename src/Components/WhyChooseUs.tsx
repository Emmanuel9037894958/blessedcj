import { useEffect } from "react";
import oilSvg from "../assets/myImages/images (8).jpeg";
import workerImage from "../assets/myImages/images (9).jpeg";
import secondWorkersImage from "../assets/myImages/images (11).jpeg";
// import myImage2 from "../assets/IMG-20250209-WA0060.jpg";
import video1 from '../assets/oil-gas-video.mp4'
import face from "../assets/new-Consul-General-Amb.-Lot-Egopija-e1621753192302.jpg";
import faceTwo from "../assets/woman.jpeg";
import faceThree from "../assets/myImages/profile_photo-190x190@-88383475.jpg";
import svgStar from "../assets/star.svg";
import halfSvg from "../assets/halfstar.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function WhyChooseUs() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-up" className="px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl font-bold pt-2 pb-6">
        Why Choose Us For Your Diesel Supply Needs?
      </h1>

      {/* Hero Image with Overlay Text */}
      <div className="relative">
        <img
          src={oilSvg}
          alt="Diesel supply"
          className="w-full h-[300px] sm:h-[400px] object-cover brightness-50 rounded-md"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <p className="text-lg sm:text-xl font-bold">
            Best Diesel Supplier in Lagos & Abuja
          </p>
          <p className="text-center text-base sm:text-lg max-w-4xl mt-4">
            Our extensive network and commitment to quality make us the best diesel supplier in Lagos, Abuja, and other strategic locations in Nigeria. We ensure timely and reliable diesel delivery, keeping your operations running smoothly and efficiently.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="border-b-8 mt-10 pb-6">
        <h2 className="text-lg sm:text-xl font-bold mb-2">
          Reliable Diesel Supply For Every Need
        </h2>
        <p className="text-base sm:text-lg">
          Our comprehensive diesel supply service meets the needs of various sectors. Whether for residential, commercial, or industrial use, we provide consistent and dependable diesel supply across Lagos and all over Nigeria.
        </p>
      </div>

      {/* Customer Reviews */}
      <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 pt-10 pb-8 text-center">
        Customer Reviews
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3" data-aos="fade-up">

        <div className="bg-gray-100 p-4 rounded shadow">
          <div className="flex items-center gap-4 mb-4">
            <img src={faceThree} alt="David" className="w-16 h-16 rounded-full" />
            <p className="text-lg font-medium">David K.</p>
          </div>
          <p className="text-sm sm:text-base mb-3">
            "I've tried several oil and gas suppliers in the past, but Blessed CJ Oil and Gas stands out from the rest. Their products are always of high quality, and their prices are very competitive. I've never had any issues with my orders, and the customer support team is always available to help. Keep up the great work!"
          </p>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => <img key={i} src={svgStar} className="w-5" />)}
            <img src={halfSvg} className="w-5" />
          </div>
        </div>

        {/* Review Card 2 */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <div className="flex items-center gap-4 mb-4">
            <img src={faceTwo} alt="Inioma" className="w-16 h-16 rounded-full" />
            <p className="text-lg font-medium">Inioma T.</p>
          </div>
          <p className="text-sm sm:text-base mb-3">
            "As a business owner, I need reliable suppliers who can deliver on time. Blessed CJ Oil and Gas has consistently met my expectations. Their delivery team is efficient, and I've never had any issues with delayed or missed deliveries. Highly recommend!"
          </p>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => <img key={i} src={svgStar} className="w-5" />)}
            <img src={halfSvg} className="w-5" />
          </div>
        </div>


        <div className="bg-gray-100 p-4 rounded shadow">
          <div className="flex items-center gap-4 mb-4">
            <img src={face} alt="James" className="w-16 h-16 rounded-full" />
            <p className="text-lg font-medium">James D.</p>
          </div>
          <p className="text-sm sm:text-base mb-3">
            "I was blown away by the competitive pricing offered by Blessed CJ Oil and Gas. I've saved a significant amount of money by switching to them. The customer support team is also very helpful and responsive. I'd definitely recommend them!"
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => <img key={i} src={svgStar} className="w-5" />)}
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
        <img
          src={secondWorkersImage}
          alt=""
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src={workerImage}
          alt=""
          className="w-full h-64 object-cover rounded-lg"
        />
        <video
          loop
          muted
          autoPlay
          className="w-full h-64 object-cover rounded-lg"
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>


      {/* Final Text Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-blue-900">
          Timely Delivery with Our Door-to-Door Service
        </h2>
        <p className="text-base text-blue-900 mt-4 xl:text-xl">
          Our door-to-door diesel delivery service guarantees timely arrival. We prioritize prompt service to keep your operations running smoothly without interruptions. Thank you!
        </p>
      </div>
    </section>
  );
}

export default WhyChooseUs;
