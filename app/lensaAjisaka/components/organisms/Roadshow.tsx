import { ajisakaLens } from '@/libs/data'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Roadshow() {
    return (
        <section className='bg-white   flex  flex-col xl:gap-14 gap-5 relative overflow-hidden'>
            <div className='w-full  md:px-16 px-4'>
                <p className="text-red-600 md:text-5xl text-2xl font-black  md:mt-16 mt-6 w-full border-b-2 pb-5 border-b-black"
                    data-aos="fade-up"
                >Roadshow
                </p>
            </div>
            <Marquee
                direction='right'
                pauseOnClick
                className='flex flex-row gap-9'
            >
                <div className='flex flex-row gap-9'>
                    {ajisakaLens.map((item, index) => {
                        return (
                            <div key={index} className='relative md:w-[600px] md:h-[400px] w-[300px] h-[200px]'>
                                <Image
                                    src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoNCg0NCAoPBwcHDQ0HBwcHDQ8ICQcNFREWFiAREx8YHSggGCYlJxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQMAwgMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAbEAEBAQEBAQEBAAAAAAAAAAAAAQIREgNhE//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDrxhtnC8YbZwDPOGucNM4aZwDPOWmcLmWmcgiZOYa+FZyDKYVMtfImQZeT8NeDgMfBeW/C4DDwVw38l5Bz3CLh03KbkHLco1l1XKNZByawz1h16yz1gHF9MOfeHoaww1gHH4J0eQDvxlrnJ5y2zkE5jXMOZaZyCZlcyqRfARIrMVIfALg4fBwC4OHw+AnhcVwcBnwcWOAz4m5aWFYDG5RrLosRrIObURrLpuWesg5dZY6y7NZY7yDl8Bv4AOzOWucjOWmcgJlpMiRcgFIfDhwCkOQ5DkAuDiuDgJ4FDgJ4S+FwE8LigCOFYtNBFibGlibAZ2I1GtibAYayy3l06jLUBz+Q14AdectJkSKkARUEipAEOQcOAJDEPgEFcAJCgCQogSOGATU1omwEWJXU0EVNaWJsBnYz1G1RqAw8hrwgdUioJDkARcKGB8OQQ4AkPghyAXBw+HwCLiuDgJ4OHwcBPC4ogTwKTYCanjRNBFibF1NBFiLGliKCOAwDphwoqAIqA4Bw4UOAcOCGAAAAAAAACSWkElVFQTSqqVBFTV6TQRWda1noEgwDeKhRQHFFDA4cKKgGIIYAAACMAQMgAAAqk6QJpVVTQKoq6mghOl1FBIMA2ikRcA4uIigUcI4BwyhgAAAAIDIAAAATSOkBVNVSoJTVJoJqKuooEAAaxcRFSgpSTBZxKoBgADBGAIAAAAABdAqRkBUqdSBJqqmgmoq6igQABpFZqIqAuK6mGCpVSoh9BXTlTFQDAAAAAAC6A6QAEAQCpOkBVFVU0E1OqdqaBAAFyqiJVQF5quoipQVDhSnAVDlT05QV0dT05QUXR0gPpAAQBACFIBS6dSBWpp1NAqiqtRaBAADlaSsJWmaDWU5WfVSg0lOVEpyguHEyn0FGno6CugujoGRdAH0ul0AKCK0Bam0WlaBWptPqaBWotO1GqB9JPQAzWua5s1rmg3lVGUqpQaQ+olVKCpTlTADSU+s4roKCejoKHU9ID6OpIFdK0i6B2p6LUWgfU2i1NoFajVO1lvQK6GXSAsVtnTkxprnQOqaXNOfOmuaDaU5WcqpQa9HUdOUFK6joBfR1ABfS6SegroT0dA02laVoHam0rU3QHam1OtI1oD1plvQ1pjvQL9Bj6MGeNNc7ceNtc7B2Z21ztyZ20mwdU2vO3LNtM7B1TR9c820mgayn6ZTZ+gaeh6R0dBfoup6XoFdLqfSboF3SbpF0m6Bd0m6RdJ1oFXTLWhrTHWwVrbHexrTHegV7DH2AYY+jbP0ebj6OjH0B6Gdtc7cOPo1zsHbna87cmd/rSaB152ubck2ubB1TSptyzapsHT6Hpz+x7B0ex6c/sewbe0+mPsvYNrpF2zu0XYNbpGtMrtOtgvW2WtIu2WvoC97YfT6I+n0c/wBPoDf+hOT+n6YMMV0fOgA3xW2KADTNbZABcqwAVKuUgCujpAD6OkATaXTAJtRaACLUboAMdVlukAY/Sub6UAGfQAD/2Q=='}
                                    alt={item.alt}
                                    priority
                                    fill
                                    className='object-cover'
                                    sizes='(max-width: 768px) 100vw, 600px'

                                />
                            </div>
                        )
                    })}
                </div>
            </Marquee>
        </section>
    )
}
