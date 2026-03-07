'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface PlanetProps {
  project: Project;
  onClick: () => void;
  scale: number;
}

export default function Planet({ project, onClick, scale }: PlanetProps) {
  return (
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: `${project.positionX}%`,
        top: `${project.positionY}%`,
        transform: 'translate(-50%, -50%)'
      }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: project.size * scale, height: project.size * scale }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          style={{
            backgroundColor: project.color,
            filter: 'blur(20px)'
          }}
        />

        <div
          className="relative w-full h-full rounded-full border-2 border-opacity-30 shadow-2xl"
          style={{
            backgroundColor: project.color,
            borderColor: project.color,
            boxShadow: `0 0 30px ${project.color}40, inset 0 0 20px rgba(255,255,255,0.1)`
          }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 50%)`
            }}
          />
        </div>

        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <p className="text-white text-xs font-medium">{project.name}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
