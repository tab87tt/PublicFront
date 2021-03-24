import React from "react";
import { motion } from "framer-motion";
import "../../../Game.css";

const styles = {
  container: {
    boxSizing: "border-box",
    position: "absolute",
    backgroundColor: "#FFEEC5",
    height: "21vh",
    width: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "4.3vh",
    top: "34.5vh",
    borderRadius: "2vh",
    boxShadow: "0.3vh 0.3vh 1vh #000000",
    zIndex: 10,
    borderStyle: "solid",
    borderWidth: "0.2vh",
  },
  winnerText: {
    textShadow:
      "0.12vh 0.12vh #000000, -0.12vh 0.12vh #000000, 0.12vh -0.12vh #000000, -0.12vh -0.12vh #000000",
    fontSize: "4.6vh",
    color: "#CE1010",
    userSelect: "none",
  },
  button: {
    backgroundColor: "#FE998D",
    color: "#000000",
    width: "15vh",
    height: "6vh",
    borderRadius: "2vh",
    cursor: "pointer",
    fontSize: "4vh",
    position: "absolute",
    top: "13.5vh",
    userSelect: "none",
  },
};

export const ComputerP2Wins = ({
  setScreen,
  setCount,
  setPlayer1,
  setPlayer2,
  setTurnSwap,
}) => {
  const onClickHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
        className="retryPage"
        style={styles.container}
      >
        <p style={styles.winnerText}>Computer Wins!</p>
        <motion.div
          initial={{ color: "#000000" }}
          whileHover={{
            scale: 1.02,
            color: "#ffffff",
            boxShadow: "0.3vh 0.3vh 0.52vh #000000",
            textShadow: "0.2vh 0.2vh 0.2vh #000000",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onClickHandler}
          style={styles.button}
        >
          Retry
        </motion.div>
      </motion.div>
    </>
  );
};

export default ComputerP2Wins;
