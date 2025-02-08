// import React from "react";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { PhoneIncomingIcon } from "lucide-react";
import { MessageSquareShare } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section>
      <div className="bg-gray-800 pt-5 xl:grid grid-cols-4 xl:text-xl">
        <div className="text-white pl-4">
          <h1 className="text-2xl pt-6 pb-3">About</h1>

          <div className="flex flex-col gap-1">
            <Link to='/' className="hover:underline hover:text-green-800"><h2>Our Company</h2></Link>
            <Link to='/' className="hover:underline hover:text-green-800"><h2>Who We Are</h2></Link>
            <Link to='/' className="hover:underline hover:text-green-800"><h2>What We Do</h2></Link>
            <Link to='/' className="hover:underline hover:text-green-800"><h2>The Board of Directors</h2></Link>
            <Link to='/' className="hover:underline hover:text-green-800"><h2>The Monagement Team</h2></Link>
          </div>
        </div>
        <div className="text-white pl-4">
          <h1 className="text-2xl pt-6 pb-3">Our Services</h1>

          <div className="flex flex-col gap-1">
           <Link to='/' className="hover:text-green-800 hover:underline"><h2>logistices</h2></Link>
           <Link to='/' className="hover:text-green-800 hover:underline"><h2>Offshore Intake/Offtake Facilities</h2></Link>
           <Link to='/' className="hover:text-green-800 hover:underline"><h2>Petroleum Product Marketing</h2></Link>
           <Link to='/' className="hover:text-green-800 hover:underline"><h2>Storage Terminal Facilities</h2></Link>
          </div>
        </div>
        <div className="text-white pl-4">
          <h1 className="text-2xl pt-6 pb-3">Find Out More</h1>

          <div className="flex flex-col gap-1">
            <Link to='/' className="hover:text-green-800 hover:underline"><h2>Career Opportunities</h2></Link>
            <Link to='/Contact' className="hover:text-green-800 hover:underline"><h2>Order Product Online</h2></Link>
            <Link to='/' className="hover:text-green-800 hover:underline"><h2>Blessed CJ Business Card</h2></Link>
            <Link to='/' className="hover:text-green-800 hover:underline"><h2>On-Demand Bulk Order</h2></Link>
            <a href="https://www.google.com/search?q=new+and+article+about+diesel+price+in+nigeria&oq=new+and+article+about+dies&gs_lcrp=EgZjaHJvbWUqBwgEECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigAdIBCTE2MjcyajBqNKgCCLACAQ&sourceid=chrome&ie=UTF-8"><h2 className="hover:underline hover:text-green-800">News Blog & Articles</h2></a>
            <Link to='/' className="hover:text-green-800 hover:underline"> <h2>Vendor Resgistration</h2></Link>
          </div>
        </div>
        <div className="text-white pl-4">
          <h1 className="text-2xl pt-6 pb-3">Help & Support</h1>

          <div className="flex flex-col gap-1 pb-5">
            <Link to='/' className="hover:text-green-800 hover:underline"><h2>Customer Care</h2></Link>
            <Link to="/contact" className="hover:text-green-800 hover:underline">Contact Us</Link>
          </div>
        </div>
        <div className="flex gap-5 pl-3 pt-8 pb-8 xl:flex justify-items-end ">
          <div className="border w-9 h-8 pl-1 pt-1 rounded-full xl:border-none extra:border-none extrafour:border-none extranine:border-none">
          <a href="https://web.facebook.com/share/1B2ET8embo/">  <FacebookIcon
              className="text-white rounded-btn bg-blue-700"
              fill="white"  
            /></a>
          </div>
          <div className="border w-9 h-7 pl-1 pt-1 rounded-full xl:border-none extra:border-none extrafour:border-none extranine:border-none">
            <TwitterIcon className="text-blue-700 fill-indigo-900" />
          </div>
          <div className="border w-9 h-7 pl-1 pt-1 rounded-full xl:border-none extra:border-none extrafour:border-none extranine:border-none">
            <PhoneIncomingIcon className="text-green-700" fill="green" />
          </div>
          <div className="text-white border w-9 h-8 pl-1 pt-1 rounded-full xl:border-none extra:border-none extrafour:border-none extranine:border-none">
            <MessageSquareShare  className=""/>
          </div>
        </div>
      </div>
        <p className="font-light pt-5 pl-3 text-white bg-gray-900 xl:text-xl">
          Copyright ©{new Date().getFullYear()} Blessed CJ Oil & Gas Company-
          Designed and Built by <a href="">Emma-Innovation</a>
        </p>
    </section>
  );
}

export default Footer;
