import "./Game.css";
import Controller from "./stateful/Controller";
import { motion } from "framer-motion";

function Game() {
  return (
    <motion.div exit={{ opacity: 0 }} className="Game">
      <Controller />
    </motion.div>
  );
}

export default Game;
