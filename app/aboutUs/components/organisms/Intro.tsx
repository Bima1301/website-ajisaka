'use client'
import Image from 'next/image'
import React from 'react'
import ArrowRight from '../icons/ArrowRight'

export default function Intro() {
    return (
        <section className='min-h-[90dvh] md:px-24 px-4 pt-32 relative flex items-end' id='hero'>
            <Image
                src='/images/aboutUs/bgAboutUs.png'
                alt='hero'
                priority
                layout='fill'
                className='object-cover object-top'
                sizes='(max-width: 768px) 100vw, 600px'
            />
            <div className='flex lg:flex-row flex-col bg-white border-2 border-white relative z-10 -mb-28 shadow-lg'>
                <div className='relative w-full flex flex-col lg:gap-0 gap-14 justify-between pt-12 pb-10 px-10 overflow-hidden'>
                    <div className='flex flex-row justify-between relative z-10'
                        data-aos="fade-down"
                    >
                        <p className=" text-amber-300 text-xl font-semibold">TENTANG AJISAKA 2024</p>
                        <ArrowRight className='lg:rotate-0 rotate-90' />
                    </div>
                    <div className='relative z-10'
                        data-aos="fade-left"
                    >
                        <Image
                            src='/images/logoAbout.png'
                            width={380}
                            height={380}
                            alt='hero'
                            priority
                        />
                    </div>
                    <Image
                        src='/images/aboutUs/bgAboutUs.png'
                        alt='hero'
                        priority
                        layout='fill'
                        className='object-cover object-top'
                        sizes='(max-width: 768px) 100vw, 600px'
                    />
                </div>
                <p className='lg:max-w-[50%] p-8 md:text-lg text-sm'
                    data-aos="fade-up"
                >
                    Festival Ajisaka merupakan ajang perlombaan nasional di bidang komunikasi di bawah Departemen Ilmu Komunikasi Universitas Gadjah Mada. <br /> <br />

                    Festival Ajisaka 2024 mengangkat tema Nature Conservation dengan tajuk “Samarthya Bhumi”. Tema ini dipilih agar Insan Kreatif dapat berkontribusi dalam mengedukasi masyarakat untuk tidak abai akan isu lingkungan yang semakin mengancam keseimbangan kehidupan manusia, satwa, dan puspa sebagai aspek yang terdampak. Selain itu, Insan Kreatif juga diharapkan dapat menjadi sosok penggerak dalam menyebarkan pemahaman akan pentingnya konservasi alam terhadap keseimbangan kehidupan dan membangun keberlanjutan.<br /> <br />

                    Festival Ajisaka hadir untuk menantang para Insan Kreatif di seluruh Indonesia untuk menyumbangkan ide inovatif dan berkontribusi dalam memecahkan masalah lingkungan Indonesia di tengah era digital dalam lanskap ilmu komunikasi. Kami berkomitmen untuk berkarya dan berkontribusi sepenuh hati untuk mendukung kemajuan Insan Kreatif nusantara.

                </p>
            </div>
        </section>
    )
}
