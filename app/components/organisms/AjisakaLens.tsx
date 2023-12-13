'use client'

import { ajisakaLens } from '@/libs/data'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function AjisakaLens() {
    return (
        <section className='bg-white  flex flex-col justify-center relative md:pb-16 pb-4'>
            <p className="text-black md:text-6xl text-2xl font-black md:mb-20 mb-8 md:mt-10 mt-3 relative z-10 md:pt-10 md:px-16 p-4"
                data-aos="fade-up"
            >LENSA AJISAKA</p>
            <Marquee
                direction='right'
                className='mb-10 flex flex-row gap-9'
                pauseOnClick
            >
                <div className='flex flex-row gap-9'>
                    {ajisakaLens.map((item, index) => {
                        if (index < 8) {
                            return (
                                <div key={index} className='relative md:w-[600px] md:h-[400px] w-[300px] h-[200px]'>
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        priority
                                        fill
                                        className='object-cover'
                                        sizes='(max-width: 768px) 100vw, 600px'
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
            </Marquee>
            <Marquee
                direction='left'
                pauseOnClick
                className='flex flex-row gap-9'
            >
                <div className='flex flex-row gap-9'>
                    {ajisakaLens.map((item, index) => {
                        if (index > 7) {
                            return (
                                <div key={index} className='relative md:w-[600px] md:h-[400px] w-[300px] h-[200px]'>
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        priority
                                        fill
                                        className='object-cover'
                                        sizes='(max-width: 768px) 100vw, 600px'

                                    />
                                </div>
                            )
                        }
                    })}
                </div>
            </Marquee>
        </section>
    )
}
