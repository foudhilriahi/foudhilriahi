'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Planet from './Planet';
import PlanetModal from './PlanetModal';
import Constellation from './Constellation';
import Starfield from './Starfield';
import SpaceStation from './SpaceStation';
import CosmicElements from './CosmicElements';
import HUD from './HUD';
import { projects, Project } from '@/data/projects';
import { skillConstellations } from '@/data/skills';

export default function GalaxyScene() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newScale = scale + (e.deltaY > 0 ? -0.1 : 0.1);
    setScale(Math.max(0.5, Math.min(1.5, newScale)));
  };

  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (document.body.style) {
        document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    document.addEventListener('mousemove', handleMouseMoveGlobal);
    return () => document.removeEventListener('mousemove', handleMouseMoveGlobal);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <Starfield />

      <motion.div
        className="absolute inset-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`
        }}
      >
        {Object.entries(skillConstellations).map(([key, constellation]) => (
          <Constellation
            key={key}
            name={constellation.name}
            skills={constellation.skills}
            color={constellation.color}
            scale={scale}
          />
        ))}

        {projects.map((project) => (
          <Planet
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
            scale={scale}
          />
        ))}

        <CosmicElements />
      </motion.div>

      <HUD />
      <SpaceStation />

      {selectedProject && (
        <PlanetModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
