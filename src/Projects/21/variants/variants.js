//Wrestling Ring Variants
export const crowdVariant1 = {
  animate: {
    y: "0.2vh",
    x: ["-0.1vh", "0vh", "0.1vh"],
    transition: { yoyo: Infinity, duration: 2 },
  },
};
export const crowdVariant2 = {
  animate: {
    y: "0.3vh",
    x: ["-0.1vh", "0vh", "0.1vh"],
    transition: { yoyo: Infinity, duration: 2 },
  },
};
export const crowdVariant3 = {
  animate: {
    y: "0.4vh",
    x: ["-0.1vh", "0vh", "0.1vh"],
    transition: { yoyo: Infinity, duration: 1.7 },
  },
};

export const starsVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 2.5, yoyo: Infinity, duration: 2 },
  },
};

export const lightStripVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 2 },
  },
};

export const lightRotateVariant1 = {
  initial: {
    rotate: 26,
    originX: 0.05,
    originY: 0,
  },
  animate: {
    rotate: 0,
    originX: 0.05,
    originY: 0,
    transition: { duration: 3 },
  },
};
export const lightRotateVariant2 = {
  initial: {
    rotate: -26,
    originX: 0.95,
    originY: 0,
  },
  animate: {
    rotate: 0,
    originX: 0.95,
    originY: 0,
    transition: { duration: 3 },
  },
};

//Bomb Variants
//wiggle on tap animations for p1 and p2
export const bombWiggleStart = {
  rotate: 0,
  y: "0vh",
  originX: 0.5,
  originY: 0.75,
  transition: { duration: 0.7 },
};
export const bombWiggle = {
  rotate: [0, 12, -7, 0],
  originX: 0.5,
  originY: 0.75,
  transition: { delay: 0.65, duration: 0.7 },
};
export const bombWiggleStart2 = {
  rotate: 0,
  y: "0vh",
  originX: 0.5,
  originY: 0.75,
  transition: { duration: 0.7 },
};
export const bombWiggle2 = {
  rotate: [0, -15, 4, 0],
  originX: 0.5,
  originY: 0.75,
  transition: { delay: 0.4, duration: 0.7 },
};

export const bombFlashVariant1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0,
    transition: { duration: 1, yoyo: Infinity },
  },
};

export const bombFlashVariant2 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.6,
    transition: { duration: 2, yoyo: Infinity },
  },
};

export const bombFlashVariant3 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.6,
    transition: { duration: 1.3, yoyo: Infinity },
  },
};

export const bombFlashVariant4 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0.6,
    transition: { duration: 0.5, yoyo: Infinity },
  },
};

//fuse variants
export const bombFuseVariant1 = {
  x: ["-0.5vh", "0.5vh"],
  y: ["-0.3vh", "0.1vh"],
  scale: 1.1,
  transition: { duration: 0.5, yoyo: Infinity },
};
export const bombFuseVariant2 = {
  x: ["-3vh", "-2.8vh"],
  y: ["1.8vh", "1.6vh"],
  scale: 1.1,
  transition: { duration: 0.5, yoyo: Infinity },
};
export const bombFuseVariant3 = {
  x: ["-4.5vh", "-4.3vh"],
  y: ["3vh", "2.8vh"],
  scale: 1.1,
  transition: { duration: 0.5, yoyo: Infinity },
};

//bomb entry
export const bP1 = {
  y: "3vh",
  x: "-18vh",
  transition: { type: "spring", delay: 3.5, damping: 15 },
};

//p1 to p2 position
//origin x 0.5, origin y 0.75, transition 1.3
export const bP2 = {
  y: ["3vh", "-18vh", "3vh"],
  x: ["-18vh", "3vh"],
  originX: 0.65,
  originY: 0.75,
  rotate: [0, 720],
  transition: { duration: 1.3 },
};
export const bP2c = {
  y: ["3vh", "-18vh", "3vh"],
  x: ["-18vh", "3vh"],
  originX: 0.65,
  originY: 0.75,
  rotate: [0, 720],
  transition: { delay: 1, duration: 1.3 },
};

//p2 to p1 position
export const bP3 = {
  y: ["3vh", "-17vh", "3vh"],
  x: ["3vh", "-18vh"],
  originX: 0.65,
  originY: 0.75,
  rotate: [720, 0],
  transition: { duration: 1.3 },
};
export const bP3c = {
  y: ["3vh", "-17vh", "3vh"],
  x: ["3vh", "-18vh"],
  originX: 0.65,
  originY: 0.75,
  rotate: [720, 0],
  transition: { delay: 1, duration: 1.3 },
};

