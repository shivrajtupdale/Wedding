import React from 'react';
import { motion } from 'framer-motion';

const HaldiInvite = () => {
  return (
    <section 
      className="snap-center relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/haldi_bg.png')" }}
    >
      
      {/* Gentle background breathing effect */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-transparent pointer-events-none"
      ></motion.div>

      {/* Floating Marigold Flowers around the edges */}
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] left-[8%] text-5xl md:text-6xl drop-shadow-xl filter opacity-90 z-0">
        🌼
      </motion.div>
      <motion.div animate={{ y: [0, 15, 0], rotate: [0, -15, 15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[25%] right-[10%] text-4xl md:text-5xl drop-shadow-xl filter opacity-80 z-0 scale-x-[-1]">
        🌼
      </motion.div>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 20, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[25%] left-[10%] text-6xl md:text-7xl drop-shadow-2xl filter opacity-95 z-0">
        🌻
      </motion.div>
      <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[20%] right-[12%] text-5xl md:text-6xl drop-shadow-xl filter opacity-85 z-0">
        🌼
      </motion.div>

      {/* Main Container Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[340px] md:max-w-md text-center px-6 py-10 flex flex-col justify-center items-center bg-transparent -mt-24 md:-mt-32"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[2.8rem] md:text-6xl font-serif text-[#5c4021] font-bold mb-3 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)] flex items-center gap-2"
        >
          <span>Haldi</span>
          <span className="font-calligraphy italic text-4xl md:text-5xl leading-none translate-y-1 md:translate-y-2 text-[#d4af37]">&amp;</span> 
          <span>Mehendi</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl font-serif tracking-[0.2em] text-[#8c4b26] font-extrabold mb-4 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)] px-4 py-1"
        >
          8<sup className="text-sm font-bold">TH</sup> MAY 2026
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="space-y-2 mb-4 w-full px-4 py-3"
        >
          <p className="text-[#5c4021] font-serif tracking-widest text-[11px] md:text-[13px] font-bold uppercase drop-shadow-[0_2px_3px_rgba(255,255,255,0.9)]">
            Haldi: <span className="text-[#8c4b26]">11:00 AM Onwards</span>
          </p>
          <div className="w-16 h-[1px] bg-[#8c4b26]/30 mx-auto drop-shadow-sm"></div>
          <p className="text-[#5c4021] font-serif tracking-widest text-[11px] md:text-[13px] font-bold uppercase drop-shadow-[0_2px_3px_rgba(255,255,255,0.9)]">
            Mehendi: <span className="text-[#8c4b26]">5:30 PM Onwards</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="space-y-1 w-full"
        >
          <p className="text-[#8c4b26] font-serif tracking-widest text-xs md:text-sm font-extrabold uppercase drop-shadow-[0_2px_3px_rgba(255,255,255,0.9)]">
            Attire : Sunny Shades
          </p>
          <div className="uppercase w-full text-center leading-relaxed mt-2 pt-2 border-t border-[#8c4b26]/30 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            <p className="text-[10px] md:text-xs text-[#5c4021] font-bold tracking-widest">Venue: The Grand Mahal,</p>
            <p className="text-[10px] md:text-xs text-[#5c4021] font-bold tracking-widest">Kothrud, Pune</p>
          </div>
        </motion.div>

      </motion.div>
      
      {/* Magical sparkling ambient dust */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, Math.random() * -150 - 50], 
            x: [0, Math.random() * 80 - 40], 
            opacity: [0, 0.9, 0],
            scale: [0, Math.random() * 1.5 + 0.5, 0]
          }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ffd700] filter blur-[2px] opacity-80"
          style={{ top: `${80 + Math.random() * 20}%`, left: `${Math.random() * 100}%` }}
        />
      ))}
      
    </section>
  );
};

export default HaldiInvite;
