import { competition } from '@/libs/data';
import Image from 'next/image';
import React, { useState } from 'react';
import ArrowBottomRight from '../icons/ArrowBottomRight';
import Link from 'next/link';

export default function Intro() {
    const [selected, setSelected] = useState('Sadewa');

    const renderCompetitionButtons = (startIndex: any, endIndex: any) => (
        <div className="lg:hidden flex flex-row">
            {competition.slice(startIndex, endIndex).map((item, index) => (
                <button
                    onClick={() => setSelected(item.title)}
                    key={startIndex + index}
                    className={`flex flex-1 ${index === competition.length - 1 ? '' : ''} md:border-b-4 border-b-2 ${item.title === selected ? 'border-b-red-600 text-red-600' : 'border-b-black'
                        }  pb-4 items-center justify-center`}
                >
                    <p className={`${item.title === selected ? "text-red-600" : "text-black"} md:text-4xl  font-semibold `}>{item.title}</p>
                </button>
            ))}
        </div>
    );

    return (
        <section className="bg-white md:p-16 p-4 flex flex-col md:gap-10 gap-5 justify-center relative overflow-hidden md:mt-0 mt-12">
            <p
                className="md:text-6xl text-2xl font-black mb-8 md:mt-10 mt-3 w-full text-center text-black"
                data-aos="fade-up"
            >
                OUR COMPETITION
            </p>
            <div className="lg:flex hidden flex-row">
                {competition.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setSelected(item.title)}
                        className={`flex-1 flex px-3 border-b-4  ${item.title === selected ? 'border-b-red-600 text-red-600' : 'border-b-black'
                            } pb-4 items-center justify-center`}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                    >
                        <p className={`${item.title === selected ? "text-red-600" : "text-black"} md:text-4xl font-semibold `}>{item.title}</p>
                    </button>
                ))}
            </div>
            {renderCompetitionButtons(0, 3)}
            {renderCompetitionButtons(3, competition.length)}
            {competition.map((item, index) => {
                if (item.title === selected) {
                    return (
                        <React.Fragment key={index}>
                            <div className='flex flex-row md:gap-8 gap-4'
                                data-aos="fade-up"
                            >
                                <div className='bg-amber-300  pt-4 pb-6 lg:min-w-[285px] md:min-w-[250px] min-w-[150px] flex flex-col justify-center items-center lg:h-auto h-fit md:px-0 px-2'>
                                    <Image
                                        src={item.img}
                                        width={225}
                                        height={225}
                                        alt='Sadewa'
                                    />
                                    <p className="text-black md:text-sm text-xs font-medium md:mt-0 mt-2 text-center max-w-[150px]">{item.subtitle}</p>
                                </div>
                                <div className='flex flex-col w-full  overflow-hidden'>
                                    <p className='text-justify md:text-base text-xs'>{item.des}</p>
                                    <div className='flex items-center gap-2 mt-4'>
                                        <ArrowBottomRight />
                                        <p className="text-stone-900 md:text-lg text-sm font-light ">{item.category}</p>
                                    </div>
                                    <div className='md:flex hidden lg:flex-row flex-col gap-5 lg:mt-auto mt-5'>
                                        <Link
                                            href={item.registrationLink}
                                            className='bg-red-600 text-white shadow text-center md:px-8 px-5 hover:px-12 duration-150 hover:rounded-md md:py-3 py-2  font-bold md:text-base text-sm lg:mt-8 lg:mb-0 lg:w-fit w-full'>PENDAFTARAN</Link>
                                        <Link
                                            href={item.guidebookLink}
                                            className='bg-white   border-2 border-red-600 text-center text-red-600 shadow md:px-8 px-5 hover:px-12 duration-150 hover:rounded-md md:py-3 py-2  font-bold md:text-base text-sm lg:mt-8 lg:mb-0 lg:w-fit w-full'>GUIDEBOOK</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex flex-col gap-3 mt-auto mb-8'>
                                <Link
                                    href={item.registrationLink} className='bg-red-600 text-white shadow md:px-8 px-5 hover:px-12 duration-150 hover:rounded-md md:py-3 py-2  font-bold md:text-base text-sm text-center w-full'>PENDAFTARAN</Link>
                                <Link
                                    href={item.guidebookLink} className='bg-white   border-2 border-red-600 text-red-600 shadow text-center w-full md:px-8 px-5 hover:px-12 duration-150 hover:rounded-md md:py-3 py-2  font-bold md:text-base text-sm '>GUIDEBOOK</Link>
                            </div>
                        </React.Fragment>
                    )
                }
            })}
        </section>
    );
}