//P1Character variants
export const leftWingVariant = {
  initial: {
    rotate: 0,
    originX: 0.95,
    originY: 0.5,
    x: "0.1vh",
  },
  animate: {
    rotate: -30,
    originX: 0.95,
    originY: 0.5,
    x: "0.1vh",
    transition: { yoyo: Infinity },
  },
};
export const rightWingVariant = {
  initial: {
    rotate: 0,
    originX: 0.05,
    originY: 0.5,
    x: "0.1vh",
  },
  animate: {
    rotate: 30,
    originX: 0.05,
    originY: 0.6,
    x: "0.1vh",
    transition: { yoyo: Infinity },
  },
};
export const eyebrows = {
  animate: {
    y: "-0.4vh",
    transition: { yoyo: Infinity },
  },
};
export const eyes1 = {
  animate: {
    x: ["-0.1vh", "-0.1vh", "0.3vh", "0.3vh"],
    transition: { times: [0.1, 0.3, 0.4, 1], duration: 2, yoyo: Infinity },
  },
};
export const leftLegStart = {
  rotate: 0,
  originX: 0.5,
  originY: 0,
};
export const leftLeg = {
  rotate: [-85, 0],
  originX: 0.5,
  originY: 0,
  transition: { delay: 0.5, duration: 1.5 },
};
export const rightLegStart = {
  rotate: 0,
  originX: 0,
  originY: 0.5,
};
export const rightLeg = {
  rotate: [50, 0],
  originX: 0,
  originY: 0.5,
  transition: { delay: 0.5, duration: 1.5 },
};
export const float = {
  y: "0vh",
  x: "0vh",
};
export const bombKick = {
  x: ["0vh", "-5vh", "4.5vh", "4vh", "4.5vh", "0vh"],
  y: ["0vh", "-10vh", "7.5vh", "5.5vh", "7.5vh", "0vh"],
  transition: { times: [0, 0.4, 0.55, 0.8, 0.85, 1], duration: 1.3 },
};

//P2 Character Variants
export const eyes2 = {
  animate: {
    x: ["-0.3vh", "-0.3vh", "-0.8vh", "-0.8vh"],
    transition: { times: [0.1, 0.2, 0.3, 1], duration: 3.5, yoyo: Infinity },
  },
};
export const tail = {
  initial: {
    rotate: 0,
    originX: 0,
    originY: 0,
  },
  animate: {
    rotate: -20,
    originX: 0,
    originY: 0,
    transition: { yoyo: Infinity, duration: 2 },
  },
};
export const rightEar = {
  initial: {
    rotate: 0,
    originX: 0,
    originY: 0,
  },
  animate: {
    rotate: [-20, 30],
    originX: 0,
    originY: 0,
    transition: { yoyo: Infinity, duration: 3.5 },
  },
};
export const leftEar = {
  initial: {
    rotate: 0,
    originX: 1,
    originY: 1,
  },
  animate: {
    rotate: [20, -20],
    originX: 1,
    originY: 1,
    transition: { yoyo: Infinity, duration: 3.5 },
  },
};
export const bombKickStart2 = {
  rotate: 0,
  originX: 0.8,
  originY: 0.2,
};
export const bombKick2 = {
  rotate: [0, -115, 50, 0],
  originX: 0.8,
  originY: 0.2,
  transition: { times: [0, 0.6, 0.8, 1], duration: 0.7 },
};
export const startPosition = {
  y: "0.vh",
  x: "0vh",
};
export const bombKickPosition = {
  x: ["0vh", "-9vh", "-9vh", "-8vh", "-8vh", "-6vh", "0vh"],
  y: ["0vh", "0vh", "-5vh", "0vh", "0vh", "-3.5vh", "0vh"],
  transition: { times: [0, 0.3, 0.35, 0.4, 0.8, 0.85, 1], duration: 1.5 },
};
export const handsStart = {
  rotate: 0,
  originX: 1,
  originY: 0,
};
export const handsMove = {
  rotate: [0, -40, 0, -20, 0],
  originX: 1,
  originY: 0,
  transition: { duration: 1.5 },
};

//explosion variants
export const explosion = {
  initial: {
    scale: 1,
    x: "-20vh",
    y: "37.5vh",
  },
  animate: {
    scale: [1, 0.9],
    opacity: [1, 1, 0],
    transition: {
      scale: { yoyo: Infinity, duration: 0.3 },
      opacity: { times: [0, 0.95, 1], duration: 2 },
    },
  },
};
export const explosion2 = {
  initial: {
    scale: 1,
    y: "15vh",
    x: "18.5vh",
  },
  animate: {
    scale: [1, 0.9],
    opacity: [1, 1, 0],
    transition: {
      scale: { yoyo: Infinity, duration: 0.3 },
      opacity: { times: [0, 0.95, 1], duration: 2 },
    },
  },
};
export const remains = {
  initial: {
    y: "48vh",
    x: "-23vh",
    opacity: 0,
  },
  animate: {
    y: "48vh",
    x: "-23vh",
    opacity: [0, 0, 1],
    transition: {
      opacity: { duration: 2, times: [0, 0.98, 1] },
    },
  },
};
export const remains2 = {
  initial: {
    x: "25vh",
    y: "48.9vh",
    opacity: 0,
  },
  animate: {
    x: "25vh",
    y: "48.9vh",
    opacity: [0, 0, 1],
    transition: {
      opacity: { duration: 2, times: [0, 0.98, 1] },
    },
  },
};
export const smoke = {
  animate: {
    x: [-2, 2],
    transition: { duration: 2, yoyo: Infinity },
  },
};
