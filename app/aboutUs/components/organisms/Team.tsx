import React from 'react'
import ArrowTopRight from '../icons/ArrowTopRight'
import { team } from '@/libs/data'

export default function Team() {
    return (
        <section className='bg-white  md:p-16 p-4 flex  flex-col xl:gap-20 gap-5 justify-center relative overflow-hidden'>
            <p className=" md:text-5xl text-2xl font-black mb-8 md:mt-10 mt-3 w-full text-center text-black"
                data-aos="fade-up"
            >TIM DI BALIK  <span className='text-red-600'> AJISAKA</span>
            </p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {team.map((data, index) => (
                    <div key={index} className='flex flex-col gap-5 font-Jakarta'
                        data-aos="zoom-out"
                        data-aos-delay={index * 100}
                    >
                        <div className="flex flex-row justify-between w-full bg-red-600 items-center md:p-5 p-3" >
                            <p className="text-white md:text-xl text-sm font-bold font-Jakarta">{data.division}</p>
                            <ArrowTopRight />
                        </div>
                        <div className='flex flex-row gap-5 md:min-h-[210px] min-h-[120px]'>
                            {data.data.map((itemData, index) => {
                                return (
                                    <div className='flex-1' key={index}>
                                        {itemData.map((itemD: any, x) => (
                                            <p key={x}
                                                className={`md:text-base text-xs ${itemD.as == 'pos' ? 'font-bold' : ""} 
                                                    ${itemD.as == 'name' && itemData[x + 1]?.as !== 'name' ? "mb-2" : ""}
                                                `}
                                            >
                                                {itemD.value}
                                            </p>
                                        ))}
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
