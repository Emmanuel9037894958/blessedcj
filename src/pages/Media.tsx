// import React from "react";
import { Loader2 } from "lucide-react"; // Optional spinner icon
import { Link } from "react-router-dom";

export default function Media() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      {/* Spinner */}
      <Loader2 className="w-12 h-12 text-green-600 animate-spin mb-4" />

      {/* Message */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        This Page is Under Construction
      </h1>
      <p className="text-gray-600 max-w-md">
        We are currently working hard to bring you exciting media content. Please
        check back soon!
      </p>

      {/* Optional extra style */}
      <div className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg font-bold">
       <Link  to='/'> Coming Soon...</Link>
      </div>
    </div>
  );
}
