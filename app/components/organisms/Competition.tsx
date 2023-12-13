'use client'
import React from 'react'
import CompetitionCard from '../atoms/CompetitionCard'
import { competition } from '@/libs/data'

export default function Competition() {
    return (
        <section className='bg-stone-900  md:p-16 md:pb-16 p-4 flex flex-col justify-center relative'>
            <p className="text-white md:text-6xl text-2xl font-black md:mb-20 mb-8 md:mt-10 mt-3 relative z-10"
                data-aos="fade-up"
            >OUR COMPETITION</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {competition.map((item, index) => (
                    <div key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <CompetitionCard
                            title={item.title}
                            subtitle={item.subtitle}
                            category={item.category}
                            icon={item.icon}
                            registrationLink={item.registrationLink}
                            guidebookLink={item.guidebookLink}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
