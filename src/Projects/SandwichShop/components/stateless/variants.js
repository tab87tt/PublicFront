//variant logic for each sandwich combination

//reset variant positions
export const origPositionVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};
export const origPositionVariant2 = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    y: 5,
  },
};

//on initial plate entry
export const plateDownVariant = {
  initial: { y: "-100vh" },
  animate: {
    y: "0vh",
    transition: { duration: 2, type: "spring", damping: 16.1 },
  },
  exit: { opacity: 0 },
};
//attachable to bread top
export const breadDownVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    y: "3.5vh",
    x: "0.3vw",
    transition: { duration: 0.5 },
  },
};

//lettuce animation
export const lettDownVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    y: "1.5vh",
    x: "-1vw",
    transition: { duration: 1 },
  },
};

//cheese animations
export const cheDownVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    y: "2.5vh",
    x: "0vw",
    transition: { duration: 0.5 },
  },
};
export const cheDownVariant2 = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    y: "2.45vh",
    x: "0vw",
    transition: { duration: 0.5 },
  },
};

//meat animation
export const meatDownVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    y: "1.75vh",
    x: "1.5vw",
    transition: { duration: 1 },
  },
};

//tomato animation
export const tomDownVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    y: "1.28vh",
    x: "-0.6vw",
    transition: { duration: 1 },
  },
};

//variant logic for each stage of the sandwich build
export const sandwichBuildVariant = {
  initial: { x: "-100vw", height: 0 },
  animate: {
    x: 0,
    height: 300,
    transition: {
      type: "spring",
      ease: "easeInOut",
      damping: 15,
      delay: 0.8,
      duration: 0.8,
    },
  },
  exit: {
    x: "+100vw",
    transition: {
      type: "spring",
      ease: "easeInOut",
      damping: 15,
      duration: 0.8,
    },
  },
};
