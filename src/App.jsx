import React from 'react';
import Hero from './components/Hero';
import MainInvite from './components/MainInvite';
import HaldiInvite from './components/HaldiInvite';
import PreWeddingInvite from './components/PreWeddingInvite';
import ReceptionInvite from './components/ReceptionInvite';

function App() {
  return (
    <div className="w-full h-[100svh] bg-[#fdf5eb] text-gray-800 font-sans relative overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Hero />
      <MainInvite />
      <HaldiInvite />
      {/* <PreWeddingInvite /> */}
      <ReceptionInvite />

      {/* Floating Audio/Music toggler placeholder */}
      <div className="fixed bottom-6 right-6 z-40 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-xl border border-saffron-light/50 animate-spin-slow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-8" /><path d="M10 10l2-2 2 2" /></svg>
      </div>
    </div>
  );
}

export default App;
