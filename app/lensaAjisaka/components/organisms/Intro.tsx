'use client'
import Image from 'next/image'
import React from 'react'
import AjisakaText from '../icons/AjisakaText'
import IntroOrnamen from '../icons/IntroOrnamen'

export default function Intro() {
    return (
        <section className='min-h-[90dvh] md:px-24 px-4 pt-32 relative flex items-end h-screen overflow-hidden' id='hero'>
            <Image
                src='/images/lensaAjisaka/bgIntro.png'
                alt='hero'
                priority
                layout='fill'
                className='object-cover object-top'
                sizes='(max-width: 768px) 100vw, 600px'
            />
            <div className='absolute z-10 top-0 left-[25%]'>
                <IntroOrnamen />
            </div>
            <div className='flex flex-col justify-center items-center w-full h-full relative z-20'>
                <div className="text-white md:text-[158.28px] text-7xl font-extrabold  uppercase"
                    data-aos="fade-down"
                >lensa</div>
                <AjisakaText
                    data-aos="fade-up"
                    className='md:-mt-28 -mt-24 md:max-w-none max-w-[250px]'
                />
            </div>

        </section>
    )
}
