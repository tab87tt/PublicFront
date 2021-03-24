import React from "react";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const MenuIngredients = ({
  name,
  item,
  price,
  cartItemAddHandler,
  cartItemRemoveHandler,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "34vw",
        marginBottom: "2vh",
        height: "2vh",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ fontWeight: 500, fontSize: "1.5vh" }}>{name}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: 12 }}>
        <motion.div whileTap={{ scale: 0.85 }}>
          <FontAwesomeIcon
            onClick={() => {
              cartItemRemoveHandler(`${item}`);
            }}
            style={{
              height: "2.5vh",
              width: "2.5vh",
              color: "red",
              cursor: "pointer",
              paddingRight: "0.5vw",
              paddingBottom: "1vh",
            }}
            icon={faMinusCircle}
          />
        </motion.div>
        <div style={{ paddingRight: 5, fontWeight: 500, fontSize: "1.5vh" }}>
          £{price.toFixed(2)}
        </div>
        <motion.div whileTap={{ scale: 0.85 }}>
          <FontAwesomeIcon
            onClick={() => {
              cartItemAddHandler(`${item}`);
            }}
            style={{
              height: "2.5vh",
              width: "2.5vh",
              color: "red",
              cursor: "pointer",
              paddingBottom: "1vh",
            }}
            icon={faPlusCircle}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MenuIngredients;
