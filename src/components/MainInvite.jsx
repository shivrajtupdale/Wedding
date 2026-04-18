import React from 'react';
import { motion } from 'framer-motion';

const Divider = () => (
  <div className="w-[70%] max-w-[240px] flex justify-center items-center my-1 md:my-2 mx-auto opacity-80">
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-red-900"></div>
    <div className="mx-2 text-red-900 flex items-center justify-center drop-shadow-sm">
      <svg width="40" height="12" viewBox="0 0 40 12" fill="currentColor">
        <path d="M20,6 C25,12 35,-2 40,6 C35,14 25,0 20,6 C15,12 5,-2 0,6 C5,14 15,0 20,6 Z" />
        <circle cx="20" cy="6" r="2" fill="currentColor" />
      </svg>
    </div>
    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-red-900"></div>
  </div>
);

const DateBlock = () => (
  <div className="flex flex-col items-center mt-1 z-10 font-serif text-red-900 w-full max-w-[280px]">
    <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-0 drop-shadow-sm">MAY</span>

    <div className="flex items-center justify-between w-full border-t border-b border-red-900/30 py-1.5 relative my-1">
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] w-[35%] text-right pr-2 uppercase">SATURDAY</span>
      <span className="text-[3rem] md:text-[4rem] font-medium leading-none drop-shadow-md mx-2 w-[40%] text-center">09</span>
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] w-[35%] text-left pl-2 uppercase">2026</span>
    </div>

    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] mt-0 md:mt-1 drop-shadow-sm uppercase">AT 10:00 AM</span>
  </div>
);

const MainInvite = () => {
  return (
    <section
      className="snap-center relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden font-serif select-none px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/main invite bg.png')" }}
    >

      {/* Inner Central Text Area - Carefully spaced to perfectly sit in the middle of the graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 w-full max-w-[360px] md:max-w-md flex flex-col items-center mt-[5vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          {/* Om Symbol */}
          <span className="text-red-900 text-3xl md:text-4xl font-bold mb-0 drop-shadow-sm opacity-90 -mt-12 md:-mt-16">ॐ</span>

          <p className="text-red-900 text-sm md:text-base font-serif italic tracking-wide text-center px-4 leading-[1.6] opacity-90 font-medium drop-shadow-sm mb-0">
            You are invited to the <br /> wedding of
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          <Divider />

          {/* Names */}
          <div className="flex flex-col items-center w-full my-0 text-center text-red-900">
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-wide drop-shadow-sm">
              Shivraj
            </h1>
            <span className="text-2xl md:text-3xl font-serif italic opacity-70 my-0">
              &amp;
            </span>
            <h1 className="text-[2.2rem] md:text-[3rem] font-bold tracking-wide drop-shadow-sm">
              Shruti
            </h1>
          </div>

          <Divider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-full flex justify-center"
        >
          <DateBlock />
        </motion.div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-2 md:mt-3 px-4 w-full flex flex-col items-center text-center"
        >
          <p className="text-[10px] md:text-[12px] text-red-900 font-bold leading-[1.8] tracking-widest font-sans drop-shadow-sm opacity-90 uppercase">
            The Grand Mahal, Kothrud,<br />Pune, Maharashtra - 411038
          </p>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default MainInvite;
