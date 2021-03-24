import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CheckoutSandwiches from "../stateless/CheckoutSandwiches";

const CheckoutVariant = {
  initial: { position: "absolute", x: "+176.5vw", y: "1.5vh" },
  animate: {
    position: "absolute",
    x: "+61vw",
    y: "1.5vh",
    transition: { duration: 0.7 },
  },
  exit: { x: "+100vw", transition: { duration: 1.5 } },
};

const CheckoutAlt = ({
  showCheckout,
  madeSandwichArray,
  setMadeSandwichArray,
  addToCartTotal,
  setAddToCartTotal,
  menuState,
  setMenuState,
  namedCartItems,
  setConfirmed,
  height,
  width,
}) => {
  const [show, setShow] = useState(false);
  const [showHide, setShowHide] = useState(false);

  let totalCost = addToCartTotal.toFixed(2);

  const clearCheckoutHandler = () => {
    setAddToCartTotal(0.0);
    let menuStateCopy = { ...menuState };
    for (let item in menuStateCopy) {
      menuStateCopy = {
        ...menuStateCopy,
        [item]: {
          ...menuStateCopy[item],
          amount: (menuStateCopy[item].amount = 0),
        },
      };
    }
    setMenuState({ ...menuStateCopy });
    setMadeSandwichArray([]);
  };

  const confirmOrderHandler = () => {
    setTimeout(() => {
      setAddToCartTotal(0.0);
      let menuStateCopy = { ...menuState };
      for (let item in menuStateCopy) {
        menuStateCopy = {
          ...menuStateCopy,
          [item]: {
            ...menuStateCopy[item],
            amount: (menuStateCopy[item].amount = 0),
          },
        };
      }
      setMenuState({ ...menuStateCopy });
      setMadeSandwichArray([]);
      setConfirmed(false);
    }, 2500);
    setConfirmed(true);
  };

  let menuArray = [];
  let menuStateCopy2 = { ...menuState };

  for (let item in menuStateCopy2) {
    if (
      menuStateCopy2[item][`menuOption`] === true &&
      menuStateCopy2[item][`amount`] > 0
    ) {
      menuArray.push(
        <div
          key={item}
          style={{
            width: "29vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            {menuStateCopy2[item][`displayName`]} x
            {menuStateCopy2[item][`amount`]}
          </div>
          <div>
            £
            {(
              menuStateCopy2[item][`amount`] * menuStateCopy2[item][`price`]
            ).toFixed(2)}
          </div>
        </div>
      );
    }
  }

  return (
    <AnimatePresence>
      {showCheckout && (
        <>
          <motion.div
            variants={CheckoutVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              backgroundColor: "#fffb96",
              width: "37vw",
              height: "87.3vh",
              paddingBottom: 6,
              visibility: showCheckout ? "visible" : "hidden",
              zIndex: 5,
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "auto",
              fontSize: "1.9vh",
              overflowX: "hidden",
              borderStyle: "solid",
              borderColor: "#000000",
              borderWidth: 2,
              position: "fixed",
            }}
          >
            <h2>Checkout</h2>
            {totalCost > 0 && (
              <>
                <div>
                  <h3>Total: £{totalCost}</h3>
                </div>
              </>
            )}
            {madeSandwichArray.length > 0 && (
              <>
                <div>
                  <motion.div
                    style={styles.buttons}
                    whileHover={styles.hover}
                    whileTap={styles.tap}
                    onClick={() => {
                      setShow(!show);
                      setShowHide(!showHide);
                    }}
                  >
                    <div style={{ fontSize: "1.5vh", fontWeight: "bold" }}>
                      {showHide ? <>Hide</> : <>Show</>} Details
                    </div>
                  </motion.div>
                  <motion.div
                    style={styles.buttons}
                    whileHover={styles.hover}
                    whileTap={styles.tap}
                    onClick={clearCheckoutHandler}
                  >
                    <div style={{ fontSize: "1.5vh", fontWeight: "bold" }}>
                      Clear Checkout
                    </div>
                  </motion.div>
                  <motion.div
                    style={styles.buttons}
                    whileHover={styles.hover}
                    whileTap={styles.tap}
                    onClick={confirmOrderHandler}
                  >
                    <div style={{ fontSize: "1.5vh", fontWeight: "bold" }}>
                      Confirm Order
                    </div>
                  </motion.div>
                </div>
                <h3>Sandwiches</h3>
              </>
            )}
            {/* sandwich render */}
            <CheckoutSandwiches
              madeSandwichArray={madeSandwichArray}
              setMadeSandwichArray={setMadeSandwichArray}
              show={show}
              setShow={setShow}
              setAddToCartTotal={setAddToCartTotal}
              height={height}
              width={width}
            />
            {/* {console.log(namedCartItems)} */}
            {menuArray.length > 0 && (
              <div style={{ marginBottom: "0.5vw" }}>
                <h3 style={{ display: "flex", justifyContent: "center" }}>
                  Menu Items
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderStyle: "solid",
                    borderColor: "#000000",
                    borderRadius: 5,
                    borderWidth: "2px",
                    width: "30vw",
                    padding: 5,
                    fontSize: "1.5vh",
                    fontWeight: "bold",
                  }}
                >
                  {menuArray}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const styles = {
  container: {
    backgroundColor: "pink",
    width: 250,
  },
  buttons: {
    backgroundColor: "#FFAB2A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
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
    scale: 1.1,
    color: "#FFFFFF",
  },
  tap: {
    scale: 0.95,
  },
};

export default CheckoutAlt;
