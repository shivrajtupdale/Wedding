import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gate = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Frosted glass background to tease the invitation underneath */}
          <motion.div 
            className="absolute inset-0 bg-[#fdf5eb]/60 backdrop-blur-md"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />

          {/* Left Ribbon Band */}
          <motion.div 
            className="absolute left-0 w-1/2 h-12 md:h-16 bg-gradient-to-b from-[#7f1d1d] via-[#dc2626] to-[#450a0a] shadow-[0_10px_20px_rgba(0,0,0,0.5)] origin-bottom-left z-20 border-y border-red-400"
            initial={{ rotateZ: 0, y: 0 }}
            animate={isOpen ? { rotateZ: -45, y: '100vh', opacity: 0 } : { rotateZ: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ top: 'calc(50% - 24px)' }} // roughly half of h-12
          >
            {/* Satin shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 w-[200%] animate-[shimmer_3s_infinite]"></div>
          </motion.div>

          {/* Right Ribbon Band */}
          <motion.div 
            className="absolute right-0 w-1/2 h-12 md:h-16 bg-gradient-to-b from-[#7f1d1d] via-[#dc2626] to-[#450a0a] shadow-[0_10px_20px_rgba(0,0,0,0.5)] origin-bottom-right z-10 border-y border-red-400"
            initial={{ rotateZ: 0, y: 0 }}
            animate={isOpen ? { rotateZ: 45, y: '100vh', opacity: 0 } : { rotateZ: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ top: 'calc(50% - 24px)' }}
          >
            {/* Satin shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 w-[200%] animate-[shimmer_3s_infinite]"></div>
          </motion.div>

          {/* Center Bow / Cut Button */}
          <motion.button
            onClick={handleOpen}
            className="relative z-30 cursor-pointer focus:outline-none group flex flex-col items-center justify-center"
            animate={isOpen ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Glowing effect behind bow */}
            <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"></div>

            {/* The Bow SVG */}
            <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="satin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#991b1b" />
                    <stop offset="50%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#450a0a" />
                  </linearGradient>
                  <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#713f12" />
                  </linearGradient>
                </defs>
                
                {/* Left Bow Loop */}
                <path d="M50 50 C10 10, -10 40, 15 70 C15 70, 30 80, 50 50 Z" fill="url(#satin)" stroke="url(#gold)" strokeWidth="1.5" />
                
                {/* Right Bow Loop */}
                <path d="M50 50 C90 10, 110 40, 85 70 C85 70, 70 80, 50 50 Z" fill="url(#satin)" stroke="url(#gold)" strokeWidth="1.5" />
                
                {/* Left Ribbon Tail */}
                <path d="M50 50 C40 70, 20 85, 20 95 L40 95 C40 80, 45 70, 50 50 Z" fill="url(#satin)" />
                
                {/* Right Ribbon Tail */}
                <path d="M50 50 C60 70, 80 85, 80 95 L60 95 C60 80, 55 70, 50 50 Z" fill="url(#satin)" />

                {/* Golden Center Knot / Medallion */}
                <circle cx="50" cy="50" r="14" fill="url(#gold)" stroke="#713f12" strokeWidth="2" className="drop-shadow-lg" />
                
                {/* S & S text inside medallion */}
                <text x="50" y="53" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#450a0a" textAnchor="middle" className="drop-shadow-sm">
                  S&S
                </text>
              </svg>
            </div>
            
            <p className="absolute -bottom-6 text-[10px] md:text-sm font-sans uppercase tracking-[0.3em] font-black animate-pulse text-red-900 bg-white/80 px-4 py-1 rounded-full shadow-md backdrop-blur-sm border border-red-200">
              Tap to Cut Ribbon
            </p>
          </motion.button>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Gate;
