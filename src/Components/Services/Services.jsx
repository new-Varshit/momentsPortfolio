import React from 'react'

function Services() {
  return (
    <div className='mt-24 mx-14 bg- '>
      <div className='flex flex-col space-y-10 py-14  items-center bg-red-900 relative'>

        <div className='text-center font-medium font-sans bg-black  px-2 py-1 flex text-4xl absolute -top-7'>
          <h1 className='text-white'>Our Services</h1>
        </div>

        <div className='flex  justify-center space-x-4 items-center overflow-hidden rounded-xl w-4/5 '>

          <div className='w-1/3 '>
            <img src="./src/assets/13.png" className='' alt="Nhi h photo/" />
          </div>

         <div className=' w-2/3 text-center px-5 p-4 bg-red-100 rounded-r-xl'>
            <h1 className='text-xl font-playfair font-bold text-gray-900  border-b-2 border-gray-900 mb-2'>Photography</h1>
            <p className='text-gray-700'>We capture the essence of your events through high-quality images, specializing in event photography, portrait photography, candid photography, studio photography, and aerial photography.
            </p>
          </div>

        </div>


        <div className='flex justify-center items-center space-x-4 overflow-hidden rounded-xl w-4/5'>

          <div className='w-2/3 text-center px-6  p-4 bg-red-100  rounded-l-xl '>
            <h1 className='text-xl font-playfair mb-2 font-bold text-gray-900 border-b-2 border-gray-900'>Videography</h1>
            <p className='text-gray-700'>Our videography services create cinematic experiences, including event videography, cinematography, highlight reels, and drone videography</p>
          </div>

          <div className='w-1/3'>
            <img src="./src/assets/13.png" alt="Nhi h photo" />
          </div>

        </div>


        <div className='flex justify-center items-center space-x-4 overflow-hidden rounded-xl w-4/5'>

          <div className='w-1/3'>
            <img src="./src/assets/13.png" alt="Nhi h photo" />
          </div>

          <div className='w-2/3 text-center px-5 bg-red-100 p-4 rounded-r-xl'>
            <h1 className='text-xl font-playfair font-bold text-gray-900 border-b-2 border-gray-900 mb-2'>Albums and Post Production</h1>
            <p className='text-gray-700'>Enhance your photos and videos to perfection with our editing and post-production services and We also provide tangible keepsakes to cherish forever, offering custom photo albums,</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Services