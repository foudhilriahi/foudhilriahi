'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, Code } from 'lucide-react';

export default function HUD() {
  return (
    <motion.div
      className="fixed top-8 left-8 z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-6 min-w-[280px]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Foudhil Riahi</h3>
            <p className="text-gray-400 text-sm">Software Engineer</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Code className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs">Projects</p>
              <p className="text-white font-semibold">5 Planets</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs">Experience</p>
              <p className="text-white font-semibold">4 Galaxies</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-mono">System Online</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
