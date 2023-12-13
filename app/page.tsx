'use client'

import Navbar from './components/molecules/Navbar'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Timeline from './components/organisms/Timeline';
import Competition from './components/organisms/Competition';
import AjisakaLens from './components/organisms/AjisakaLens';
import Cta from './components/organisms/Cta';
import MediaPartner from './components/organisms/MediaPartner';
import Footer from './components/organisms/Footer';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="bg-white w-full ">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Competition />
      <AjisakaLens />
      <Cta />
      <MediaPartner />
      <Footer />
    </main>
  )
}
