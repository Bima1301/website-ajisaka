import { mediaPartner } from '@/libs/data'
import Image from 'next/image'
import React from 'react'

export default function MediaPartner() {
    return (
        <section className='bg-gray-200 md:gap-9 overflow-hidden md:p-16  p-4 flex flex-col'>
            <p className="text-black md:text-5xl text-xl font-black md:mb-0 mb-5">MEDIA PARTNERS</p>
            <div className='w-full flex flex-wrap gap-8'>
                {mediaPartner.map((item, index) => (
                    <img
                        key={index}
                        src={item.img}
                        alt={item.alt}
                        className='object-contain md:h-[52px] h-[32px] mx-auto'
                    />
                ))}
            </div>
        </section>
    )
}
