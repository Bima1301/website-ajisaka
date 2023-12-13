import { links } from '@/libs/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InstagramIcon from '../icons/InstagramIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import XIcon from '../icons/XIcon'
import WhatsappIcon from '../icons/WhatsappIcon'

export default function Footer() {
    return (
        <section className='md:p-16 p-4 flex md:flex-row flex-col md:gap-0 gap-10 w-full justify-between'>
            <div className='flex flex-col md:max-w-[40%]'>
                <Image
                    src='/images/logo.png'
                    alt='Ajisaka UGM'
                    width={181}
                    height={150}
                    className='mb-5'
                />
                <p className='text-sm text-stone-900 leading-snug'>Ajisaka 2024, &apos;Samarthya Bhumi&apos; hadir untuk mendukung insan kreatif untuk berkontribusi pada edukasi dan inovasi dalam menyuarakan isu nature and wildlife conservation yang mengancam keseimbangan kehidupan manusia, satwa, dan puspa</p>
            </div>
            <div className='w-fit flex lg:flex-row md:flex-col flex-row justify-between md:gap-16 gap-5'>
                <div className='flex flex-col gap-4'>
                    <p className="text-stone-900 text-base font-semibold font-Jakarta">Quick Access</p>
                    <div className='grid grid-cols-2 gap-4'>
                        {links.map((item, index) => (
                            <Link href={item.href} key={index} className='hover:text-red-600'>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className="text-stone-900 text-base font-semibold font-Jakarta">Social Media</p>
                    <div className='flex flex-row gap-4'>
                        <Link href='https://www.instagram.com/ajisakaugm' target='_blank'>
                            <InstagramIcon />
                        </Link>
                        <Link href='https://www.youtube.com/@FestivalAjisakaUGM' target='_blank'>
                            <YoutubeIcon />
                        </Link>
                        <Link href='https://www.whatsapp.com' target='_blank'>
                            <WhatsappIcon />
                        </Link>
                        <Link href='https://www.twitter.com' target='_blank'>
                            <XIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
