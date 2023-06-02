export const aboutTextAnimation = {
  hidden: {
    y: -500,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const aboutImageAnimation = {
  hidden: {
    scale: 0,
  },
  visible: (custom) => ({
    scale: 1,
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.5, 1],
      delay: custom * 0.2,
    },
  }),
};

export const firstScreenTextAnimation = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    },
  }),
};

export const firstScreenStackAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    },
  }),
};

export const firstScreenImageAnimation = {
  hidden: {
    x: 30,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      bounce: 0.6,
      duration: 0.8,
    },
  }),
};
