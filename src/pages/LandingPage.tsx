import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhoIsItFor } from '../components/WhyChooseUs';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Statistics } from '../components/Statistics';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <WhoIsItFor />
        <Features />
        {/* <HowItWorks /> */}
        {/* <Statistics /> */}
        <CTA />
      </main>
      <Footer />
    </div>);

}