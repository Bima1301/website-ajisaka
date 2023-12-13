import { ajisakaLens } from '@/libs/data'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Janamejaya() {
    return (
        <section className='bg-white   flex  flex-col xl:gap-14 gap-5 relative overflow-hidden'>
            <div className='w-full  md:px-16 px-4'>
                <p className="text-red-600 md:text-5xl text-2xl font-black  md:mt-16 mt-6 w-full border-b-2 pb-5 border-b-black"
                    data-aos="fade-up"
                >Janamejaya
                </p>
            </div>
            <Marquee
                direction='left'
                pauseOnClick
                className='flex flex-row gap-9'
            >
                <div className='flex flex-row gap-9'>
                    {ajisakaLens.map((item, index) => {
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
                    })}
                </div>
            </Marquee>
        </section>
    )
}
