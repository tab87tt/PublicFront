import React, { useState } from "react";
import { motion } from "framer-motion";
//import image from "../images/Test Image.jpg";
import { Link } from "react-router-dom";

const ProjectCards = ({ screenWidth, screenHeight, linkTo, title, image }) => {
  const [opacity, setOpacity] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  //make project pages

  return (
    <div style={styles.container}>
      <motion.div
        whileHover={{
          transition: { type: "tween" },
          height: "26vw",
          width: "35vw",
          top: 0,
        }}
        style={styles.imageContainer}
      >
        {/* set onClick to image container and link to project details page */}
        <Link to={linkTo}>
          <img style={styles.image} src={image} alt="project_image" />
          <div
            onMouseEnter={() => {
              setOpacity(1);
              setShowTitle(false);
            }}
            onMouseLeave={() => {
              setOpacity(0);
              setShowTitle(true);
            }}
            style={{
              opacity: opacity,
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              transition: "0.5s ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.75)",
              zIndex: 2,
              borderRadius: 10,
            }}
          >
            <div
              style={{
                borderRadius: 5,
                padding: "3px 5px",
                fontWeight: "bold",
                color: "#05C99C",
                fontSize: screenWidth > screenHeight ? "2.5vh" : "2vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              More Details
            </div>
          </div>
        </Link>
      </motion.div>
      {showTitle && <div style={styles.titleContainer}>{title}</div>}
    </div>
  );
};

export default ProjectCards;

const styles = {
  container: {
    height: "26vw",
    width: "35vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FA3665",
    margin: "2vw",
    position: "relative",
    boxShadow: "4px 3px 15px gray",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    zIndex: -1,
  },
  imageContainer: {
    height: "18vw",
    width: "30vw",
    borderRadius: 10,
    position: "absolute",
    top: "2.5vw",
    cursor: "pointer",
  },
  titleContainer: {
    position: "absolute",
    top: "20vw",
    fontSize: "3.8vw",
    color: "white",
    marginTop: "0.5vw",
  },
  button: {
    borderRadius: 5,
    padding: "3px 5px",
    fontWeight: "bold",
    color: "#05C99C",
    width: "8vw",
    flex: 1,
    fontSize: "16",
  },
};
