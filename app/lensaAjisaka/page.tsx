'use client'

import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/molecules/Navbar';
import Footer from '../components/organisms/Footer';
import Cta from '../components/organisms/Cta';
import Intro from './components/organisms/Intro';
import Janamejaya from './components/organisms/Janamejaya';
import Roadshow from './components/organisms/Roadshow';
import Candradimuka from './components/organisms/Candradimuka';

export default function LensaAjisaka() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <main className="bg-white w-full ">
            <Navbar />
            <Intro />
            <Janamejaya />
            <Roadshow />
            <Candradimuka />
            <Cta />
            <Footer />
        </main>
    )
}
