import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            {/* Elegant glowing background element */}
            <motion.div
              className="absolute inset-0 w-32 h-32 rounded-full bg-rose-200/50 blur-[40px] m-auto"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.h1 
              className="font-display font-medium text-4xl sm:text-6xl text-gray-900 tracking-wider relative z-10"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              GABI NAILS
            </motion.h1>
            
            <motion.p
              className="font-body text-xs tracking-[0.4em] uppercase text-rose-500 mt-4 relative z-10"
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Nail Designer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
