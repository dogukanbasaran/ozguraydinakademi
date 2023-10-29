import React from 'react'

const ContactSection = () => {
  return (
    <section>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row sm:justify-center'>
                    <div className='m-5 flex flex-col sm:justify-center sm:items-center'>
                        <h3 className='font-text font-bold text-center text-[32px] md:text-[48px]'>İLETİŞİM FORMU</h3>
                        <form className='mt-5 bg-gray-100 p-10 border-[0.5px] rounded-md'>
                            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                            {/* Ad */}
                            <div className='col-span-2 sm:col-span-1'>
                                <label htmlFor='first-name' className='block text-[16px] font-semibold leading-6 text-neutral-800'>Adınız</label>
                                <div className='mt-2'>
                                <input type='text' name='first-name' id='first-name' autoComplete='given-name' required
                                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
                                />
                                </div>
                            </div>
                            {/* Soyad */}
                            <div className='col-span-2 sm:col-span-1'>
                                <label htmlFor='last-name' className='block text-[16px] font-semibold leading-6 text-neutral-800'>Soyadınız</label>
                                <div className='mt-2'>
                                <input type='text' name='last-name' id='last-name' autoComplete='family-name' required
                                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6' 
                                />
                                </div>
                            </div>

                            {/* Email */}

                            <div className='col-span-2 sm:col-span-1'>
                                <label htmlFor='email' className='block text-[16px] font-semibold leading-6 text-neutral-800'>Email Adresiniz</label>
                                <div className='mt-2'>
                                <input type='email' name='email' id='email' autoComplete='email' required
                                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
                                />
                                </div>
                            </div>

                            {/* Telefon Numarası */}

                            <div className='col-span-2 sm:col-span-1'>
                                <label htmlFor='phone' className='block text-16px] font-semibold leading-6 text-neutral-800'>Telefon Numaranız</label>
                                <div className='mt-2'>
                                <input type='text' name='phone' id='phone' autoComplete='phone' required
                                    className='block w-full rounded-md border-0 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6' 
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
                            <button type='submit' className='block w-full rounded-md bg-gray-800 border-[0.5px] border-neutral-400 px-3.5 py-2.5 text-center text-[16px] text-neutral-300 font-semibold hover:bg-gray-300 hover:text-neutral-800 duration-300'>Gönder</button>
                            </div>
                        </form>                       
                    </div>

                    <div className='m-5'>
                        <div className=' md:mx-[120px] lg:m-[95px] bg-gray-100 p-5 rounded-md border-[0.5px]'>
                            <h3 className='font-text font-bold text-[24px] text-center mb-5 whitespace-nowrap'>YA DA BİZİ ARAYIN!</h3>
                            <p className='text-center font-text font-bold text-[32px]'>+90 534 739 59 78</p>
                            <p className='text-center font-text text-[16px] mt-5'>Bizi dilediğin an arayabilir veya mesaj bırakabilirsin.</p>
                        </div>
                    </div>
                </div>
            </div>   
    </section>
  )
}

export default ContactSection
