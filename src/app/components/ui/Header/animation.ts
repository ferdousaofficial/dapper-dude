export const menuAnimation = {
  initial: { height: "0" },
  enter: {
    height: "100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1],  delay: 0},
  },
  exit: {
    height: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.8},
  },
};

export const menuItemAnimation = {
  initial: { y: -1000 },
  enter: (i: number) => ({
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    y: 1000,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const menuBtnsAnimation = {
  initial: { x: -200 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 400,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
