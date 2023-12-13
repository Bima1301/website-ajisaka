'use client'
import { candradimukaTimeline, timeline } from '@/libs/data'
import React from 'react'
import FlowerIcon from '../icons/FlowerIcon'

export default function Timeline() {
    return (
        <section className='bg-white  md:p-16 p-4 flex flex-col justify-center relative'>
            <p className="text-black md:text-6xl text-2xl font-black md:mb-20 mb-8 md:mt-10 mt-3 relative z-10"
                data-aos="fade-up"
            >OUR TIMELINE</p>
            <div className='w-full h-full flex flex-row lg:px-40 lg:gap-24 md:gap-14 gap-10 md:mb-24 mb-8 relative z-10'>
                <div className='md:w-2.5 w-1.5 min-h-full bg-amber-300 '>
                    <div className="md:w-8 w-4 md:h-8 h-4 md:-ms-3 -ms-1 bg-red-600 sticky top-[50%]" />
                </div>
                <div className='flex flex-col md:gap-24 gap-5 md:pt-20 md:pb-32 py-5'>
                    {timeline.map((item, index) => (
                        <div className='flex flex-col uppercase' key={index}
                            data-aos="fade-right"
                        >
                            {item.title && (
                                <p className="text-black md:text-4xl text-sm font-semibold ">{item.title}</p>
                            )}
                            <p className="text-red-600 md:text-6xl text-lg font-black">{item.name}</p>
                            <p className="text-zinc-500 md:text-4xl text-xs font-semibold ">{item.date}</p>
                        </div>

                    ))}
                </div>
            </div>
            <div className='w-full h-full lg:pl-40 lg:gap-24 gap-14 lg:pr-32 relative z-10 mb-10'>
                <p className=" text-red-600 md:text-6xl text-xl font-black md:mb-20 mb-5"
                    data-aos="fade-up"
                >CANDRADIMUKA</p>
                <div className='flex flex-row lg:gap-24 md:gap-14 gap-10  w-full'>
                    <div className='md:w-2.5 w-1.5 min-h-full bg-amber-300 '>
                        <div className="md:w-8 w-4 md:h-8 h-4 md:-ms-3 -ms-1 bg-red-600 sticky top-[50%]" />
                    </div>
                    <div className='flex flex-col md:gap-14 gap-5  w-full'>
                        {candradimukaTimeline.map((item, index) => (
                            <div className='flex flex-row uppercase w-full justify-between' key={index}
                                data-aos="fade-right"
                            >
                                {item.title && (
                                    <p className="text-black md:text-4xl text-lg font-semibold ">{item.title}</p>
                                )}
                                <p className="text-zinc-500 md:text-4xl text-lg font-semibold text-end">{item.date}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className='absolute lg:top-20 top-0 right-0 '>
                <FlowerIcon className='opacity-10 md:max-w-[300px] max-w-[100px] max-h-[100px]  md:max-h-[300px] ' />
            </div>
            <div className='absolute md:top-60 top-40 left-0 md:block hidden'>
                <FlowerIcon className='opacity-10 ' />
            </div>
            <div className='absolute md:top-[35%] top-48 right-10 lg:block hidden'>
                <FlowerIcon className='opacity-20 md:max-w-[300px] md:max-h-[300px]  -rotate-12 scale-x-[-1]' />
            </div>
            <div className='absolute lg:top-[65%] md:top-[50%] top-[35%] md:left-0 left-20'>
                <FlowerIcon className='opacity-20 md:max-w-[200px] md:max-h-[200px] max-w-[50px] max-h-[50px]' />
            </div>
            <div className='absolute lg:top-[65%] md:top-[60%] right-0'>
                <FlowerIcon className='opacity-10 scale-x-[-1] md:max-w-[600px] md:max-h-[600px] max-w-[200px] max-h-[200px]' />
            </div>
            <div className='absolute lg:top-[65%] md:top-[60%] top-[70%] left-0 md:hidden block'>
                <FlowerIcon className='opacity-10 scale-x-[-1] md:max-w-[600px] md:max-h-[600px] max-w-[200px] max-h-[200px]' />
            </div>
        </section>
    )
}
