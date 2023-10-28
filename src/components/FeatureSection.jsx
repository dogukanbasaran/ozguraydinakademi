import React from 'react'
import photo1 from '../assets/features/feature1.jpg'
import {MdExpandMore} from 'react-icons/md'

const FeatureSection = () => {
  return (
    <section className='my-24'>

        <h2 className='text-center text-[32px] md:text-[48px] font-semibold font-heading text-neutral-800'>Neden Biz?</h2>

        <div className='container py-5 h-[auto] mx-auto flex flex-col justify-center items-center md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 px-10 gap-4'>

            <div className='rounded-md relative max-w-[350px]'>
                <img src={photo1} className='rounded-xl mb-20'/>
                <div className='z-50 rounded-2xl border absolute bg-white w-3/4 left-[48px] top-[145px] sm:top-[170px] lg:top-[180px] xl:top-[140px] 2xl:top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='hidden text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

            <div className='rounded-md relative max-w-[350px]'>
                <img src={photo1} className='rounded-xl mb-20'/>
                <div className='z-50 rounded-2xl border absolute bg-white w-3/4 left-[48px] top-[170px] lg:top-[180px] xl:top-[140px] 2xl:top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='hidden text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

            <div className='rounded-md relative max-w-[350px]'>
                <img src={photo1} className='rounded-xl mb-20'/>
                <div className='z-50 rounded-2xl border absolute bg-white w-3/4 left-[48px] top-[170px] lg:top-[180px] xl:top-[140px] 2xl:top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='hidden text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

            <div className='rounded-md relative max-w-[350px]'>
                <img src={photo1} className='rounded-xl mb-20'/>
                <div className='z-50 rounded-2xl border absolute bg-white w-3/4 left-[48px] top-[170px] lg:top-[180px] xl:top-[140px] 2xl:top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='hidden text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

           

        </div>
    </section>
  )
}

export default FeatureSection
