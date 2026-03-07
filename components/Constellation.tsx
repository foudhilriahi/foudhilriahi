'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Skill } from '@/data/skills';

interface ConstellationProps {
  name: string;
  skills: Skill[];
  color: string;
  scale: number;
}

export default function Constellation({ name, skills, color, scale }: ConstellationProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" style={{ opacity: 0.4 }}>
        {skills.map((skill, index) => {
          if (index < skills.length - 1) {
            const nextSkill = skills[index + 1];
            return (
              <line
                key={`line-${index}`}
                x1={`${skill.x}%`}
                y1={`${skill.y}%`}
                x2={`${nextSkill.x}%`}
                y2={`${nextSkill.y}%`}
                stroke={color}
                strokeWidth="1"
                opacity="0.3"
              />
            );
          }
          return null;
        })}
      </svg>

      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="absolute pointer-events-auto cursor-pointer"
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          animate={{
            scale: hoveredSkill === skill.name ? 1.5 : 1,
            opacity: hoveredSkill === skill.name ? 1 : 0.7
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}80`
            }}
          />

          {hoveredSkill === skill.name && (
            <motion.div
              className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
            >
              <div className="bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                <p className="text-white text-xs font-medium">{skill.name}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
