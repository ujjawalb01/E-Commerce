
import React from 'react';
import heroImage from '../../assets/heroimg.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='relative'>
      <img 
        src={heroImage} 
        alt="Hero" 
        className='w-full h-auto object-cover' 
      />
      <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
        <div className="text-center text-[#020214] p-6 ">
          <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase'>
            Vacation <br />
          </h1>
          <p className='text-sm text-white tracking-tighter md:text-lg mb-6'>
            Explore our Outfits for Vacation
          </p>
          <Link 
            to="#" 
            className='bg-[#82788b] text-gray-950 px-6 py-2 rounded-sm text-lg'
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
