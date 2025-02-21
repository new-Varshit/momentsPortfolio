import React from 'react'
import { useState,useEffect } from 'react'


const images=[
    '/src/assets/7.jpg',
    '/src/assets/8.jpg',
    '/src/assets/10.jpg',
    '/src/assets/11.jpg',
];


function Hero() {
const [currentImageIndex,setImageIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

const currentImageUrl = images[currentImageIndex];
  return (
    <>
     <div className={`h-screen bg-cover  inset-0 bg-center flex justify-center items-center transition-all ease-in-out  duration-1000
     `}  style={{backgroundImage : `url(${currentImageUrl})`}}>
       <div className='w-1/2 text-center'>
        <h1 className='text-white font-fatface text-4xl md:text-6xl font-bold'>Cherishing Every Moment</h1>
              <p className='text-white font-playfair mt-4 text-lg md:text-2xl'>Your special events, captured with care and precision</p>
       </div>
     </div>
    </>
  )
};

export default Hero
