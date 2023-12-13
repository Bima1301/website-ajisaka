import { faq } from '@/libs/data'
import React from 'react'
import ArrowUp from '../icons/ArrowUp'

export default function intro() {
    return (
        <section className="bg-white md:p-16 p-4 flex flex-col md:gap-10 gap-5 justify-center relative overflow-hidden md:mt-0 mt-12">
            <p
                className="md:text-6xl text-2xl font-black mb-8 md:mt-10 mt-3 w-full text-center text-black"
                data-aos="fade-up"
            >
                FAQ
            </p>
            <div className="m-2 space-y-2">
                {faq.map((item, index) => (
                    <div key={index}
                        className="group flex flex-col gap-2 rounded-lg bg-white p-5 text-black"
                        tabIndex={index + 1}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="flex cursor-pointer items-center justify-between pl-3 pb-3 border-b-4 border-b-black">
                            <span className='md:text-3xl text-lg    '> {item.question} </span>
                            <ArrowUp className='group-focus:rotate-180 transition-all duration-500' />
                        </div>
                        <div
                            className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 md:text-xl text-sm pl-3"
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}


            </div>
        </section>
    )
}
