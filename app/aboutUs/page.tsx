'use client'
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/molecules/Navbar';
import Footer from '../components/organisms/Footer';
import Intro from './components/organisms/Intro';
import Video from './components/organisms/Video';
import AjisakaValue from './components/organisms/AjisakaValue';
import Journey from './components/organisms/Journey';
import Team from './components/organisms/Team';
import Cta from '../components/organisms/Cta';

export default function AboutUs() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <main className="bg-white w-full ">
            <Navbar />
            <Intro />
            <Video />
            <AjisakaValue />
            <Journey />
            <Team />
            <Cta />
            <Footer />
        </main>
    )
}
