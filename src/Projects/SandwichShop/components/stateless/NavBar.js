import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import SalsSarnieName from "../stateless/SalsSarnieName";

const NavBar = ({
  setShowMenu,
  setShowCheckout,
  cycle,
  rotate,
  addToCartTotal,
  width,
  height,
}) => {
  const menuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  const checkoutHandler = () => {
    setShowCheckout((prev) => !prev);
  };

  return (
    <div style={styles.navContainer}>
      {/* menu */}
      <div onClick={menuHandler}>
        <motion.div
          animate={rotate}
          onTap={() => cycle()}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "3.5vh",
            height: "3.5vh",
            cursor: "pointer",
            marginLeft: width > 768 ? "1vw" : "3vw",
          }}
        >
          <FontAwesomeIcon
            style={{
              height: "3.5vh",
              width: "3.5vh",
              color: "red",
              marginTop: 18,
            }}
            icon={faChevronCircleDown}
          />
        </motion.div>
        <motion.p
          onTap={() => cycle()}
          style={{ paddingLeft: 12, cursor: "pointer" }}
        ></motion.p>
      </div>
      <div style={{ paddingLeft: addToCartTotal > 0 ? 39 : 0 }}>
        <SalsSarnieName
          width={width}
          height={height}
          scale={0.8}
          addToCartTotal={addToCartTotal}
        />
      </div>
      {/* checkout and total */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          paddingRight: "10px",
        }}
        onClick={checkoutHandler}
      >
        <div>
          {addToCartTotal > 0 && (
            <p style={{ fontWeight: "bold" }}>£{addToCartTotal.toFixed(2)}</p>
          )}
        </div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon
            style={{
              height: "3.5vh",
              width: "3.5vh",
              color: "red",
              cursor: "pointer",
              paddingRight: "10px",
              paddingLeft: "10px",
            }}
            icon={faShoppingBasket}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;

const styles = {
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "8vh",
    width: "100vw",
    backgroundColor: "#fffb96",
    borderStyle: "solid",
    borderWidth: 2,
    overflow: "hidden",
  },
};
