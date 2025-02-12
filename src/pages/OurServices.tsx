// import React from 'react'
import servicesImage from '../assets/images (10).jpeg'
import NavBar from '../Components/NavBar';
import '../Components/Footer'
import Footer from '../Components/Footer';

function OurServices() {
  return (
    <section>
      <div>
        <NavBar />
        <h1 className='absolute text-4xl pt-32 pl-8 text-white font-bold animate-pulse z-50'>Our Services...</h1>
        <img src={servicesImage} alt=""  className='object-cover w-full h-80 brightness-50'/>
      </div>
      <div>
        <p className='pl-4 pt-4 text-lg'>At BLESSEDCJ oIL & GAS, we offer a comprehensive range of services designed to meet the unique needs of the oil and gas industry. Our team of experts has years of experience in providing reliable and efficient solutions to our Customer.We provide reliable and efficient diesel supply and distribution services to various industries
        </p>
        <h1 className='font-semibold pl-4 pt-2'>Lubricant Services:</h1>
        <p className='pl-4'>We offer a range of lubricants designed to meet the unique needs of your equipment.
        </p>
        <h1 className='font-semibold pl-4 pt-2'>Equipment Maintenance and Repair:</h1>
        <p className='pl-4'>Our experienced technicians provide maintenance and repair services for oil and gas equipment.
        </p>
        <h1  className='font-semibold pl-4 pt-2'>Emergency Fuel Delivery: </h1>
        <p  className='pl-4 pb-11'>We understand that emergencies can happen at any time. That's why we offer emergency fuel delivery services to ensure that your operations continue uninterrupted.</p>
      </div>
      <Footer />
    </section>
  )
}

export default OurServices ;