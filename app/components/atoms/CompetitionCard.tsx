'use client'
import Image from 'next/image'
import React from 'react'
import ArrowRigthBottom from '../icons/ArrowRigthBottom'
import Link from 'next/link';
import useIsMobile from '@/app/hooks/useIsMobile';

type CompetitionCardProps = {
    title: string;
    subtitle: string;
    category: string;
    icon: any;
    registrationLink: string;
    guidebookLink: string;
}

export default function CompetitionCard({ title, subtitle, category, icon, registrationLink, guidebookLink }: CompetitionCardProps) {
    const isMobile = useIsMobile();
    return (
        <div className='border-2 border-white flex flex-col '>
            <div className='flex flex-row w-full justify-between items-center gap-5 py-9 px-7'>
                <div className='flex flex-col'>
                    <p className="text-white md:text-3xl text-lg font-extrabold uppercase">{title}</p>
                    <p className="text-white md:text-xl text-sm font-normal">
                        {subtitle}
                    </p>
                </div>
                {icon ? (
                    <div>
                        <Image
                            src={icon}
                            width={isMobile ? 72 : 100}
                            height={isMobile ? 72 : 100}
                            alt='Sadewa'
                        />
                    </div>
                ) : (
                    <div className='w-[100px] aspect-square flex justify-center items-center bg-gray-600'>
                        <p className="text-neutral-400 text-lg font-light ">Logo</p>
                    </div>
                )}
            </div>
            <div className='bg-white py-9 px-7 flex flex-col w-full h-full justify-between'>
                <div>
                    <p className="text-stone-900 md:text-2xl font-semibold ">Kategori Lomba</p>
                    <div className='flex items-center gap-2 mb-16'>
                        <ArrowRigthBottom />
                        <p className="text-stone-900 md:text-lg text-sm font-light ">{category}</p>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <Link href={registrationLink} className='md:text-base text-sm bg-green-500 py-3 text-white text-center hover:bg-green-400 duration-150'>
                        Daftar Sekarang
                    </Link>
                    <Link href={guidebookLink} className='md:text-base text-sm  border-2 border-stone-300 py-3 text-stone-300 text-center hover:bg-gray-100 duration-150'>
                        Lihat Buku Panduan
                    </Link>
                </div>
            </div>
        </div>
    )
}
