'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootSequence from '@/components/BootSequence';
import GalaxyScene from '@/components/GalaxyScene';
import SpaceshipCursor from '@/components/SpaceshipCursor';

export default function Home() {
  const [showGalaxy, setShowGalaxy] = useState(false);

  return (
    <main className="w-full h-screen overflow-hidden bg-slate-950">
      <AnimatePresence mode="wait">
        {!showGalaxy ? (
          <BootSequence key="boot" onComplete={() => setShowGalaxy(true)} />
        ) : (
          <>
            <GalaxyScene key="galaxy" />
            <SpaceshipCursor />
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
