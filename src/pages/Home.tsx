// import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import NavBar from "../Components/NavBar";
import { EmblaCarousel } from "../EmblaCarousel";
import ship from "../assets/images (22).jpeg";
import station from "../assets/myImages/istockphoto-1354049311-612x612.jpg";
import tankerImage from "../assets/images (20)_1.jpeg";
import '../index.css'
import myImage10 from "../assets/images (10).jpeg";
import svgImage from "../assets/drop-icon.svg";
import trainDieselImage from "../assets/images (21).jpeg";
import imageT from "../assets/fine.jpeg";
import myImageSever from "../assets/images (19).jpeg";
import { Link } from "react-router-dom";
import Forminput from "../Components/FormInput";
import MiddielRange from "../Components/MiddielRange";
import whatappSvg from '../assets/whasaap.svg'


function Home() {
  // const [color, setColor] = useState("green");

  // function handleColorchange() {
  //   if (color === "green") {
  //     setColor("gray");
  //   } else {
  //     setColor("green");
  //   }
  // }

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const businessImportations = [
    { companyGallary: ship, dec: 'petroleum products importation' },
    { companyGallary: station, dec: 'petroleum products marketing' },
  ];
  return (
    <section>
      <div className="relative ">
        <NavBar />
        <div className="fixed text-orange-600 z-50 pt-2 pl-3"></div>
        <EmblaCarousel />
          <div className="">
        <div className="fixed top-[250px] bottom-52 z-50">
        <a href="https://wa.link/ekmonf">
        <img src={whatappSvg} alt=""  className="bg-green-800 ml-[400px] mt-[180px] z-50 rounded-full extranine:ml-[270px] extranine:mt-[300px] extraeight:ml-[340px] extraeight:mt-[320px] extrafive:ml-[320px]  extrafive:mt-[370px] box extrapointer:ml-[420px] extra:ml-[470px] extraone:hidden extratwo:ml-[560px] extrapointerone:hidden lg:hidden md:hidden xl:hidden whatapp extrafour:ml-[310px]"/>
        </a>
          </div>
            
          <h3 className="text-center pt-3 text-xl font-normal text-pink-900">
            Welcome to Blessed CJ Oil & Gas Ltd.
          </h3>
          <h1
            style={{
              padding: "3px 40px 0 40px",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            We are a leading Downstream Oil & Gas Company in Nigeria
          </h1>
          <p style={{ padding: "12px 40px 0 40px", fontSize: "large" }}>
            Blessed Cj is an indigenous Oil and Gas Company active across the
            entire downstream value chain, with emphasis an the petrolum trading
            , marketing, distribution and retail segments of the Nigeria Oil and
            Gas sector.
          </p>
          <p style={{ padding: "12px 40px 0 40px", fontSize: "large" }}>
            The company was founded in 2008 with Head Quarters in Lagos, one of
            the Africa's largest businees hubs. Our performance within the
            sector has reslted in significant growth in market share and
            customers.
          </p>
        </div>
        <div>
          {businessImportations.map((image, i) => (
            <div key={i}>
              <img
                src={image.companyGallary}
                alt=""
                className="w-full h-96 mx-auto pt-1 object-cover brightness-50"
              />
            
               <Link to='/petroleumproductsimportation'>
               <button className="btn bg-green-600 font-bold text-white w-full xl:text-2xl hover:text-red-700">petroleum products importation
               </button></Link>
            </div>
          ))}
        </div>
        <div>
          <h1 className="pl-9 pt-2 text-1xl text-orange-500 font-medium xl:text-4xl">
            Our services
          </h1>
          <h3 className="pl-9  font-bold xl:text-2xl">What We Do</h3>
          <p style={{ padding: "2px 40px 0 40px", fontSize: "large",paddingBottom:'60px' }}>
            We offer one of the largest offshore liquid bolk terminals (SPM/CBM)
            in Africa to provide efficient discharge of products for opertors,
            complemented by world class storge facilities and retail
            outlets/chanels in all six geopolitical zones in Nigeria. We
            continuall develop strategic infrastruce to facilitate the
            operational efficiency of our integrated bouquet of services.  <p>  At our core, we believe in fostering strong partnerships with our stakeholders, ensuring collaborative efforts that drive innovation and excellence. Our dedicated team of professionals is committed to delivering exceptional service, leveraging our expertise to meet the dynamic demands of the market while contributing positively to the communities we serve. We are continuously exploring new technologies and practices to improve our services further and adapt to the evolving landscape of the industry.</p>   <p> Safety is our top priority. We adhere to the highest international standards in safety and environmental management, actively implementing measures to minimize our ecological footprint.</p> Our commitment to responsible operations ensures that we protect our employees, customers, and the environment in which we operate.  
  

          </p>
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              boxShadow: "50px solid gray",
              marginBottom: "38px",
            }}
          >
            <img src={myImage10} alt="" className="w-full mx-auto h-80 object-cover xl:h-[900px]" />
            <a href="">
              
              <button className="btn w-full btn-active font-bold border-r-0 xl:text-xl hover:text-green-600">
                Storage facilities
              </button>
            </a>
          </div>

          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              boxShadow: "50px solid gray",
            }}
          >
            <img src={tankerImage} alt="" className="w-full mx-auto object-cover xl:h-[800px]" />
            <button className="btn w-full btn-active font-bold xl:text-xl hover:text-green-600">
              Logistics & Haulage services
            </button>
          </div>
          <div
            style={{
              border: "2px dashed orange",
              marginTop: "30px",
              borderLeft: "0",
              borderBottom: "0",
              borderRight: "0",
            }}
          >
            <div>
              <h2 className="text-lg pl-5 text-orange-600 pt-2 xl:text-2xl xl:pb-3">
                We are Major Marketers of :
              </h2>
              <h1 className="text-2xl font-bold pl-5 pr-40">
                High-Quality fuels & Lubricants
              </h1>
            </div>
            <Link to="/">
              <div className="flex gap-3">
                <img src={svgImage} alt="" className="w-4 h-5 ml-5 mt-4" />
                <h1 className="pt-2 text-orange-600 pr-10 xl:text-2xl xl:pt-5">
                  Premium text-oran5e-200 Motor Spirit or Gasoline(PMS)
                </h1>
              </div>
            </Link>
            <div className="flex gap-3">
              <img src={svgImage} alt="" className="w-4 h-5 ml-5 mt-4" />
              <h1 className="pt text-orange-600 pt-2 xl:text-2xl xl:pt-5">
                Automotive Gas Oil or Diesel (AGO)
              </h1>
            </div>
            <div className="flex gap-3">
              <img src={svgImage} alt="" className="w-4 h-5 ml-5 mt-4" />
              <h1 className=" text-orange-600 pt-2 xl:text-2xl xl:pt-5">
                Aviation Fuel or JET A-1 (AKT)
              </h1>
            </div>
            <div className="flex gap-3">
              <img src={svgImage} alt="" className="w-4 h-5 ml-5 mt-4" />
              <h1 className="p text-orange-600 pt-2 xl:text-2xl xl:pt-5">
                Dual Purpose Kerosene (DPK)
              </h1>
            </div>
            <div className="flex gap-3">
              <img src={svgImage} alt="" className="w-4 h-5 ml-5 mt-4" />
              <h1 className="pt-3 text-orange-600 xl:text-2xl xl:pt-5">
                {" "}
                text-or5nge-200 Liquefied Petroleum Gas (LPG)
              </h1>
            </div>
            <div className="flex gap-3">
              <img src={svgImage} alt="" className="w-4 h-5 ml-5 mt-4" />
              <h1 className="pt-3 text-orange-600 pb-5 xl:text-2xl xl:pt-5">
                Base Oil and Sundry Lubricants
              </h1>
            </div>
          </div>
          <Link to="/Welcome">
            <div className="flex flex-col w-72 h-20 mx-auto gap-3 border-8">
              <button className="btn bg-orange-500 font-bold text-white xl:text-lg">
                why are my here ?
              </button>
              <button className="btn bg-orange-500 font-bold text-white xl:text-lg">
                How can i get intouch ?
              </button>
              <button className="btn bg-orange-500 font-bold text-white xl:text-lg"> Am lost !
              </button>
            </div>
          </Link>
          <div
            className="embla absolute w-full pt-32 overflow-hidden"
            ref={emblaRef}
          >
            <div className="embla__container">
              <div className="embla__slide">
                <img
                  src={trainDieselImage}
                  alt=""
                  className="w-full mx-auto h-[520px] object-cover"
                />
              </div>
              <div className="embla__slide">
                <img
                  src={myImageSever}
                  alt=""
                  className="w-full mx-auto h-[520px] object-cover"
                />
              </div>
              <div className="embla__slide">
                <img src={imageT} alt="" className="w-full mx-auto h-[520px]" />
              </div>
            </div>
            <div className="">
              <MiddielRange />
            </div>
          </div>
          <Forminput />
        </div>
      </div>
    </section>
  );
}

export default Home;
