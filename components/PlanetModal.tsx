'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Code, Sparkles } from 'lucide-react';
import { Project } from '@/data/projects';

interface PlanetModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function PlanetModal({ project, onClose }: PlanetModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        <motion.div
          className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute top-0 left-0 right-0 h-32 opacity-30"
            style={{
              background: `linear-gradient(180deg, ${project.color}40 0%, transparent 100%)`
            }}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative p-8">
            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-full flex-shrink-0 shadow-lg"
                style={{
                  backgroundColor: project.color,
                  boxShadow: `0 0 30px ${project.color}60`
                }}
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Technology Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Key Features</h3>
              </div>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-colors border border-white/20"
              >
                <Github className="w-5 h-5 text-white" />
                <span className="text-white font-medium">View on GitHub</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
