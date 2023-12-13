"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { links } from '@/libs/data'
import TimesIcon from '../icons/TimesIcon'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavMobileProps = {
    navMobileOpen: boolean;
    setNavMobileOpen: (value: boolean) => void;
}

export default function NavMobile(
    {
        navMobileOpen,
        setNavMobileOpen
    }: NavMobileProps
) {

    const menuMotion = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.4,
                duration: 0.3,
                ease: [0.12, 0, 0.39, 1],
            },
        },
    }

    const menuItemsMotion = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.3,
                ease: [0.37, 0, 0.63, 1],
            }
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.5,
            }
        }
    }

    const containerMotion = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            }
        },
        open: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.09,
                staggerDirection: 1,
            }
        }
    }
    const pathName = usePathname();
    return (
        <motion.div
            variants={menuMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed origin-top top-0 left-0 right-0 bottom-0 bg-white z-50 w-full shadow-lg" style={{ height: "fit-content" }}>
            <div className='flex justify-end items-center bg-white mt-10 px-10 '>
                <button onClick={() => setNavMobileOpen(!navMobileOpen)}>
                    <TimesIcon className='text-stone-700' />
                </button>
            </div>
            <div className='flex h-full flex-col'>
                <motion.ul
                    variants={containerMotion}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col gap-2 px-10 pb-10">
                    {links.map((link: any, index: number) => (
                        <div className='overflow-hidden py-2' key={index}>
                            <motion.li
                                variants={menuItemsMotion}
                                key={index}>
                                <Link href={link.href}
                                    onClick={() => setNavMobileOpen(false)}
                                    className={`${pathName == link.href ? "text-red-600" : "text-zinc-800 hover:text-gray-300"} text-lg font-semibold`}                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        </div>
                    ))}
                </motion.ul>
            </div>
        </motion.div>
    )
}
