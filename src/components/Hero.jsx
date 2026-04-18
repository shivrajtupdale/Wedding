import React from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

const Hero = () => {
  const weddingDate = new Date('2026-05-09T12:23:00');

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-2xl font-serif text-white drop-shadow-lg animate-bounce">The Celebration Begins!</span>;
    } else {
      return (
        <div className="flex space-x-3 md:space-x-8 text-red-dark drop-shadow-sm">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Mins', value: minutes },
            { label: 'Secs', value: seconds }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="bg-red-50/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-2 md:p-3 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center mb-1 md:mb-2 shadow-lg relative overflow-hidden group">
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="text-xl md:text-3xl font-bold font-serif text-red-dark relative z-10">{item.value}</span>
              </div>
              <span className="text-[10px] md:text-sm uppercase tracking-widest font-bold opacity-90 text-red-900">{item.label}</span>
            </motion.div>
          ))}
        </div>
      );
    }
  };

  // Falling Petals Animation Elements
  const petals = Array.from({ length: 15 });

  return (
    <section className="snap-center relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-[#fdf5eb]">

      {/* Falling Petals Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {petals.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-3 h-3 md:w-4 md:h-4 bg-red-500/60 blur-[1px]"
            initial={{
              top: '-10%',
              left: `${Math.random() * 100}%`,
              opacity: Math.random() + 0.5,
              rotate: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              top: '120%',
              rotate: 360,
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{
              borderRadius: '50% 0 50% 50%', // petal shape
            }}
          />
        ))}
      </div>

      {/* Background portrait */}
      <motion.div
        className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: "url('/assets/wed_hero.jpeg')" }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content wrapper */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-30 w-full text-center px-4 flex flex-col items-center -mt-20 md:-mt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-saffron-dark text-sm md:text-xl font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 block drop-shadow-md">
            We Are Getting Married
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-calligraphy text-red-dark mb-4 md:mb-6 drop-shadow-xl hover:scale-105 transition-all duration-700 ease-out cursor-pointer">
            Shivraj <span className="text-saffron-dark inline-block animate-pulse">&amp;</span> Shruti
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center space-x-2 md:space-x-4 mb-6 md:mb-10 overflow-hidden"
        >
          <div className="h-0.5 w-12 md:w-16 bg-gradient-to-l from-red-dark to-transparent"></div>
          <p className="text-lg md:text-2xl font-serif text-red-dark tracking-widest font-bold">
            MAY 9, 2026
          </p>
          <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-red-dark to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-4 md:mt-8"
        >
          <Countdown date={weddingDate} renderer={renderer} />
        </motion.div>

        {/* Swipe Up Indicator */}
        <motion.div
          className="absolute -bottom-32 md:-bottom-48 flex flex-col items-center"
          animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest text-red-900 font-bold mb-2">Swipe Up</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7f1d1d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
