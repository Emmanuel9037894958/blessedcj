import React from 'react'
import importationImage from '../assets/images (22).jpeg'
import secondImage from '../assets/myImages/images (16).jpeg'
import Footer from './Footer';

function PetroleumImport() {
  return (
    <div>
       <div>
        <h1 className='absolute pl-8 pt-40 text-2xl text-white font-bold xl:text-5xl xl:pl-32'>Petroleum Importation</h1>
        <img src={importationImage} alt=""  className='mx-auto object-cover h-72 w-full'/>
       </div>
       <div className='pl-5 '>
        <h1 className='text-lg font-bold pt-4'>Petroleum Importation :</h1>
        <p className ='xl:text-xl'>Energy Security: For many countries, importing petroleum is crucial for energy security, ensuring a consistent and reliable supply of fuel for transportation, heating, electricity generation, and industrial processes</p>
        <h1 className='text-lg font-bold pt-4'>Economic Stability :</h1>
        <p className ='xl:text-xl'>Economic Stability: The petroleum industry plays a vital role in the economy. Imported petroleum can stabilize prices and meet demand when domestic production is low</p>
        <h1 className='text-lg font-bold pt-4'>Trade Relationships:</h1>
        <p className ='xl:text-xl'>Trade Relationships: Engaging in petroleum importation fosters international trade relationships and can help countries negotiate favorable terms in various economic agreements.</p>
        <h1 className='text-lg font-bold pt-4'>Countries:</h1>
        <p className ='xl:text-xl'>Countries: Major oil-importing countries often include the United States, China, Japan, and several European nations.</p>
        <h1 className='text-lg font-bold pt-4'>Companies:</h1>
        <p className ='xl:text-xl'>Companies: Multinational corporations (e.g., BP, ExxonMobil, Shell) play a significant role in the logistics and trade of petroleum.</p>
        <h1 className='text-lg font-bold pt-4'>Price Volatility:</h1>
        <p className ='xl:text-xl'>Price Volatility: Oil prices can be highly volatile due to geopolitical tensions, natural disasters, and changes in supply and demand.</p>
       </div>
       <div>
        <img src={secondImage} alt=""  className='mx-auto object-cover brightness-50 w-full pt-14'/>
       </div>
       <Footer />
    </div>
  )
}

export default PetroleumImport ;