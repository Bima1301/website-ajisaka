'use client'

import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/molecules/Navbar';
import Footer from '../components/organisms/Footer';
import Cta from '../components/organisms/Cta';
import Intro from './components/organisms/Intro';

export default function Competition() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <main className="bg-white w-full ">
            <Navbar />
            <Intro />
            <Cta />
            <Footer />
        </main>
    )
}
