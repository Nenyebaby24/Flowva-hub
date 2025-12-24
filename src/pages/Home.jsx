import React, { useState } from 'react';
import Hero from '../components/Hero';
import ToolIcons from '../components/ToolIcons';
import Stats from '../components/Stats';
import Everything from '../components/Everything';
import Download from '../components/Download';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import BrandsContent from '../components/BrandsContent';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  // This state controls the whole page toggle
  const [view, setView] = useState('users'); 

  return (
    <main>
      {/* IMPORTANT: Pass props here so Hero can click them */}
      <Hero view={view} setView={setView} />

      {view === 'users' ? (
        <>
        <ToolIcons />
        <Stats />
        <Everything />
        <Download />
        <Features />
        <Testimonials />
        <FAQ type="users" />
        <CTA />
        </>
      ) : (
        <>
          <BrandsContent /> 
          <FAQ type="brands" />
        </>
      )}
      
      <Footer view={view} />
    </main>
  );
}