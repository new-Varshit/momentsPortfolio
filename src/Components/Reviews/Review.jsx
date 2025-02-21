import React from 'react'

function Review() {
    return (
        <>
            <div className='h-screen'>
                <div className='h-1/6 font-sans text-4xl flex justify-center items-end border-b'>
                    <h1 className='text-center '>What Our Customer Says </h1>
                </div>

                <div className='h-5/6 bg-reviewImage bg-center bg-cover bg-fixed flex justify-center space-x-8 items-center' >


                    <div className='flex flex-col  rounded-2xl transform transition-transform bg-white  hover:scale-110 shadow-lg  p-5 relative  text-center  items-center w-1/4 '>
                        <div className='overflow-hidden  absolute -top-16 h-32 w-32 border rounded-full  bg-red-50'>
                            <img className='h-32' src="./src/assets/11.jpg" alt="" />
                        </div>
                        <div className='mt-12'>
                            <h1 className='font-fatface text-xl'>
                                Varshit Tyagi
                            </h1>
                            <p className='font-thin'>
                                Web developer
                            </p>
                        </div>
                        <div>
                            <p className='font-mono text-sm text-gray-500 px-6 mt-3'>
                                " I recently hired Moments by Saksham for a family wedding, and I couldn't be happier with their work! Saksham and his team were amazing from start to finish.  "
                            </p>
                        </div>


                    </div>
                    <div className='flex flex-col shadow-lg rounded-2xl transform transition-transform hover:scale-110 bg-white   p-5 relative  text-center  items-center w-1/4 '>
                        <div className='overflow-hidden absolute -top-16 h-32 w-32 border rounded-full  bg-red-50'>
                            <img className='h-32' src="./src/assets/11.jpg" alt="" />
                        </div>
                        <div className='mt-12'>
                            <h1 className='font-fatface text-xl'>
                                Varshit Tyagi
                            </h1>
                            <p className='font-thin'>
                                Web developer
                            </p>
                        </div>
                        <div>
                            <p className='font-mono text-sm text-gray-500 px-6 mt-3'>
                                " I recently hired Moments by Saksham for a family wedding, and I couldn't be happier with their work! Saksham and his team were amazing from start to finish.  "
                            </p>
                        </div>


                    </div>
                    <div className='flex flex-col  rounded-2xl bg-white  shadow-xl transform transition-transform hover:scale-110 p-5 relative  text-center  items-center w-1/4 '>
                        <div className='overflow-hidden absolute -top-16 h-32 w-32 border rounded-full  bg-red-50'>
                            <img className='h-32' src="./src/assets/11.jpg" alt="" />
                        </div>
                        <div className='mt-12'>
                            <h1 className='font-fatface text-xl'>
                                Varshit Tyagi
                            </h1>
                            <p className='font-thin'>
                                Web developer
                            </p>
                        </div>
                        <div>
                            <p className='font-mono text-sm text-gray-500 px-6 mt-3'>
                                " I recently hired Moments by Saksham for a family wedding, and I couldn't be happier with their work! Saksham and his team were amazing from start to finish.  "
                            </p>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Review