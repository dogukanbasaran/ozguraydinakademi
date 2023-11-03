import React from 'react'

const Packages = () => {
  return (
        <section className='h-[auto] py-28'>
          <div className='container  mx-auto flex flex-col'>

            <div className='w-full'>
                <span className='font-heading font-bold text-[48px]'>SANA ÖZEL PAKET</span>
            </div>

           <div className='flex mt-5 bg-gray-100 rounded-md'>

                <div className='w-2/4 h-[auto] p-10'>
                  <div className='h-[80px] mb-5 flex justify-start items-center px-5 gap-2'>
                      <span className='bg-gray-800 text-neutral-300 font-bold font-text text-[24px] rounded-full p-5 w-[50px] h-[50px] flex items-center justify-center'>
                        1
                      </span>
                      <span className='text-neutral-800 font-text text-[18px]'>Ders almak istediğiniz konuları seçiniz</span>
                    </div>
                </div>

                    {/* SEANS TABLOSU */}
                <div className='w-2/4  h-[auto]  p-10'>
                  <div className='h-[80px] mb-5 flex justify-start items-center px-5 gap-2'>
                    <span className='bg-gray-800 text-neutral-300 font-bold font-text text-[24px]  rounded-full p-5 w-[50px] h-[50px] flex items-center justify-center'>
                      2
                    </span>
                    <span className='text-neutral-800 font-text text-[18px]'>Seçtiğiniz konulara göre hesaplanan seans ihtiyacınıza uygun paketleri inceleyin</span>
                  </div>
                  <div className='border flex items-center justify-center py-5'>
                    <span className='font-text text-[24px] text-neutral-800 font-semibold px-5'>TOPLAM SEANS İHTİYACINIZ:</span>
                    <input className='font-text text-[24px] border-[0.5px] rounded-sm w-[80px] bg-gray-200 text-center' type='text' disabled placeholder='0'/>
                  </div>
                  <div className='w-full'>
                    <table className='mt-5 w-full'>
                      <thead>
                        <tr className='uppercase'>
                          <th className='border p-5 px-100'>EĞİTİM SÜRESİ</th>
                          <th className='border p-5 px-10'>Günde 1 Seans</th>
                          <th className='border p-5 px-10'>Günde 2 Seans</th>
                          <th className='border p-5 px-10'>Günde 3 Seans</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='font-semibold text-center'>
                          <td className='border p-5 px-10 text-neutral-800'>1 GÜN</td>
                          <td className='border p-5 px-10 text-neutral-500'>1 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>2 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>3 SEANS</td>
                        </tr>
                        <tr className='font-semibold text-center'>
                          <td className='border p-5 px-10 text-neutral-800'>10 GÜN</td>
                          <td className='border p-5 px-10 text-neutral-500'>10 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>20 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>30 SEANS</td>
                        </tr>
                        <tr className='font-semibold text-center'>
                          <td className='border p-5 px-10 text-neutral-800'>30 GÜN</td>
                          <td className='border p-5 px-10 text-neutral-500'>30 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>60 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>90 SEANS</td>
                        </tr>
                        <tr className='font-semibold text-center'>
                          <td className='border p-5 px-10 text-neutral-800'>50 GÜN</td>
                          <td className='border p-5 px-10 text-neutral-500'>50 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>100 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>150 SEANS</td>
                        </tr>
                        <tr className='font-semibold text-center'>
                          <td className='border p-5 px-10 text-neutral-800'>70 GÜN</td>
                          <td className='border p-5 px-10 text-neutral-500'>70 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>140 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>210 SEANS</td>
                        </tr>
                        <tr className='font-semibold text-center'>
                          <td className='border p-5 px-10 text-neutral-800'>100 GÜN</td>
                          <td className='border p-5 px-10 text-neutral-500'>100 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>200 SEANS</td>
                          <td className='border p-5 px-10 text-neutral-500'>300 SEANS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

            </div>


          </div>
        </section>
  )
}

export default Packages
