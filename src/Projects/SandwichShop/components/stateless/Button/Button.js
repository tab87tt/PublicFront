import React from "react";
import "./button.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

const styles = {
  button: {
    backgroundColor: "#FFAB2A",
    marginTop: "0.5vh",
    marginBottom: "0.5vh",
    borderRadius: 15,
    color: "#000000",
    height: "4vh",
    width: "15vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    cursor: "pointer",
  },
  hover: {
    scale: 1.07,
    boxShadow: "0px 0px 7px #FFFB96",
    color: "#FFFFFF",
  },
  tap: {
    scale: 0.95,
  },
};

const Button = ({ btnTitle, onClickHandler, itemProp, itemVal }) => {
  return (
    <motion.div
      style={styles.button}
      onClick={onClickHandler}
      whileHover={styles.hover}
      whileTap={styles.tap}
    >
      <AnimatePresence>
        {itemProp === itemVal && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0.9, 1, 0.9, 1, 0.9, 1, 0.9, 1],
              transition: { duration: 1.3 },
            }}
            exit={{ scale: 0 }}
          >
            <FontAwesomeIcon
              style={{ height: "2vh", width: "2vh", color: "green" }}
              icon={faCheck}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ fontSize: "1.5vh" }}>{btnTitle}</div>
    </motion.div>
  );
};

export default Button;
