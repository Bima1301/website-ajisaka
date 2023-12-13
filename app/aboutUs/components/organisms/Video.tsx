import Image from 'next/image'
import React from 'react'

export default function Video() {
    return (
        <section className='h-screen flex justify-center items-center md:px-24 px-4 md:pb-24 pb-4 mt-44 relative overflow-hidden'>
            <iframe className='w-full h-full relative z-10 shadow-2xl' width="560" height="315" src="https://www.youtube.com/embed/1XsNmFq-OVY?si=ifkfZQA3wIUT2Zwe&amp;start=921" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                data-aos="fade-up"
            ></iframe>
            <div className='absolute flex flex-row gap-10 bottom-0 -left-20'>
                <Image
                    src='/images/aboutUs/aboutMotive.png'
                    alt='flower'
                    width={760}
                    height={760}
                />
                <Image
                    src='/images/aboutUs/aboutMotive.png'
                    alt='flower'
                    width={760}
                    height={760}
                />
                <Image
                    src='/images/aboutUs/aboutMotive.png'
                    alt='flower'
                    width={760}
                    height={760}
                />
            </div>
        </section>
    )
}
