'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '@/utils/constants';

export default function SpaceStation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-8 z-40 cursor-pointer"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          <motion.div
            className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl"
            animate={{
              boxShadow: [
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
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse" />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative w-full max-w-md bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/20 to-transparent" />

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="relative p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-4">
                    <p className="text-green-400 text-sm font-mono">
                      [DOCKING SUCCESSFUL]
                    </p>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Space Station Contact
                  </h2>
                  <p className="text-gray-400">
                    Communication channel with the developer is now available.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium truncate">{CONTACT.email}</p>
                    </div>
                  </a>

                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <p className="text-white font-medium truncate">foudhilriahi</p>
                    </div>
                  </a>

                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <p className="text-white font-medium truncate">riahifoudhil</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">{CONTACT.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium">{CONTACT.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
