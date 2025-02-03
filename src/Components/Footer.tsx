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
            <h2>Our Company</h2>
            <h2>Who We Are</h2>
            <h2>What We Do</h2>
            <h2>The Board of Directors</h2>
            <h2>The Monagement Team</h2>
          </div>
        </div>
        <div className="text-white pl-4">
          <h1 className="text-2xl pt-6 pb-3">Our Services</h1>

          <div className="flex flex-col gap-1">
            <h2>logistices</h2>
            <h2>Offshore Intake/Offtake Facilities</h2>
            <h2>Petroleum Product Marketing</h2>
            <h2>Storage Terminal Facilities</h2>
          </div>
        </div>
        <div className="text-white pl-4">
          <h1 className="text-2xl pt-6 pb-3">Find Out More</h1>

          <div className="flex flex-col gap-1">
            <h2>Career Opportunities</h2>
            <h2>Order Product Online</h2>
            <h2>Blessed CJ Business Card</h2>
            <h2>On-Demand Bulk Order</h2>
            <h2>News Blog & Articles</h2>
            <h2>Vendor Resgistration</h2>
          </div>
        </div>
        <div className="text-white pl-4">
          <h1 className="text-2xl pt-6 pb-3">Help & Support</h1>

          <div className="flex flex-col gap-1 pb-5">
            <h2>Customer Care</h2>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="flex gap-5 pl-3 pt-8 pb-8 xl:flex justify-items-end ">
          <div className="border w-9 h-8 pl-1 pt-1 rounded-full xl:border-none extra:border-none extrafour:border-none extranine:border-none">
            <FacebookIcon
              className="text-white rounded-btn bg-blue-700"
              fill="white"
            />
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
