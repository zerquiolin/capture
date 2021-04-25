export const pageAnimation = {
  before: {
    opacity: 0,
    y: 300,
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.35,
    },
  },
};

export const titleAnimation = {
  before: { y: 205 },
  after: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const fadeAnimation = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const imageAnimation = {
  before: {
    scale: 1.5,
    opacity: 0,
  },
  after: {
    scale: 1,
    opacity: 0.7,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const lineAnimation = {
  before: { width: "0%" },
  after: { width: "100%", transition: { duration: 1 } },
};

export const workSliderAnimation = {
  before: { x: "-130%", skew: "45deg" },
  after: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const workSliderContainerAnimation = {
  before: { opacity: 1 },
  after: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const scrollAnimation = {
  before: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  after: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
