// import React from 'react'

import { useState } from "react";

function Button() {
  const [showError, setShowError] = useState(false);
  const handleClick = () => {
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="btn w-30 bg-green-600 border-none text-white text-lg animate-bounce hover:text-yellow-400 xl:w-[200px] xl:text-2xl extra:ml-32 extra:w-32 extratwo:ml-[180px] extrathree:ml-[280px] lg:mt-[340px] lg:ml-[600px] extranine:text-sm extraeight:ml-[50px] extrapointer:ml-[110px] extrafive:ml-[100px]"
      >
        Get Started
      </button>

      {showError && (
        <div className="w-full flex justify-center px-4">
          <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded w-full max-w-md text-center text-sm sm:text-base">
            ⚠️ An error occurred. Please try again later.
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;
