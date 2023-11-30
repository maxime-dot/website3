export const artView = {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0,
  },
};

export const articleCardAnimation = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const testimonialCardAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const titleAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const serviceCardAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const serviceCardImageAnimation = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};
