import React, {useState} from 'react'
import {MdExpandMore, MdExpandLess} from 'react-icons/md'
import featureData from '../data/features'

const FeatureSection = () => {

    const initialFeatureStates = featureData.map(() => false);
    const [featureOpen, setFeatureOpen] = useState(initialFeatureStates);
    const [featureExpandIcon, setFeatureExpandIcon] = useState(featureData.map(() => <MdExpandMore/>));


    const handleFeatures = (index) => {
        const updatedFeatureOpen = [...featureOpen];
        updatedFeatureOpen[index] = !updatedFeatureOpen[index];
        setFeatureOpen(updatedFeatureOpen);

        const updatedFeatureExpandIcon = [...featureExpandIcon];
        updatedFeatureExpandIcon[index] = updatedFeatureOpen[index] ? <MdExpandLess/> : <MdExpandMore/>;
        setFeatureExpandIcon(updatedFeatureExpandIcon);
    }

  return (
    <section className=' h-[auto] md:h-[700px] xl:h-[400px] bg-gray-100 mb-5'>

        <h2 className='text-center text-[32px] md:text-[48px] font-semibold font-heading text-neutral-800'>NEDEN BİZ?</h2>

        <div className='container py-5 h-[auto] mx-auto flex flex-col justify-center items-center md:grid md:grid-cols-2 md:grid-rows-2 xl:grid-cols-4 px-10 gap-4'>


        {featureData.map((feature, index) => {
            return(
                
                <div className='rounded-md relative max-w-[350px]' key={feature.id}>
                        <img src={feature.featureImage} className='rounded-xl mb-20'/>
                        <div className='z-20 rounded-2xl border absolute bg-white w-full sm:w-3/4 sm:left-[44.5px] top-[145px] sm:top-[170px] lg:top-[180px] xl:top-[140px] 2xl:top-[180px] shadow-xl'>
                            <h3 className='text-center text-neutral-800 text-[24px] font-heading font-bold cursor-pointer'>{feature.title}</h3>
                                {featureOpen[index] && (
                                    <p className='text-sm text-center px-2 font-text'>{feature.detailedText}</p>
                                )}
                            <button className='w-full flex justify-center cursor-pointer text-[40px] rounded-full' onClick={() => handleFeatures(index)}><span className='rounded-full hover:bg-gray-300 duration-300'>{featureExpandIcon[index]}</span></button>
                </div>

          
        </div>


            )
        })}



           

        </div>
    </section>
  )
}

export default FeatureSection
