'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootMessages = [
  'Initializing Developer Universe...',
  'Loading galaxies...',
  'Loading constellations...',
  'Spawning planets...',
  'System ready.'
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (currentMessage < bootMessages.length) {
      const timer = setTimeout(() => {
        setCurrentMessage(currentMessage + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowWelcome(true), 500);
    }
  }, [currentMessage]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center"
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-2xl w-full px-8">
          {!showWelcome ? (
            <div className="space-y-4">
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 1, repeat: Infinity }
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
              </div>

              {bootMessages.slice(0, currentMessage + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-400 font-mono text-sm"
                >
                  <span className="text-green-600">&gt;</span> {message}
                </motion.div>
              ))}

              <motion.div
                className="flex items-center gap-2 text-green-400 mt-8"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <div className="flex gap-1">
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <span className="font-mono text-xs">Loading...</span>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(79, 70, 229, 0.5)',
                    '0 0 40px rgba(79, 70, 229, 0.8)',
                    '0 0 20px rgba(79, 70, 229, 0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                Developer Galaxy
              </motion.h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Welcome to the Developer Universe of{' '}
                <span className="text-blue-400 font-bold">Foudhil Riahi</span>
              </p>

              <motion.button
                onClick={onComplete}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(79, 70, 229, 0.5)',
                    '0 0 40px rgba(79, 70, 229, 0.8)',
                    '0 0 20px rgba(79, 70, 229, 0.5)'
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
              >
                Enter the Galaxy
              </motion.button>

              <p className="text-gray-500 mt-6 text-sm font-mono">
                Click and drag to explore • Scroll to zoom
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
