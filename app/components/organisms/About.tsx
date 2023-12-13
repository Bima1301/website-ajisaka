'use client'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section className='md:p-10 p-4 flex md:flex-row flex-col bg-red-600 md:gap-20 overflow-hidden'>
            <div className='lg:flex md:hidden justify-center items-center w-full lg:max-w-[30%] md:max-w-[30%]'
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
            <div className='flex flex-col gap-6 w-full text-white'
                data-aos="fade-right"
            >
                <div className='lg:hidden md:flex hidden flex-row gap-10'>
                    <div className='lg:hidden md:block hidden justify-center items-center w-full lg:max-w-[30%] md:max-w-[30%]'>
                        <Image
                            src='/images/logoAbout.png'
                            width={380}
                            height={380}
                            alt='hero'
                            priority
                        />
                    </div>
                    <span className='lg:hidden md:block hidden text-xl font-medium'>
                        Festival Ajisaka merupakan ajang perlombaan nasional di bidang komunikasi di bawah Departemen Ilmu Komunikasi Universitas Gadjah Mada.
                    </span>
                </div>
                <p className='md:text-xl text-sm font-medium'>
                    <span className='lg:block md:hidden'>
                        Festival Ajisaka merupakan ajang perlombaan nasional di bidang komunikasi di bawah Departemen Ilmu Komunikasi Universitas Gadjah Mada.
                        <br /><br />
                    </span>
                    Festival Ajisaka 2024 mengangkat tema Nature Conservation dengan tajuk “Samarthya Bhumi”. Tema ini dipilih agar Insan Kreatif dapat berkontribusi dalam mengedukasi masyarakat untuk tidak abai akan isu lingkungan yang semakin mengancam keseimbangan kehidupan manusia, satwa, dan puspa sebagai aspek yang terdampak. Selain itu, Insan Kreatif juga diharapkan dapat menjadi sosok penggerak dalam menyebarkan pemahaman akan pentingnya konservasi alam terhadap keseimbangan kehidupan dan membangun keberlanjutan. <br /><br />
                    Festival Ajisaka hadir untuk menantang para Insan Kreatif di seluruh Indonesia untuk menyumbangkan ide inovatif dan berkontribusi dalam memecahkan masalah lingkungan Indonesia di tengah era digital dalam lanskap ilmu komunikasi. Kami berkomitmen untuk berkarya dan berkontribusi sepenuh hati untuk mendukung kemajuan Insan Kreatif nusantara.
                </p>
                <button className='bg-red-600 shadow border-2 border-white w-fit px-8 hover:px-12 duration-150 hover:rounded-md py-3 text-white font-bold md:text-lg text-sm md:mt-8 mt-5 md:mb-0 mb-3'>SELENGKAPNYA</button>
            </div>
        </section>
    )
}
