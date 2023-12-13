'use client'
import Image from 'next/image'
import React from 'react'
import MatulParticleFillIcon from '../icons/MatulParticleFillIcon'
import MatulParticleIcon from '../icons/MatulParticleIcon'

export default function Cta() {
    return (
        <section className='relative  bg-red-600 md:gap-20 overflow-hidden pt-12'>
            <div className='flex flex-col md:px-16 md:pb-14 pb-4 px-4 w-full  justify-center relative z-10'
                data-aos="fade-up"
            >
                <p className="text-white md:text-5xl text-xl font-black ">AYO SUARAKAN <br className='md:block hidden' />SUARA MEREKA!</p>
                <button className='bg-amber-300 text-black shadow  w-fit md:px-8 px-5 hover:px-12 duration-150 hover:rounded-md md:py-3 py-2  font-bold md:text-lg text-sm md:mt-8 mt-5 md:mb-0 mb-3'>DAFTAR SEKARANG</button>
            </div>
            <div className='xl:w-[800px] lg:w-[500px] md:w-[360px] w-[210px] xl:h-[250px] lg:h-[210px] md:h-[150px] h-[110px] absolute right-0 -bottom-5'>
                <Image
                    src='/images/matul.png'
                    alt='Macan Tutul'
                    priority
                    fill
                    className='object-contain'
                />
            </div>
            <div className='absolute -bottom-10 left-[25%] '>
                <MatulParticleFillIcon className='lg:max-w-full max-w-[90px]' />
            </div>
            <div className='absolute bottom-0 left-[35%]'>
                <MatulParticleFillIcon className='lg:max-w-full max-w-[90px]' />
            </div>
            <div className='absolute -bottom-5 left-[45%]'>
                <MatulParticleIcon className='lg:max-w-full max-w-[90px]' />
            </div>
            <div className='absolute -top-5 right-0'>
                <MatulParticleIcon className='lg:max-w-full max-w-[90px] rotate-180' />
            </div>
            <div className='absolute -top-14 right-[15%]'>
                <MatulParticleFillIcon className='lg:max-w-full max-w-[90px]' />
            </div>
            <div className='absolute md:top-5 top-0 md:-right-8 -right-10'>
                <MatulParticleFillIcon className='lg:max-w-full max-w-[90px]' />
            </div>
        </section>
    )
}
