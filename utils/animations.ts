export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const glowAnimation = {
  boxShadow: [
    '0 0 20px rgba(79, 70, 229, 0.3)',
    '0 0 40px rgba(79, 70, 229, 0.6)',
    '0 0 20px rgba(79, 70, 229, 0.3)'
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

export const rotateAnimation = {
  rotate: 360,
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'linear'
  }
};
