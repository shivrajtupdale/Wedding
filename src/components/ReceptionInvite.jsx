import React from 'react';
import { motion } from 'framer-motion';

const ReceptionInvite = () => {
  return (
    <section
      className="snap-center relative w-full h-[100svh] flex flex-col items-center justify-center overflow-hidden font-serif select-none px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/QRcodeBg.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 w-full max-w-[500px] md:max-w-xl flex flex-col items-center"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-6 md:mb-8 px-2"
        >
          <h2 className="text-[#706b78] text-[1.05rem] md:text-xl font-serif font-bold tracking-wide leading-[1.6]">
            With a gentle scan, find your way to where<br className="hidden md:block" /> two hearts unite and a new journey begins...
          </h2>
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center -mt-2 w-full px-4"
        >
          <img
            src="/assets/scanForWedLocationBackgroundRemover.png"
            alt="Save The Date QR Code"
            className="w-full max-w-[450px] md:max-w-[600px] h-auto object-contain drop-shadow-xl scale-110"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReceptionInvite;

