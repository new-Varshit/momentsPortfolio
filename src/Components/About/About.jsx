import React from 'react'

function About() {


  return (
    <>

      <div className='bg-fixed bg-aboutImage  h-screen bg-center bg-cover bg-no-repeat border flex justify-center items-center'>

        <div className='flex flex-col space-y-20 items-center '>
          <div className=''>
            <div className='h-48 w-48 border bg-aboutProfile bg-center bg-cover  rounded-full  '>
              <p></p>
            </div>
          </div>

          <div className='text-white w-3/4'>

            <div className="p-8 text-center rounded-md font-mono bg-white text-gray-800">
              <h1 className="text-4xl font-bold mb-4">Hey there!</h1>
              <p className="text-lg mb-2">
                I’m <span className="text-2xl font-semibold">Saksham Arora</span>, an event photographer. I specialize in <span className="italic">weddings, parties, and corporate gigs</span>, turning fleeting moments into lasting memories.
              </p>
              <p className="text-lg mb-2">
                I blend <span className="text-xl font-medium">candid shots</span> with crafted compositions to tell each event's unique story. My goal: stunning photos that capture the vibe and emotions.
              </p>
              <p className="text-lg">
                When I’m not behind the lens, I explore new photo techniques or check out the latest coffee spots. <span className="text-xl font-medium">Let's chat</span> about your next event!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About