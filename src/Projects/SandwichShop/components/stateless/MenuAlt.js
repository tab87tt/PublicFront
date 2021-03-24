import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIngredientsAlt from "../stateless/MenuIngredientsAlt";

const MenuVariant = {
  initial: { position: "absolute", x: "-100vw", y: "1.5vh" },
  animate: {
    position: "absolute",
    x: "1vw",
    y: "1.5vh",
    transition: { duration: 0.7 },
  },
  exit: { x: "-100vw", transition: { duration: 2 } },
};

const MenuAlt = ({ showMenu, cartItemRemoveHandler, cartItemAddHandler }) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          variants={MenuVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            backgroundColor: "#fffb96",
            width: "24.5vw",
            height: "88.5vh",
            visibility: showMenu ? "visible" : "hidden",
            zIndex: 5,
            borderRadius: 10,
            borderStyle: "solid",
            borderColor: "#000000",
            borderWidth: 2,
            position: "fixed",
          }}
        >
          <div style={styles.optionsContainer}>
            <h2>Menu</h2>
            <h3>Hot Drinks</h3>
            <MenuIngredientsAlt
              name={"Tea"}
              item={"tea"}
              price={0.8}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Coffee"}
              item={"coffee"}
              price={0.9}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Hot Chocolate"}
              item={"hotChocolate"}
              price={1.0}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <h3>Cold Drinks</h3>
            <MenuIngredientsAlt
              name={"Coca Cola"}
              item={"cola"}
              price={0.7}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Sprite"}
              item={"sprite"}
              price={0.7}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Vimto"}
              item={"vimto"}
              price={0.7}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Water (500ml)"}
              item={"water1"}
              price={0.5}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Water (1L)"}
              item={"water2"}
              price={0.8}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <h3>Dessert</h3>
            <MenuIngredientsAlt
              name={"Flap Jack"}
              item={"flapJack"}
              price={0.75}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Choc. Brownie"}
              item={"brownie"}
              price={0.9}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
            <MenuIngredientsAlt
              name={"Tea Cake"}
              item={"teaCake"}
              price={0.5}
              cartItemAddHandler={cartItemAddHandler}
              cartItemRemoveHandler={cartItemRemoveHandler}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const styles = {
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "1.9vh",
  },
};

export default MenuAlt;
