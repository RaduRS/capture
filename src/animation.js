export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.1,
    },
  },
};

export const titleAnimation = {
  hidden: { opacity: 0, y: 500 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" }, y: 0 },
};

export const photoAnim = {
  hidden: { scale: 0.5, opacity: 0 },
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
  hidden: { opacity: 0.5 },
  show: {
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
    opacity: 1,
  },
};
