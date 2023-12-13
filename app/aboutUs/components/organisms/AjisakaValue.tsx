import React from 'react'
import WhiteFlower from '../icons/WhiteFlower'
import WhiteCrack from '../icons/WhiteCrack'
import NetworkIcon from '../icons/NetworkIcon'
import { ajisakaValues } from '@/libs/data'

export default function AjisakaValue() {
    return (
        <section className='bg-black  md:p-16 p-4 flex flex-col justify-center relative'>
            <div className='flex flex-row w-full justify-between items-center md:mb-20 mb-8 md:mt-10 mt-3 relative z-10 border-b-4 pb-10'>
                <p className="text-white md:text-6xl text-2xl font-black "
                    data-aos="fade-up"
                >NILAI-NILAI<span className='text-red-700'> AJISAKA</span></p>
                <div className='flex gap-3'>
                    <WhiteFlower />
                    <WhiteCrack />
                    <WhiteFlower />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {ajisakaValues.map((item, index) => (
                    <div key={index} className='flex flex-row gap-5 text-white items-center'
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <item.icon />
                        <p className='max-w-[65%]'>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
