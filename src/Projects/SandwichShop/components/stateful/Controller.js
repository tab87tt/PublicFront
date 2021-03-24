import React, { useState } from "react";

import Sandwich from "./Sandwich";
import SandwichOptions from "./SandwichOptions";
import NavBar from "../stateless/NavBar";
import Checkout from "./Checkout";
import CheckoutAlt from "./CheckoutAlt";
import Menu from "../stateless/Menu";
import MenuAlt from "../stateless/MenuAlt";
import MenuOptions from "../stateless/MenuOptions";
import EntryPage from "../stateless/EntryPage";

import { motion, AnimatePresence, useCycle } from "framer-motion";

const Controller = ({ width, height }) => {
  //entry page show logic
  const [open, setOpen] = useState(true);

  //Stateful logic passed in as props to Sandwich
  //each optional food component to toggle hide/show
  //set as external props

  const [olive, setOlive] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [lettuce, setLettuce] = useState(false);
  const [tomato, setTomato] = useState(false);
  const [meat, setMeat] = useState(false);
  const plate = true;
  const [breadTop, setBreadTop] = useState(false);
  const [breadBot, setBreadBot] = useState(false);

  //per sandwich cost logic
  const [cost, setCost] = useState(0);

  //order confirmed logic
  const [confirmed, setConfirmed] = useState(false);

  //set bread/meat logic
  const [breadTopType, setBreadTopType] = useState("");
  const [breadLSideType, setBreadLSideType] = useState("#CC7A29");
  const [breadRSideType, setBreadRSideType] = useState("#E6A145");
  const [meatMainType, setMeatMainType] = useState("");
  const [meatShadowType, setMeatShadowType] = useState("#E65C73");
  const [selectToast, setSelectToast] = useState(false);

  //checkout and sandwich options shared sandwich array logic
  const [madeSandwichArray, setMadeSandwichArray] = useState([]);

  //nav bar controls
  const [showMenu, setShowMenu] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [rotate, cycle] = useCycle(
    {
      rotate: 0,
      originX: 0.5,
      originY: 0.87,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
    {
      rotate: 630,
      originX: 0.5,
      originY: 0.87,
      transition: { duration: 0.85, ease: "easeInOut" },
    }
  );

  //menu/checkout logic
  const [addToCartTotal, setAddToCartTotal] = useState(0);
  const [namedCartItems, setNamedCartItems] = useState([]);
  const [menuState, setMenuState] = useState({ ...MenuOptions });

  const cartItemAddHandler = (itemObj) => {
    const checkAdded = namedCartItems.includes(itemObj);

    if (checkAdded === true) {
      setMenuState({
        ...menuState,
        [itemObj]: {
          ...menuState[itemObj],
          amount: menuState[itemObj].amount + 1,
        },
      });
    } else {
      setNamedCartItems([...namedCartItems, itemObj]);
      setMenuState({
        ...menuState,
        [itemObj]: {
          ...menuState[itemObj],
          amount: menuState[itemObj].amount + 1,
        },
      });
    }
    setAddToCartTotal((prev) => prev + menuState[itemObj].price);
  };

  const cartItemRemoveHandler = (itemObj) => {
    const checkAdded = namedCartItems.includes(itemObj);
    if (checkAdded === true) {
      let cartItems = namedCartItems.slice();
      let updateCart = cartItems.filter((item) => {
        return item !== itemObj;
      });
      setNamedCartItems([...updateCart]);
    }

    if (menuState[itemObj].amount > 0) {
      setMenuState({
        ...menuState,
        [itemObj]: {
          ...menuState[itemObj],
          amount: menuState[itemObj].amount - 1,
        },
      });
      setAddToCartTotal((prev) => prev - menuState[itemObj].price);
    }
  };

  const openHandler = () => {
    setOpen(true);
  };

  const optionsProp = {
    bread: {
      breadTop: breadTop,
      setBreadTop: setBreadTop,
      breadBot: breadBot,
      setBreadBot: setBreadBot,
      breadTopType: breadTopType,
      setBreadTopType: setBreadTopType,
      breadLSideType: breadLSideType,
      setBreadLSideType: setBreadLSideType,
      breadRSideType: breadRSideType,
      setBreadRSideType: setBreadRSideType,
    },
    meat: {
      setMeat: setMeat,
      meat: meat,
      meatMainType: meatMainType,
      setMeatMainType: setMeatMainType,
      meatShadowType: meatShadowType,
      setMeatShadowType: setMeatShadowType,
    },
    ingredients: {
      setLettuce: setLettuce,
      lettuce: lettuce,
      setCheese: setCheese,
      cheese: cheese,
      setOlive: setOlive,
      olive: olive,
      setTomato: setTomato,
      tomato: tomato,
    },
  };

  //short circuit switch control logic inside return.
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Order complete modal and reset */}
      <AnimatePresence>
        {confirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                zIndex: 600,
                position: "fixed",
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                style={{
                  backgroundColor: "#ffeff9",
                  color: "#920024",
                  height: width > 768 ? "20vh" : "14vh",
                  width: "45vw",
                  borderRadius: 15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: width > 768 ? "2em" : "1.25em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Order Complete...
                  <br />
                  <div style={{ width: 8 }}></div>Thank You!
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        {/* Entry/Welcome page logic */}
        {open === false && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
            style={{
              height: "100vh",
              width: "100vw",
              position: "fixed",
              zIndex: 500,
              background: "orange",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EntryPage />
            <motion.div
              whileHover={{
                scale: 1.05,
                color: "yellow",
                transition: { yoyo: Infinity, duration: 1 },
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "orange",
                paddingVertical: 12,
                paddingHorizontal: 20,
                marginTop: 10,
                marginBottom: 10,
                borderRadius: 15,
                color: "#000000",
                height: 50,
                width: 200,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                top: -200,
                boxShadow: "5px 5px 7px #3D3C42",
                borderStyle: "solid",
                borderColor: "#000000",
                borderWidth: 3,
              }}
              onClick={openHandler}
            >
              <h3
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                Welcome!
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Main Page */}
      {open === true && (
        <div style={{ position: "fixed" }}>
          <NavBar
            cycle={cycle}
            rotate={rotate}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            showCheckout={showCheckout}
            setShowCheckout={setShowCheckout}
            addToCartTotal={addToCartTotal}
            width={width}
            height={height}
          />
          {/* Menu container and logic */}
          {width <= 768 && (
            <Menu
              showMenu={showMenu}
              cartItemRemoveHandler={cartItemRemoveHandler}
              cartItemAddHandler={cartItemAddHandler}
              menuState={menuState}
              addToCartTotal={addToCartTotal}
              namedCartItems={namedCartItems}
            />
          )}
          {width > 768 && (
            <MenuAlt
              showMenu={showMenu}
              cartItemRemoveHandler={cartItemRemoveHandler}
              cartItemAddHandler={cartItemAddHandler}
              menuState={menuState}
              addToCartTotal={addToCartTotal}
              namedCartItems={namedCartItems}
            />
          )}
          {/* main container [menu, sand, sand options, checkout] minus nav */}
          <div
            style={{
              height: "80vh",
              width: "100vw",
              position: "fixed",
              fontFamily: "Open Sans",
              fontStyle: "normal",
              display: "flex",
              backgroundColor: "#ffeff9",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.5%",
              paddingBottom: 100,
              overflow: "hidden",
            }}
          >
            {/* sandwich and options */}
            <motion.div
              animate={{
                scale: 1.2,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                position: "fixed",
              }}
            >
              <Sandwich
                olive={olive}
                cheese={cheese}
                lettuce={lettuce}
                tomato={tomato}
                meat={meat}
                plate={plate}
                breadTop={breadTop}
                breadBot={breadBot}
                breadTopType={breadTopType}
                breadLSideType={breadLSideType}
                breadRSideType={breadRSideType}
                meatMainType={meatMainType}
                meatShadowType={meatShadowType}
                scale={1}
              />
              <SandwichOptions
                optionsProp={optionsProp}
                setShowMenu={setShowMenu}
                showMenu={showMenu}
                setShowCheckout={setShowCheckout}
                madeSandwichArray={madeSandwichArray}
                setMadeSandwichArray={setMadeSandwichArray}
                selectToast={selectToast}
                setSelectToast={setSelectToast}
                cartItemRemoveHandler={cartItemRemoveHandler}
                cartItemAddHandler={cartItemAddHandler}
                menuState={menuState}
                addToCartTotal={addToCartTotal}
                namedCartItems={namedCartItems}
                setNamedCartItems={setNamedCartItems}
                cycle={cycle}
                cost={cost}
                setCost={setCost}
                setConfirmed={setConfirmed}
              />
            </motion.div>
          </div>
          {/* responsive checkout short circuits */}
          {width > 768 && (
            <Checkout
              showCheckout={showCheckout}
              madeSandwichArray={madeSandwichArray}
              setMadeSandwichArray={setMadeSandwichArray}
              selectToast={selectToast}
              setSelectToast={setSelectToast}
              addToCartTotal={addToCartTotal}
              setAddToCartTotal={setAddToCartTotal}
              menuState={menuState}
              setMenuState={setMenuState}
              namedCartItems={namedCartItems}
              cost={cost}
              setConfirmed={setConfirmed}
            />
          )}
          {width <= 768 && (
            <CheckoutAlt
              showCheckout={showCheckout}
              madeSandwichArray={madeSandwichArray}
              setMadeSandwichArray={setMadeSandwichArray}
              selectToast={selectToast}
              setSelectToast={setSelectToast}
              addToCartTotal={addToCartTotal}
              setAddToCartTotal={setAddToCartTotal}
              menuState={menuState}
              setMenuState={setMenuState}
              namedCartItems={namedCartItems}
              cost={cost}
              setConfirmed={setConfirmed}
              height={height}
              width={width}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Controller;
