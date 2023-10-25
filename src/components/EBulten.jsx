import React from 'react'

const EBulten = () => {
  return (
    <div>

        {/* Top Footer - Right Content */}
        <div className='basis-1/3 pt-5 pr-5' id='e-bulten'>
              {/* E-Bulten Text */}
              <div>
                <h2 className='font-heading font-bold flex justify-center lg:justify-end'>E-Bülten Aboneliği</h2>
                <p className='font-text flex justify-center lg:justify-end'>Yeniliklerden haberdar olmak için</p>
              </div>

              {/* E-Bulten Form */}
              <form method='post' autoComplete='off' id='e-bulten-form' className='flex justify-center lg:justify-end pt-5'>
                  <input type='email' className='bg-gray-300 h-[30px] p-4 font-text text-neutral-800 text-[16px] outline-none rounded-md rounded-r-none' placeholder='E-posta adresiniz'/>
                  <button className='px-2 bg-gray-300 border-l border-gray-800 text-neutral-800 font-text font-semibold whitespace-nowrap rounded-r-md'>ABONE OL</button>
              </form>

            </div>
      
    </div>
  )
}

export default EBulten
