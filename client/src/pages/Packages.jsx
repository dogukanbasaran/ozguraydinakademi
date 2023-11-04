import React, {useState} from 'react'
import matematikData  from '../data/matematik'

const Packages = () => {


  const [mathOpen, setMathOpen] = useState(false);

  const handleMath = () => {
    setMathOpen(!mathOpen);
  }

  return (
        <section className='h-[auto] py-28 bg-gray-100'>
          <div className='flex flex-col'>

            <div className='w-full'>
                <span className='pl-16 font-text font-bold text-[48px]'>SANA ÖZEL PAKET</span>
            </div>

           <div className='flex mt-5'>

                <div className='w-2/4 h-[auto] p-10'>
                  <div className='h-[80px] mb-5 flex justify-start items-center px-5 gap-2'>
                      <span className='bg-gray-800 text-neutral-300 font-bold font-text text-[24px] rounded-full p-5 w-[50px] h-[50px] flex items-center justify-center'>
                        1
                      </span>
                      <span className='text-neutral-800 font-text text-[18px]'>Ders almak istediğiniz konuları seçiniz</span>
                    </div>

                    <div className='h-[auto] border'>
                        {/* Matematik */}
                        <div className='flex flex-col border h-[auto] pl-8 overflow-auto'>
                              <div className='flex items-center justify-start gap-2'>
                                  <button onClick={handleMath} className='font-text font-bold text-[40px]'>+</button>
                                  <span className='font-text font-bold text-[20px] pt-2'>MATEMATİK</span>
                              </div>
                              {/* Konular */}
                              { mathOpen &&  <div className='h-[340px]'>
                                                              <table className='w-full'>
                                                                <thead>
                                                                  <tr className='flex pb-2 whitespace-nowrap'><th><input type='checkbox'/> Tümünü Seç</th></tr>
                                                                  <tr className='text-[18px] font-text text-neutral-800 font-bold'>
                                                                    <th className='px-5'>Seç</th>
                                                                    <th className='px-5'>Kod</th>
                                                                    <th className='px-5'>Konu</th>
                                                                    <th className='px-5'>Seans</th>
                                                                  </tr>
                                                                </thead>
                             
                                                                <tbody>
                                                                   {
                                                                     matematikData.map(matematik => {
                                                                       return(
                                                                         <tr className='text-[16px] text-neutral-700 font-text' key={matematik.id}>
                                                                             <th className='border-y px-5'><input type='checkbox'/></th>
                                                                             <th className='border-y px-5'>{matematik.code}</th>
                                                                             <th className='border-y px-5'>{matematik.subject}</th>
                                                                             <th className='border-y px-5'>{matematik.session}</th>
                                                                         </tr>
                                                                       )
                                                                     })
                                                                   }
                                                                </tbody>
                                                              </table>
                                  </div>
                              }

                        </div>
                        {/* İngilizce */}
                        <div className='flex items-center justify-start gap-2 border-b pl-8'>
                              <button className='font-text font-bold text-[40px]'>+</button>
                              <span className='font-text font-bold text-[20px] pt-2'>İNGİLİZCE</span>
                        </div>
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
