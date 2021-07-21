export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const titleAnimation = {
  hidden: { opacity: 0, y: 500 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
    y: 0,
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const containerAnim = {
  hidden: { x: 50 },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
      staggerChildren: 0.25,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.7,
    },
    opacity: 1,
  },
};

export const fadeAbout = {
  hidden: { opacity: 0.5 },
  show: {
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
    opacity: 1,
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, ease: "easeOut" } },
};
