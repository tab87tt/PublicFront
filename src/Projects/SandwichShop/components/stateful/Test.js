import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sandwichVariantB = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 3 } },
  exit: {
    opacity: 0,
    transition: { duration: 3 },
  },
};

const Test = () => {
  //each optional food component needs stats to hide/show change true to "none" to hide

  const [lettuce, setLettuce] = useState(true);

  setTimeout(() => {
    setLettuce(false);
  }, 4000);

  return (
    <motion.div
      className="container"
      variants={sandwichVariantB}
      initial="initial"
      animate="animate"
    >
      <AnimatePresence>
        {lettuce && <motion.h1 exit={{ opacity: 0 }}>Hello World!</motion.h1>}
      </AnimatePresence>
    </motion.div>
  );
};

export default Test;
