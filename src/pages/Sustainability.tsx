import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import earthImage from "../assets/planet-earth-background_23-2150564685.jpg";
import roadImage from "../assets/mountain-road-to-nowhere.jpg";
import worksImage from "../assets/Screenshot_20241224-161800_1.png";
import workImage2 from "../assets/Screenshot_20241224-161741_1.png";
import Footer from "../Components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Sustainability() {
  useEffect(() =>{
        Aos.init({duration:3000})
      },[]);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section>
      <div>
        <h1 className="text-4xl absolute font-bold pt-44 pl-20 text-white xl:text-5xl extranine:text-3xl xl:pl-32">
          Sustainability
        </h1>
        <img
          src={earthImage}
          alt=""
          className="w-full h-72 mx-auto object-cover xl:h-[400px]"
        />
      </div>
      <div className="bg-gray-100">
        <h1 className="pl-4 text-3xl font-bold pt-4">Climate Change</h1>
        <p className="pl-4 pt-4 pr-10 text-lg pb-6 xl:text-2xl xl:pr-80">
          We are actively reduce our GHG emissions footprint through signicant
          investments in gas utilization facilitices and adoption of low-carbon
          strategies and technologies . A key aspect of these efforts is the
          elimination of rountine flaring during our daily operations, a
          development which forms the foundation of our gas commercialization
          initiaives. We also monitor and report our GHC emissions footprints
          quarterly in line with IPCC and GHG protocols.
        </p>
        <div
          style={{
            border: "5px gray",
            borderRadius: "8px",
            boxShadow: "0 0 7px red 0",
            marginTop: "8px",
          }}
        >
        <div>
          <p className="absolute text-white pt-32 pl-40 text-xl xl:pl-[400px] xl:pt-[200px] xl:text-5xl extranine:pl-8 extranine:text-2xl extra:text-4xl extratwo:pl-20 extrathree:pl-72 extrapoint:pl-40 extrapoint:text-5xl extrafive:text-4xl extrathree:font-bold"> Social Impact......</p>
        <img
            src={roadImage}
            alt=""
            className="w-full mx-auto h-72 object-cover xl:h-[500px]"
          />
        </div>
          <h1 className="pl-5 pt-5 text-xl font-bold bg-gray-100">
            Social Impact
          </h1>
          <p className="pl-5 pt-4 pr-12 text-lg pb-8 bg-gray-100 xl:text-xl">
            Platform Petroleum Limited is deeply committed to making a positve
            difference in the communities where we opperate
          </p>
          <p className="pl-5 xl:text-xl">
            Sustainability Initiatives: Implement programs that promote
            environmental conservation, such as reforestation projects or waste
            management strategies. Awareness Campaigns: Educate the community
            about the importance of environmental protection and sustainable
            practices.
          </p>
          <p className="pl-5 xl:text-xl">
            Impact Assessment: Regularly evaluate the effectiveness of social
            initiatives to measure impact and make necessary adjustments.
            Feedback Mechanisms: Establish channels for community feedback to
            continually improve programs and address emerging needs.
          </p>
          <p className="pl-5 xl:text-xl">
            Support for Local Culture: Promote and support local arts,
            traditions, and cultural events to preserve the community's
            heritage. Inclusive Programs: Ensure that initiatives are inclusive
            and respectful of the diverse cultures within the communities you
            operate in.
          </p>
        </div>
      </div>
      <div
        style={{
          border: "5px gray",
          borderRadius: "8px",
          boxShadow: "0 0 7px red 0",
        }}
      >
        {/* <img
          src={treeImage}
          alt=""
          className=" h-80 w-full mx-auto object-cover xl:h-[300px] brightness-50"
        /> */}
        <h1 className="text-lg font-bold pt-5 pl-5">
          Health, Safety & Environment (HSE)
        </h1>
        <p className="pl-5 pr-20 pt-4 text-lg pb-8 xl:text-xl">
          At platform petroleum Limited, the health, safety, and environmental
          well-being of our workforce and surrounding communites are paramount.
          Rigorous Safety Training: We provide ongoing training programs for all
          employees, ensuring they are well-versed in safety protocols,
          emergency procedures, and the proper use of personal protective
          equipment (PPE). Safety Culture: We foster a culture of safety where
          every employee is encouraged to prioritize safety and report unsafe
          conditions without fear of reprisal. Incident Reporting and
          Investigation: We have established a transparent reporting system for
          incidents and near-misses, followed by thorough investigations to
          prevent future occurrences.
        </p>
      </div>
      <div
        style={{
          border: "5px gray",
          borderRadius: "8px",
          boxShadow: "5px 0 7px  0",
        }}
      >
        <div className="embla relative" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide w-full h-72 mx-auto">
              <img
                src={worksImage}
                alt=""
                className="w-full h-72 mx-auto object-cover xl:h-[800px]"
              />
            </div>
            <div className="embla__slide w-full mx-auto">
              <img
                src={workImage2}
                alt=""
                className="w-full h-72 mx-auto object-cover xl:h-[800px]"
              />
            </div>
          </div>
        </div>
        <h1 className="pl-5 pt-5 text-xl font-bold xl:text-3xl">Local Content</h1>
        <p className="pl-5 pt-4 pr-16 text-lg pb-16 xl:text-xl">
          As a responsible corporate citizen, platform petroleum Limited is
          committed to promoting local businesses and communities.
        </p>
      </div>
      <div>
        <h1 className="pl-4 font-bold text-orange-500 pb-4 pt-8">
          GET INTOUCH
        </h1>
      </div>
      <div data-aos='fade-up'>
      <Footer />
      </div>
    </section>
  );
}

export default Sustainability;
