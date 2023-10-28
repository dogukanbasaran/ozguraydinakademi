import React from 'react'
import photo1 from '../assets/features/feature1.jpg'
import {MdExpandMore} from 'react-icons/md'

const FeatureSection = () => {
  return (
    <section className='h-[auto]  my-24 mb-52'>
        <div className='container grid grid-cols-4 gap-4'>

            <div className='rounded-md relative'>
                <img src={photo1} className='rounded-xl'/>
                <div className='rounded-2xl border absolute bg-white w-3/4 left-[45px] top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

            <div className='rounded-md relative'>
                <img src={photo1} className='rounded-xl'/>
                <div className='rounded-2xl border absolute bg-white w-3/4 left-[45px] top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

            <div className='rounded-md relative'>
                <img src={photo1} className='rounded-xl'/>
                <div className='rounded-2xl border absolute bg-white w-3/4 left-[45px] top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

            <div className='rounded-md relative'>
                <img src={photo1} className='rounded-xl'/>
                <div className='rounded-2xl border absolute bg-white w-3/4 left-[45px] top-[180px] shadow-xl'>
                    <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>Birebir Özel Ders</h3>
                    <p className='text-sm text-center px-2 font-text'>Bizde sınıf ve tahta yok. Yalnızca öğrenci ve profesyonel öğretmen var. Tüm derslerimiz bire bir özel ders formatıyla yapılır. Bizde saat yok. Ders, öğrenci konuyu anlayınca biter. Ücretsiz özel ders randevusu için tıklayınız.</p>
                    <span><MdExpandMore className='text-[40px] w-full cursor-pointer'/></span>
                </div>
            </div>

        </div>
    </section>
  )
}

export default FeatureSection
