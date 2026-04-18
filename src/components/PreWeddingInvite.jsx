import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { time: "09:00 AM", event: "Haldi & Kunku" },
  { time: "01:00 PM", event: "Traditional Lunch" },
  { time: "04:00 PM", event: "Mehendi Function" },
  { time: "06:00 PM", event: "Sangeet Ceremony" },
  { time: "08:30 PM", event: "Cocktail & Dinner" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

const PreWeddingInvite = () => {
  return (
    <section className="snap-center relative w-full h-[100svh] bg-[#fef5f0] p-4 md:p-8 flex items-center justify-center overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#e8d5cc] outline outline-offset-8 outline-[#e8d5cc]/30 p-2 overflow-hidden block"
      >
        <div className="bg-[#fef5f0]/30 border border-[#e8d5cc]/60 rounded-2xl h-full p-6 md:p-10 flex flex-col justify-between">
          
          <div className="text-center mb-6">
            <motion.h2 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="text-4xl md:text-5xl font-serif text-[#9e432c] font-black italic tracking-tighter"
            >
              Pre-Wedding
            </motion.h2>
            <h2 className="text-3xl md:text-4xl font-serif text-[#d39b82] font-semibold italic mt-1">
              Celebrations
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex-grow flex flex-col justify-center px-4 md:px-8 relative"
          >
            {/* Animated timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '80%' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-6 md:left-10 top-[10%] w-0.5 bg-gradient-to-b from-[#b55c45] via-[#d39b82] to-transparent rounded-full"
            />
            
            <div className="space-y-6 md:space-y-8 relative z-10 w-full">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={childVariants}
                  className="flex items-center group cursor-default pl-4 md:pl-8"
                >
                  {/* Glowing dot */}
                  <div className="absolute left-[-2px] w-3 h-3 bg-[#fef5f0] border-2 border-[#b55c45] rounded-full group-hover:bg-[#b55c45] group-hover:shadow-[0_0_15px_rgba(181,92,69,0.8)] transition-all duration-300 transform group-hover:scale-150"></div>
                  
                  <div className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white group-hover:border-[#e8d5cc] shadow-sm flex-1 group-hover:shadow-md transition-all duration-300 w-full group-hover:translate-x-2">
                    <p className="text-lg md:text-xl font-bold text-[#b55c45] tracking-wide">{item.time}</p>
                    <p className="text-base md:text-lg font-serif italic text-[#8c4c3b] font-medium">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-6 p-4 bg-[#b55c45]/5 rounded-xl border border-[#b55c45]/10"
          >
            <p className="uppercase tracking-[0.2em] text-[#9e432c] font-black text-sm">The Grand Mahal</p>
            <p className="uppercase tracking-widest text-[#d39b82] font-semibold text-xs mt-1">MAY 08, 2026</p>
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default PreWeddingInvite;
