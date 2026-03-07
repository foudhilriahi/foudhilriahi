'use client';

import { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';

export default function SpaceshipCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trail = useRef<{ x: number; y: number; opacity: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      trail.current.unshift({
        x: e.clientX,
        y: e.clientY,
        opacity: 1
      });

      if (trail.current.length > 20) {
        trail.current.pop();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.forEach((point) => {
        point.opacity -= 0.05;

        if (point.opacity > 0) {
          const gradient = ctx.createRadialGradient(
            point.x,
            point.y,
            0,
            point.x,
            point.y,
            10
          );
          gradient.addColorStop(0, `rgba(139, 92, 246, ${point.opacity})`);
          gradient.addColorStop(1, `rgba(79, 70, 229, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      trail.current = trail.current.filter(point => point.opacity > 0);

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9999 }}
      />
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      >
        <Rocket className="w-6 h-6 text-purple-400 rotate-45" />
      </div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
