import React from 'react'

const Contact = () => {
  return (
    <div className='h-[auto]'>
      <div className='isolate px-6 py-12 sm:py-32 lg:px-9'>
        <div className='mx-auto  text-center text-neutral-800'>
            <h2 className='font-heading font-bold text-[32px]'>Bize Ulaşın</h2>
        </div>
        <form action='mailto:rfcaptain@hotmail.com' method='POST' className='mx-auto max-w-xl sm:mt-20'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              {/* Ad */}
              <div className='col-span-2 sm:col-span-1'>
                <label htmlFor='first-name' className='block text-[16px] font-semibold leading-6 text-neutral-800'>Adınız</label>
                <div className='mt-2'>
                  <input type='text' name='first-name' id='first-name' autoComplete='given-name' required
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' placeholder='Adınızı giriniz.'
                  />
                </div>
              </div>
              {/* Soyad */}
              <div className='col-span-2 sm:col-span-1'>
                <label htmlFor='last-name' className='block text-[16px] font-semibold leading-6 text-neutral-800'>Soyadınız</label>
                <div className='mt-2'>
                  <input type='text' name='last-name' id='last-name' autoComplete='family-name' required
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6' placeholder='Soyadınızı giriniz.'
                  />
                </div>
              </div>

              {/* Email */}

              <div className='col-span-2'>
                <label htmlFor='email' className='block text-[16px] font-semibold leading-6 text-neutral-800'>Email Adresiniz</label>
                <div className='mt-2'>
                  <input type='email' name='email' id='email' autoComplete='email' required
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' placeholder='Email adresinizi giriniz.'
                  />
                </div>
              </div>

              {/* Telefon Numarası */}

              <div className='col-span-2'>
                <label htmlFor='phone' className='block text-16px] font-semibold leading-6 text-neutral-800'>Telefon Numaranız</label>
                <div className='mt-2'>
                  <input type='tel' name='phone' id='phone' autoComplete='phone' pattern='[0-9]{2} [0-9]{3} [0-9]{3} [0-9]{4}' required
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' placeholder='90 000 000 0000'
                  ></input>
                </div>
              </div>

              {/* Mesaj */}

              <div className='col-span-2'>
                <label htmlFor='message' className='block text-[16px] font-semibold leading-6 text-neutral-800'>Mesajınız</label>
                <div className='mt-2'>
                  <textarea name='message' id='message' rows='6' required className='block w-full border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 rounded-md'></textarea>
                </div>
              </div>
            </div>

            <div className='mt-10'>
              <button type='submit' className='block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-[16px] text-neutral-300 font-semibold hover:bg-gray-300 hover:text-neutral-800 duration-300'>Gönder</button>
            </div>
        </form>
      </div>
        
    </div>
  )
}

export default Contact
