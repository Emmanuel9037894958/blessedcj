import { FacebookIcon, TwitterIcon, PhoneIncomingIcon, MessageSquareShare } from "lucide-react";
import { Link } from "react-router-dom";
import oilimage from "../assets/oil-fac.jpg";

function Footer() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${oilimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative xl:grid grid-cols-4 xl:text-xl text-white pt-5 italic">
        {/* About Section */}
        <div className="pl-4">
          <h1 className="text-2xl pt-6 pb-3 font-bold">About</h1>
          <div className="flex flex-col gap-7 pt-10">
            <Link to="/" className=" hover:text-orange-500">Our Company</Link>
            <Link to="/" className=" hover:text-orange-500">Who We Are</Link>
            <Link to="/" className=" hover:text-orange-500">What We Do</Link>
            <Link to="/" className=" hover:text-orange-500">The Board of Directors</Link>
            <Link to="/" className=" hover:text-orange-500">The Management Team</Link>
          </div>
        </div>

        {/* Services */}
        <div className="pl-4">
          <h1 className="text-2xl pt-6 pb-3 font-bold">Our Services</h1>
          <div className="flex flex-col gap-7 pt-10">
            <Link to="/" className=" hover:text-orange-500">Logistics</Link>
            <Link to="/" className=" hover:text-orange-500">Offshore Intake/Offtake Facilities</Link>
            <Link to="/" className=" hover:text-orange-500">Petroleum Product Marketing</Link>
            <Link to="/" className=" hover:text-orange-500">Storage Terminal Facilities</Link>
          </div>
        </div>

        {/* More */}
        <div className="pl-4">
          <h1 className="text-2xl pt-6 pb-3 font-bold">Find Out More</h1>
          <div className="flex flex-col gap-7 pt-10">
            <Link to="/" className=" hover:text-orange-500">Career Opportunities</Link>
            <Link to="/Contact" className=" hover:text-orange-500">Order Product Online</Link>
            <Link to="/" className=" hover:text-orange-500">Blessed CJ Business Card</Link>
            <Link to="/" className=" hover:text-orange-500">On-Demand Bulk Order</Link>
            <a
              href="https://www.google.com/search?q=new+and+article+about+diesel+price+in+nigeria"
              className=" hover:text-orange-500"
            >
              News Blog & Articles
            </a>
            <Link to="/" className=" hover:text-orange-500">Vendor Registration</Link>
          </div>
        </div>

        {/* Support */}
        <div className="pl-4">
          <h1 className="text-2xl pt-6 pb-3 font-bold">Help & Support</h1>
          <div className="flex flex-col gap-7 pt-10 pb-5">
            <Link to="/" className=" hover:text-orange-500">Customer Care</Link>
            <Link to="/contact" className=" hover:text-orange-500">Contact Us</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="col-span-4 flex gap-5 pl-3 pt-8 pb-8">
          <a href="https://web.facebook.com/share/1B2ET8embo/">
            <FacebookIcon className="bg-blue-700 text-white rounded-full p-1 w-8 h-8" />
          </a>
          <TwitterIcon className="text-blue-500 bg-white rounded-full p-1 w-8 h-8" />
          <PhoneIncomingIcon className="text-green-500 bg-white rounded-full p-1 w-8 h-8" />
          <MessageSquareShare className="text-white bg-orange-500 rounded-full p-1 w-8 h-8" />
        </div>
      </div>

      <p className="relative font-light pt-5 pl-3 text-white bg-gray-900 xl:text-xl italic">
        Copyright ©{new Date().getFullYear()} Blessed CJ Oil & Gas Company -
        Designed and Built by <a href="" className="text-orange-500">Emma-Innovation</a>
      </p>
    </section>
  );
}

export default Footer;
