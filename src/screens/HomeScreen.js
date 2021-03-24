//import LoadingScreen from "./LoadingScreen";
import Landing from "../components/Landing";
import NewMessage from "../components/newMessage";
import NewMessageMob from "../components/newMessageMob";
import Projects from "../components/Projects";
import ProjectsMob from "../components/ProjectsMob";
import PinkBorder from "../components/PinkBorder";
import AboutMe from "../components/AboutMe";
import AboutMeMob from "../components/AboutMeMob";
import Competencies from "../components/Competencies";
import ContactMe from "../components/ContactMe";
import ContactMeMob from "../components/ContactMeMob";

import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";

// const FramerPositionHook = () => {
//   const { scrollYProgress } = useViewportScroll();
//   const [hookedYPostion, setHookedYPosition] = useState(0);
//   useEffect(() => {
//     scrollYProgress.onChange((v) => setHookedYPosition(v));
//   }, [scrollYProgress, setHookedYPosition]);

//   return (
//     <>
//       scrollYProgress.current: {scrollYProgress.current}
//       <br />
//       scrollYProgress.hookedYPostion: {hookedYPostion}
//       <br />
//       {(document.body.clientHeight - window.innerHeight <= 0).toString()}
//     </>
//   );
// };

const HomeScreen = ({ height, width }) => {
  //scroll top on load

  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    window.scrollTo(0, -2);
    // containerRefHandler({behaviour: "smooth"});
  }, []);

  const aboutRefHandler = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const projectRefHandler = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const contactRefHandler = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //current scroll position
  const { scrollYProgress } = useViewportScroll();
  //scroll message in/out scroll position transform
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.018, 1],
    ["-102vw", "0vw", "0vw"]
  );
  const xOpacityAnim = useTransform(scrollYProgress, [0, 0.018], [0, 1]);
  //outer x & y transforms
  const xOuterAnim = useTransform(scrollYProgress, [0.03, 0.4], ["0vw", "0vh"]);
  const yOuterAnim = useTransform(scrollYProgress, [0.03, 0.4], ["0vw", "0vh"]);
  //mid x & y transforms
  const xMidAnim = useTransform(scrollYProgress, [0.03, 0.4], ["0vw", "0.2vh"]);
  const yMidAnim = useTransform(scrollYProgress, [0.03, 0.4], ["0vw", "2vh"]);
  //inner x & y transforms
  const xInnerAnim = useTransform(
    scrollYProgress,
    [0.03, 0.4],
    ["0vw", "0.3vh"]
  );
  const yInnerAnim = useTransform(
    scrollYProgress,
    [0.03, 0.4],
    ["0vw", "2.5vh"]
  );
  //container transform
  //inner x & y transforms
  const xContainerAnim = useTransform(
    scrollYProgress,
    [0.03, 0.2],
    ["0vw", "7vw"]
  );
  const yContainerAnim = useTransform(
    scrollYProgress,
    [0.03, 0.2],
    ["0vw", "35vh"]
  );
  const opacityContainerAnim = useTransform(
    scrollYProgress,
    [0.1, 0.17],
    [1, 0]
  );

  //alt height > width i.e. mobile
  //outer x & y transforms
  const xOuterAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "0vw"]
  );
  const yOuterAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "0vw"]
  );
  //mid x & y transforms
  const xMidAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "0.2vw"]
  );
  const yMidAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "2vw"]
  );
  //inner x & y transforms
  const xInnerAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "0.3vw"]
  );
  const yInnerAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "2.5vw"]
  );
  //container transform
  //inner x & y transforms
  const xContainerAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "5vw"]
  );
  const yContainerAnimAlt = useTransform(
    scrollYProgress,
    [0.35, 0.62],
    ["0vw", "50vw"]
  );
  const opacityContainerAnimAlt = useTransform(
    scrollYProgress,
    [0.38, 0.45],
    [1, 0]
  );

  //loading to main page render logic
  //const [loaded, setLoaded] = useState(true);
  const loaded = true;

  //initial load only
  // useEffect(()=>{
  //   setTimeout(()=>setLoaded(true), 4000)
  // }, []);
  //responsive breakpoints: pc: min 1024px, tablet: max 1023px, min 768px, phone: max 767px
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      style={{ boxSizing: "border-box", margin: 0, padding: 0, width: "100%" }}
    >
      {/* <AnimatePresence exitBeforeEnter>
                {!loaded && (
                    <LoadingScreen screenHeight={height} screenWidth={width}/>
                )}
            </AnimatePresence> */}
      <AnimatePresence>
        {loaded && (
          <motion.div>
            <div style={styles.appContainer}>
              <Landing
                aboutRefHandler={aboutRefHandler}
                projectRefHandler={projectRefHandler}
                contactRefHandler={contactRefHandler}
                screenHeight={height}
                screenWidth={width}
              />
            </div>
            {width >= 768 && (
              <div>
                <NewMessage
                  xPosAnim={xPosAnim}
                  xOpacityAnim={xOpacityAnim}
                  xOuterAnim={xOuterAnim}
                  yOuterAnim={yOuterAnim}
                  xMidAnim={xMidAnim}
                  yMidAnim={yMidAnim}
                  xInnerAnim={xInnerAnim}
                  yInnerAnim={yInnerAnim}
                  xContainerAnim={xContainerAnim}
                  yContainerAnim={yContainerAnim}
                  screenHeight={height}
                  screenWidth={width}
                  opacityContainerAnim={opacityContainerAnim}
                />
              </div>
            )}
            {width < 768 && (
              <div>
                <NewMessageMob
                  xPosAnim={xPosAnim}
                  xOpacityAnim={xOpacityAnim}
                  xOuterAnim={xOuterAnimAlt}
                  yOuterAnim={yOuterAnimAlt}
                  xMidAnim={xMidAnimAlt}
                  yMidAnim={yMidAnimAlt}
                  xInnerAnim={xInnerAnimAlt}
                  yInnerAnim={yInnerAnimAlt}
                  xContainerAnim={xContainerAnimAlt}
                  yContainerAnim={yContainerAnimAlt}
                  screenHeight={height}
                  screenWidth={width}
                  opacityContainerAnim={opacityContainerAnimAlt}
                />
              </div>
            )}
            <div>
              {width > 768 && (
                <Projects
                  reference={projectRef}
                  screenHeight={height}
                  screenWidth={width}
                />
              )}
              {width <= 768 && (
                <ProjectsMob
                  reference={projectRef}
                  screenHeight={height}
                  screenWidth={width}
                />
              )}
            </div>
            <div ref={aboutRef}>
              <PinkBorder screenHeight={height} screenWidth={width} />
            </div>
            <div>
              {width > 768 && <AboutMe />}
              {width <= 768 && <AboutMeMob />}
            </div>
            <div>
              <Competencies width={width} />
            </div>
            <div ref={contactRef}>
              {/* <FramerPositionHook/> */}
              {/* h: {height} w: {width} */}
              {width > 768 && <ContactMe />}
              {width <= 768 && <ContactMeMob />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HomeScreen;

const styles = {
  appContainer: {
    background: "#C7B599",
    height: "100vh",
    maxWidth: "100vw",
    overflow: "hidden",
  },
};
