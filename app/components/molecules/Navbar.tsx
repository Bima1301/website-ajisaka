'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import MenuIcon from '../icons/MenuIcon'
import NavMobile from './NavMobile'
import { links } from '@/libs/data'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useIsMobile from '@/app/hooks/useIsMobile'
import Link from 'next/link'

export default function Navbar() {
    const [navMobileOpen, setNavMobileOpen] = useState(false)
    const [scroll, setScroll] = useState(false)
    const isMobile = useIsMobile();

    const pathName = usePathname();
    useEffect(() => {
        if (window.scrollY > 0) {
            setScroll(true);
        }
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.nav className={` xl:px-[100px] md:px-[80px] shadow px-4 w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between  md:py-4 py-3 transition-colors duration-300 bg-white `}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <Link href={'/'} className='flex flex-row items-center gap-3'>
                <Image
                    src='/images/logo.png'
                    width={isMobile ? 72 : 92}
                    height={50}
                    alt='Ajisaka UGM Logo'
                />
            </Link>
            <button className='lg:hidden flex text-stone-700'
                onClick={() => setNavMobileOpen(!navMobileOpen)}
            >
                <MenuIcon />
            </button>
            <div className='lg:flex hidden flex-row lg:gap-10 gap-12 items-center'>
                {links.map((link, index) => (
                    <Link key={index} href={link.href}
                        className={`cursor-pointer text-xl ${pathName == link.href ? "text-red-600 font-extrabold" : " font-light text-black hover:text-red-600"}  `}

                    >{link.name}</Link>
                ))}
            </div>
            <AnimatePresence>
                {navMobileOpen && (
                    <NavMobile
                        setNavMobileOpen={setNavMobileOpen}
                        navMobileOpen={navMobileOpen}
                    />
                )}
            </AnimatePresence>
        </motion.nav >
    )
}
