import React, { useState, useEffect } from "react";

const Competencies = ({ width }) => {
  const [text, setText] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    if (width > 1024) {
      //pc
      setText("1.9vw");
      setHeight("50vw");
    } else if (width < 1023 && width > 768) {
      //tablet
      setText("1.9vw");
      setHeight("50vw");
    } else {
      //mobile
      setText("2.8vw");
      setHeight("64vw");
    }
  });

  return (
    <div
      style={{
        height: height,
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FC3663",
        flexDirection: "column",
        padding: "2vw 0vw 2vw 0vw",
      }}
    >
      <div style={{ padding: "10vw" }}>
        <div style={{ color: "white", fontWeight: "bold", fontSize: text }}>
          COMPETENCIES
        </div>
        <div style={styles.textContainer}>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontWeight: "bold",
              marginTop: "1vw",
              fontSize: text,
            }}
          >
            BACK END:
            <div
              style={{ color: "white", fontWeight: "normal", fontSize: text }}
            >
              NodeJS, Express, MongoDB, Mongoose, Python, Linux BASH, RESTful
              API, Cloud Server Hosting
            </div>
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontWeight: "bold",
              marginTop: "1vw",
              fontSize: text,
            }}
          >
            FRONT END:
            <div
              style={{ color: "white", fontWeight: "normal", fontSize: text }}
            >
              Javascript ES6, React, React Native, Redux, HTML 5, CSS 3, JSON,
              JSX
            </div>
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontWeight: "bold",
              marginTop: "1vw",
              fontSize: text,
            }}
          >
            SOFT SKILLS:
            <div
              style={{ color: "white", fontWeight: "normal", fontSize: text }}
            >
              Problem Solving, Organisation, Collaboration, Leadership, Public
              Speaking, Clarity of Expression
            </div>
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontWeight: "bold",
              marginTop: "1vw",
              fontSize: text,
            }}
          >
            OTHER:
            <div
              style={{ color: "white", fontWeight: "normal", fontSize: text }}
            >
              GitHub, Photoshop, Figma, ShotCut
            </div>
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontWeight: "bold",
              marginTop: "1vw",
              fontSize: text,
            }}
          >
            LEARNING:
            <div
              style={{ color: "white", fontWeight: "normal", fontSize: text }}
            >
              Docker, Kubernetes, Data Structures and Algorithms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competencies;

const styles = {
  container: {
    height: "55vw",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC3663",
    flexDirection: "column",
    padding: "2vw 0vw 2vw 0vw",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.9vw",
  },
  text: {
    color: "white",
    fontWeight: "normal",
    fontSize: "1.9vw",
  },
  heading: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontWeight: "bold",
    marginTop: "1vw",
    fontSize: "1.9vw",
  },
  textContainer: {
    marginTop: "4vw",
    textAlign: "left",
  },
};
