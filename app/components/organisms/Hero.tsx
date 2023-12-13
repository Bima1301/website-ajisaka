'use client'
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import LandingOrnamen from '../icons/LandingOrnamen'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

export default function Hero() {
    return (
        <section className='overflow-hidden h-screen md:px-24 px-4 relative' id='hero'>
            <div className='absolute right-0 top-0 z-10'>
                <LandingOrnamen />
            </div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect='fade'
                speed={2000}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000 }}
                className='!absolute top-0 left-0 w-full h-full z-0'
            >
                <SwiperSlide >
                    <Image
                        src='/images/landingBg/landing1.png'
                        alt='hero'
                        priority
                        quality={100}
                        layout='fill'
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 600px'
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Image
                        src='/images/landingBg/landing2.png'
                        alt='hero'
                        priority
                        quality={100}
                        layout='fill'
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 600px'
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Image
                        src='/images/landingBg/landing3.png'
                        alt='hero'
                        priority
                        quality={100}
                        layout='fill'
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 600px'
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <Image
                        src='/images/landingBg/landing4.png'
                        alt='hero'
                        priority
                        quality={100}
                        layout='fill'
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 600px'
                    />
                </SwiperSlide>
            </Swiper>
            <div className='relative z-10 flex flex-col w-full h-full justify-center lg:max-w-[60%] gap-2'
                data-aos="fade-up"
            >
                <p className="text-white md:text-[63.68px] text-3xl font-black  md:leading-[70.05px] md:mb-0 mb-5">
                    <Typewriter
                        words={['Setiap Hidup Berharga, Setiap Aksi Bermakna']}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p className="text-white md:text-lg text-sm font-medium md:leading-[28.80px]">Festival Ajisaka UGM 2024 merupakan ajang kompetisi komunikasi bertaraf nasional yang hadir untuk memotivasi pemuda-pemudi bangsa dalam menyumbang ide inovatif mereka terkait Nature Conservation
                </p>
                <button className='bg-red-600 shadow w-fit px-8 hover:px-12 duration-150 hover:rounded-md py-3 text-white font-bold md:text-lg text-sm mt-8'>PANDUAN</button>
            </div>
        </section>
    )
}
