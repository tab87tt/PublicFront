import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

//animation control
const cogVariant = {
  newInitial: {
    opacity: 0,
    bottom: "20%",
    rotate: 0,
  },
  newAnimate: {
    opacity: 1,
    bottom: "20%",
    rotate: 3600,
    transition: {
      rotate: {
        repeat: Infinity,
        repeatType: "loop",
        type: "tween",
        duration: 12,
        ease: "linear",
      },
      opacity: {
        duration: 1.5,
      },
    },
  },
  exit: {
    bottom: "50%",
    opacity: 0,
    transition: {
      bottom: {
        duration: 2,
      },
      opacity: {
        duration: 0.4,
        delay: 0.5,
      },
    },
  },
};

const LoadingScreen = ({ width }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div style={styles.container}>
        <div>
          <motion.svg
            style={{ width: width < 768 ? "160vw" : "70vw" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            width="100%"
            height="100%"
            viewBox="0 0 1346 817"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              id="radial gradient"
              width="1346"
              height="817"
              fill="url(#paint0_radial)"
              fillOpacity="0.48"
            />
            <g id="Logo [Pink variant - opacity shadow]">
              <path
                id="Vector 8"
                d="M758.5 232H509L572.5 294.5H822L758.5 232Z"
                fill="#FF6CA5"
              />
              <path
                id="Vector 3"
                d="M822 421V294.5H760.5V357.5L822 421Z"
                fill="url(#paint1_linear)"
              />
              <path
                id="Vector 4"
                d="M760.5 357.5H697.5L760 421H822L760.5 357.5Z"
                fill="url(#paint2_linear)"
              />
              <g id="Vector 5">
                <path
                  d="M698 483.5L697.5 357.5L760 421V545.5L698 483.5Z"
                  fill="#FA3663"
                />
                <path
                  d="M698 483.5L697.5 357.5L760 421V545.5L698 483.5Z"
                  fill="url(#paint3_linear)"
                />
              </g>
              <path
                id="Vector 6"
                d="M635 546L760 545.5L698 483.5H572L635 546Z"
                fill="url(#paint4_linear)"
              />
              <path
                id="Vector 7"
                d="M572 358.5V483.5H633V358.5H572Z"
                fill="url(#paint5_linear)"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(673 408.5) rotate(90) scale(408.5 673)"
              >
                <stop stopColor="#1C1C1C" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="paint1_linear"
                x1="822"
                y1="349"
                x2="753"
                y2="349"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA3663" />
                <stop offset="1" stopColor="#FA3663" stopOpacity="0.09" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="745.5"
                y1="426"
                x2="760"
                y2="357"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6CA5" />
                <stop offset="1" stopColor="#FF6CA5" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient
                id="paint3_linear"
                x1="760"
                y1="447.5"
                x2="697"
                y2="447"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA3663" />
                <stop offset="1" stopColor="#FA3663" stopOpacity="0.21" />
              </linearGradient>
              <linearGradient
                id="paint4_linear"
                x1="672.5"
                y1="515"
                x2="719.5"
                y2="394.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6CA5" />
                <stop offset="1" stopColor="#FF6CA5" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear"
                x1="602"
                y1="410.5"
                x2="602"
                y2="483"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA3663" />
                <stop offset="1" stopColor="#FA3663" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
        <motion.div
          style={{ position: "absolute", bottom: "20%" }}
          variants={cogVariant}
          initial="newInitial"
          animate="newAnimate"
          exit="exit"
        >
          <FontAwesomeIcon
            style={{
              height: 27,
              width: 27,
              color: "#f9f9f9",
            }}
            icon={faCog}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoadingScreen;

const styles = {
  container: {
    backgroundColor: "#000000",
    height: "100vh",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
};
