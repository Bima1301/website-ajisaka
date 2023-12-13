import Image from 'next/image'
import React from 'react'
import ArrowTopRight from '../icons/ArrowTopRight'
import { journey } from '@/libs/data'
import Badak from '../icons/Badak'
import TopOrnamen from '../icons/TopOrnamen'
import BottomOrnamen from '../icons/BottomOrnamen'

export default function Journey() {
    return (
        <section className='bg-red-600  md:p-16 p-4 flex xl:flex-row flex-col xl:gap-20 gap-5 justify-center relative overflow-hidden'>
            <div className='absolute bottom-0 left-0'>
                <Badak />
            </div>
            <div className='absolute top-0 left-0'>
                <TopOrnamen />
            </div>
            <div className='absolute bottom-0 left-80'>
                <BottomOrnamen />
            </div>
            <p className="text-white md:text-5xl text-2xl font-black xl:mb-20 mb-8 md:mt-10 mt-3 relative z-10"
                data-aos="fade-up"
            >PERJALANAN <br /> <span className='text-amber-300'> AJISAKA</span>
            </p>
            <div className='flex flex-row bg-red-700 pl-3 pr-5'
                data-aos='zoom-in'>
                <div className='flex flex-col max-h-[80vh] overflow-y-auto items-center'>
                    {journey.map((item, index) => (
                        <div className='pl-1.5 relative' key={index}>
                            <div className='w-6 h-5 bg-amber-300 absolute top-[50%] -left-2 z-10' />
                            <div className='h-full flex flex-row gap-6 w-full pl-6 border-l-4 relative'>
                                <div className='border-2 border-white flex md:flex-row flex-col bg-red-600 relative mb-10'>
                                    <ArrowTopRight className='absolute top-5 right-5' />
                                    <Image
                                        src={item.img}
                                        width={268}
                                        height={268}
                                        alt={item.title}
                                        className='object-cover md:min-w-[260px] md:w-auto w-full md:aspect-square md:max-h-none max-h-[150px]'
                                    />
                                    <div className='flex flex-col gap-3 md:p-10 p-4'>
                                        <p className=" text-amber-300 md:text-2xl text-base font-extrabold uppercase ">{item.title}</p>
                                        <p className='text-justify md:text-lg text-xs text-white'>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
