import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto py-16 flex gap-16'>
            <div className='basis-1/2'>
               <h1 className='text-[12rem] font-semibold leading-none tracking-tight transition duration-300 transform hover:scale-125'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-12'>
                <div className='basis-1/3'>
                    <h5 className='mb-6  text-zinc-500 transition duration-300 text-[30px] transform hover:scale-125'>Socials</h5>
                    {["Instagram", "Twitter", "Facebook"].map((item, index) => (
                        <a key={index} className="block mt-2 text-zinc-600 capitalize transition duration-300 transform hover:scale-125">
                            {item}
                        </a>
                    ))}
                </div>
                
                <div className='basis-1/3 flex flex-col items-end transition duration-300 transform hover:scale-125'>
                    <p className='text-right mb-6'>REFOKUS is a digital agency driven by design and technology</p>
                    <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" className='mt-6'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
