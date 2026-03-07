'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Coffee, Bug, Satellite } from 'lucide-react';

interface CosmicElement {
  id: string;
  icon: any;
  message: string;
  x: number;
  y: number;
  color: string;
}

const elements: CosmicElement[] = [
  {
    id: 'coffee',
    icon: Coffee,
    message: '[INFO] Compiling coffee...',
    x: 85,
    y: 40,
    color: '#F59E0B'
  },
  {
    id: 'bug',
    icon: Bug,
    message: '[WARNING] Semicolon missing',
    x: 12,
    y: 55,
    color: '#EF4444'
  },
  {
    id: 'satellite',
    icon: Satellite,
    message: '[ERROR] Recruiter asked for 10 years experience',
    x: 90,
    y: 85,
    color: '#3B82F6'
  }
];

export default function CosmicElements() {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  return (
    <>
      {elements.map((element) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={element.id}
            className="absolute cursor-pointer z-30"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`
            }}
            onClick={() => setActiveElement(element.id)}
            whileHover={{ scale: 1.2, rotate: 360 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border-2 shadow-lg"
              style={{
                borderColor: element.color,
                boxShadow: `0 0 20px ${element.color}60`
              }}
            >
              <Icon className="w-6 h-6" style={{ color: element.color }} />
            </div>

            {activeElement === element.id && (
              <motion.div
                className="absolute top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onAnimationComplete={() => {
                  setTimeout(() => setActiveElement(null), 2000);
                }}
              >
                <div className="bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  <p className="text-white text-sm font-mono">{element.message}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </>
  );
}
