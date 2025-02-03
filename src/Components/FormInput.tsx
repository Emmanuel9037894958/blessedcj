import { useState } from "react";

function Forminput() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [liters, setLiters] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !fullName ||
      !companyName ||
      !deliveryAddress ||
      !phoneNo ||
      !fuelType ||
      !liters
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("Form submitted successfully!");
    setFullName("");
    setCompanyName("");
    setDeliveryAddress("");
    setPhoneNo("");
    setFuelType("");
    setLiters("");
  };

  return (
    <div className="w-80 h-80 absolute mt-52 ml-10 md:mt-72 xl:ml-[400px] extra:ml-[100px] extratwo:ml-[140px] extrathree:ml-[200px] extraone:ml-[158px]">
        <h1 className="text-center text-2xl text-white font-bold">
          BULK Order
        </h1>
      <form
        className="flex flex-col w-72 gap-4 pl-8 pt-8 md:grid grid-cols-2 md:gap-5 md:w-[700px]"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Full name"
          className="pl-2 h-9 rounded- md:h-11 md:rounded-lg rounded-lg"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company Name"
          className="pl-2 h-9 rounded- md:h-11 md:rounded-lg rounded-lg"
          value={companyName}
         onChange={(e) => setCompanyName(e.target.value)} 
        />

        <input
          type="text"
          placeholder="Your Delivery Address"
          className="pl-2 h-9 rounded- md:h-11 md:rounded-lg rounded-lg"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone No"
          className="pl-2 h-9 rounded- md:h-11 md:rounded-lg rounded-lg"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <select
          className="font-bold h-9 rounded- md:h-11 md:rounded-lg"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="">Select Fuel Type</option>
          <option value="PMS">Premium Motor Spirit or Gasoline (PMS)</option>
          <option value="AGO">Automotive Gas Oil or Diesel (AGO)</option>
          <option value="JET_A1">Aviation Fuel or JET A-1 (AKT)</option>
          <option value="DPK">Dual Purpose Kerosene (DPK)</option>
          <option value="LPG">Liquefied Petroleum Gas (LPG)</option>
          <option value="Lubricants">Base Oil and Sundry Lubricants</option>
        </select>

        <select
          className="h-9 rounded- md:h-11 md:rounded-lg"
          value={liters}
          onChange={(e) => setLiters(e.target.value)}
        >
          <option value="">How many liters?</option>
          <option value="500-900">500 - 900</option>
          <option value="1000-1999">1,000 - 1,999</option>
          <option value="2000-2300">2,000 - 2,300</option>
          <option value="2301-3999">2,301 - 3,999</option>
          <option value="4000-5999">4,000 - 5,999</option>
          <option value="6000-7999">6,000 - 7,999</option>
          <option value="8000-9000">8,000 - 9,000</option>
          <option value="10000-14000">10,000 - 14,000</option>
          <option value="15000-19000">15,000 - 19,000</option>
          <option value="20000-24999">20,000 - 24,999</option>
          <option value="25000-35999">25,000 - 35,999</option>
          <option value="30000-45999">30,000 - 45,999</option>
          <option value="50000+">50,000 +</option>
        </select>

        <button
          type="submit"
          className="btn bg-orange-500 w-32 text-1xl font-bold border-none animate-bounce text-white"
        >
          Order now
        </button>
      </form>
    </div>
  );
}

export default Forminput;
