import React, { useState } from "react";
import Button from "../stateless/Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";
import { sandwichBuildVariant } from "../stateless/variants";

const SandwichOptions = ({
  optionsProp,
  setShowMenu,
  showMenu,
  setShowCheckout,
  madeSandwichArray,
  setMadeSandwichArray,
  selectToast,
  setSelectToast,
  cartItemRemoveHandler,
  cartItemAddHandler,
  menuState,
  setNamedCartItems,
  cycle,
  setConfirmed,
}) => {
  const [cost, setCost] = useState(0);

  const [noThanks, setNoThanks] = useState(false);
  const [noOlive, setNoOlive] = useState(false);
  const [breadType, setBreadType] = useState("");
  //for checkout logic bread tracking
  const [breadOption, setBreadOption] = useState("");
  const [none, setNone] = useState(false);
  const [noMeat2, setNoMeat2] = useState(false);
  //const [meatType, setMeatType] = useState("");
  const meatType = "";
  //cycle and set each stage
  const [stage, setStage] = useState("bread");
  const [selectBread, setSelectBread] = useState(false);
  const [selectMeat, setSelectMeat] = useState(false);
  const [selectIngredients, setSelectIngredients] = useState(false);
  const [selectGarnish, setSelectGarnish] = useState(false);

  const whiteHandler = () => {
    optionsProp.bread.setBreadTopType("#FFFAD9");
    optionsProp.bread.setBreadLSideType("#CC7A29");
    optionsProp.bread.setBreadRSideType("#E6A145");
    optionsProp.bread.setBreadTop(true);
    optionsProp.bread.setBreadBot(true);
    setBreadType("#FFFAD9");
    setBreadOption("white");
    setSelectBread(true);
    setSelectToast(false);
    if (menuState["bread"].amount === 0) {
      cartItemAddHandler("bread");
    }
    setConfirmed(false);
  };

  const brownHandler = () => {
    optionsProp.bread.setBreadTopType("#C59C77");
    optionsProp.bread.setBreadLSideType("#80482F");
    optionsProp.bread.setBreadRSideType("#BA6F46");
    optionsProp.bread.setBreadTop(true);
    optionsProp.bread.setBreadBot(true);
    setBreadType("#C59C77");
    setBreadOption("brown");
    setSelectBread(true);
    setSelectToast(false);
    if (menuState["bread"].amount === 0) {
      cartItemAddHandler("bread");
    }
    setConfirmed(false);
  };

  const glutenFreeHandler = () => {
    optionsProp.bread.setBreadTopType("#F5E5C7");
    optionsProp.bread.setBreadLSideType("#CC7A29");
    optionsProp.bread.setBreadRSideType("#E6A145");
    optionsProp.bread.setBreadTop(true);
    optionsProp.bread.setBreadBot(true);
    setBreadType("#F5E5C7");
    setBreadOption("gluten free");
    setSelectBread(true);
    setSelectToast(false);
    if (menuState["bread"].amount === 0) {
      cartItemAddHandler("bread");
    }
    setConfirmed(false);
  };

  const toastedHandler = () => {
    optionsProp.bread.setBreadTopType("#DB9740");
    optionsProp.bread.setBreadLSideType("#80482F");
    optionsProp.bread.setBreadRSideType("#BA6F46");
    setNoThanks(false);
    setSelectToast(true);
    setSelectBread(false);
    if (menuState["toasted"].amount === 0) {
      cartItemAddHandler("toasted");
    }
  };
  //handles no toasting options
  const noThanksToastHandler = () => {
    setNoThanks(true);
    optionsProp.bread.setBreadTopType(breadType);
    setSelectToast(true);
    if (menuState["toasted"].amount === 1) {
      cartItemRemoveHandler("toasted");
    }
  };

  //meat colour change
  const hamHandler = () => {
    optionsProp.meat.setMeatMainType("#FF8080");
    optionsProp.meat.setMeatShadowType("#E65C73");
    optionsProp.meat.setMeat(true);
    setNoMeat2(false);
    setSelectMeat(true);
    if (menuState["meat"].amount === 0) {
      cartItemAddHandler("meat");
    }
  };

  const beefHandler = () => {
    optionsProp.meat.setMeatMainType("#CE8B7F");
    optionsProp.meat.setMeatShadowType("#854B42");
    optionsProp.meat.setMeat(true);
    setNoMeat2(false);
    setSelectMeat(true);
    if (menuState["meat"].amount === 0) {
      cartItemAddHandler("meat");
    }
  };

  const chickenHandler = () => {
    optionsProp.meat.setMeatMainType("#EAD0AB");
    optionsProp.meat.setMeatShadowType("#E9C499");
    optionsProp.meat.setMeat(true);
    setNoMeat2(false);
    setSelectMeat(true);
    if (menuState["meat"].amount === 0) {
      cartItemAddHandler("meat");
    }
  };

  const noMeatHandler = () => {
    setNoMeat2((prev) => !prev);
    optionsProp.meat.setMeatMainType(meatType);
    optionsProp.meat.setMeat(false);
    setSelectMeat(true);
    if (menuState["meat"].amount === 1) {
      cartItemRemoveHandler("meat");
    }
  };
  //cheese lettuce tomato olive
  const cheeseHandler = () => {
    optionsProp.ingredients.setCheese(!optionsProp.ingredients.cheese);
    setNone(false);
    setSelectIngredients(true);
    if (menuState["ingredients"].amount === 0) {
      cartItemAddHandler("ingredients");
    }
  };
  const lettuceHandler = () => {
    optionsProp.ingredients.setLettuce(!optionsProp.ingredients.lettuce);
    setNone(false);
    setSelectIngredients(true);
    if (menuState["ingredients"].amount === 0) {
      cartItemAddHandler("ingredients");
    }
  };
  const tomatoHandler = () => {
    optionsProp.ingredients.setTomato(!optionsProp.ingredients.tomato);
    setNone(false);
    setSelectIngredients(true);
    if (menuState["ingredients"].amount === 0) {
      cartItemAddHandler("ingredients");
    }
  };

  const noneHandler = () => {
    setNone((prev) => !prev);
    optionsProp.ingredients.setTomato(false);
    optionsProp.ingredients.setLettuce(false);
    optionsProp.ingredients.setCheese(false);
    setSelectIngredients(true);
    if (menuState["ingredients"].amount === 1) {
      cartItemRemoveHandler("ingredients");
    }
  };

  const oliveHandler = () => {
    optionsProp.ingredients.setOlive(true);
    setNoOlive(false);
    setSelectGarnish(true);
    if (menuState["garnish"].amount === 0) {
      cartItemAddHandler("garnish");
    }
  };

  const noThanksOliveHandler = () => {
    optionsProp.ingredients.setOlive(false);
    setNoOlive(true);
    setSelectGarnish(true);
    if (menuState["garnish"].amount === 1) {
      cartItemRemoveHandler("garnish");
    }
  };

  const cancelHandler = () => {
    setStage("bread");
    setNoThanks(false);
    setNoOlive(false);
    setBreadType("");
    setBreadOption("");
    setNone(false);
    setNoMeat2(false);
    setSelectBread(false);
    setSelectToast(false);
    setSelectMeat(false);
    setSelectIngredients(false);
    setSelectGarnish(false);
    optionsProp.bread.setBreadTop(false);
    optionsProp.bread.setBreadTopType("");
    optionsProp.bread.setBreadBot(false);
    optionsProp.meat.setMeat(false);
    optionsProp.meat.setMeatMainType("");
    optionsProp.ingredients.setLettuce(false);
    optionsProp.ingredients.setCheese(false);
    optionsProp.ingredients.setTomato(false);
    optionsProp.ingredients.setOlive(false);

    if (menuState["bread"].amount === 1) {
      cartItemRemoveHandler("bread");
    }
    if (menuState["toasted"].amount === 1) {
      cartItemRemoveHandler("toasted");
    }
    if (menuState["meat"].amount === 1) {
      cartItemRemoveHandler("meat");
    }
    if (menuState["ingredients"].amount === 1) {
      cartItemRemoveHandler("ingredients");
    }
    if (menuState["garnish"].amount === 1) {
      cartItemRemoveHandler("garnish");
    }

    menuState.bread.amount = 0;
    menuState.toasted.amount = 0;
    menuState.meat.amount = 0;
    menuState.ingredients.amount = 0;
    menuState.garnish.amount = 0;

    if (menuState["tea"].amount >= 1) {
      cartItemRemoveHandler("tea");
    }
    if (menuState["coffee"].amount >= 1) {
      cartItemRemoveHandler("coffee");
    }
    if (menuState["hotChocolate"].amount >= 1) {
      cartItemRemoveHandler("hotChocolate");
    }
    if (menuState["cola"].amount >= 1) {
      cartItemRemoveHandler("cola");
    }
    if (menuState["sprite"].amount >= 1) {
      cartItemRemoveHandler("sprite");
    }
    if (menuState["vimto"].amount >= 1) {
      cartItemRemoveHandler("vimto");
    }
    if (menuState["water1"].amount >= 1) {
      cartItemRemoveHandler("water1");
    }
    if (menuState["water2"].amount >= 1) {
      cartItemRemoveHandler("water2");
    }
    if (menuState["flapJack"].amount >= 1) {
      cartItemRemoveHandler("flapJack");
    }
    if (menuState["brownie"].amount >= 1) {
      cartItemRemoveHandler("brownie");
    }
    if (menuState["teaCake"].amount >= 1) {
      cartItemRemoveHandler("teaCake");
    }

    menuState.tea.amount = 0;
    menuState.coffee.amount = 0;
    menuState.hotChocolate.amount = 0;
    menuState.cola.amount = 0;
    menuState.sprite.amount = 0;
    menuState.vimto.amount = 0;
    menuState.water1.amount = 0;
    menuState.water2.amount = 0;
    menuState.flapJack.amount = 0;
    menuState.brownie.amount = 0;
    menuState.teaCake.amount = 0;

    setNamedCartItems([]);
  };

  const confirmHandler = () => {
    const randID = (Math.random() * 1000).toString();

    setCost(0.8);
    if (noOlive === false) {
      setCost((prev) => prev + 0.6);
    }
    if (none === false) {
      setCost((prev) => prev + 0.7);
    }
    if (optionsProp.meat.meat) {
      setCost((prev) => prev + 1.5);
    }
    if (optionsProp.bread.breadTopType === "#DB9740") {
      setCost((prev) => prev + 0.5);
    }
    const price = cost;

    const completeSandwich = {
      id: randID,
      olive: optionsProp.ingredients.olive,
      cheese: optionsProp.ingredients.cheese,
      lettuce: optionsProp.ingredients.lettuce,
      tomato: optionsProp.ingredients.tomato,
      meat: optionsProp.meat.meat,
      meatMainType: optionsProp.meat.meatMainType,
      meatShadowType: optionsProp.meat.meatShadowType,
      breadTop: optionsProp.bread.breadTop,
      breadBot: optionsProp.bread.breadBot,
      breadTopType: optionsProp.bread.breadTopType,
      breadLSideType: optionsProp.bread.breadLSideType,
      breadRSideType: optionsProp.bread.breadRSideType,
      toasted: noThanks,
      breadType: breadOption,
      price: price,
    };
    setMadeSandwichArray([...madeSandwichArray, completeSandwich]);

    menuState.bread.amount = 0;
    menuState.toasted.amount = 0;
    menuState.meat.amount = 0;
    menuState.ingredients.amount = 0;
    menuState.garnish.amount = 0;

    setStage("bread");
    setNoThanks(false);
    setNoOlive(false);
    setBreadType("");
    setBreadOption("");
    setNone(false);
    setNoMeat2(false);
    setSelectBread(false);
    setSelectToast(false);
    setSelectMeat(false);
    setSelectIngredients(false);
    setSelectGarnish(false);
    optionsProp.bread.setBreadTop(false);
    optionsProp.bread.setBreadTopType("");
    optionsProp.bread.setBreadBot(false);
    optionsProp.meat.setMeat(false);
    optionsProp.meat.setMeatMainType("");
    optionsProp.ingredients.setLettuce(false);
    optionsProp.ingredients.setCheese(false);
    optionsProp.ingredients.setTomato(false);
    optionsProp.ingredients.setOlive(false);
  };

  //each div below attached to state and updates to animate when conditional check true ie stage === "bread type"
  //using motion divs, animates in from left, animate presence exit out to right
  return (
    <div
      className="sandwich-options"
      style={{ width: "49vw", height: "30vh", marginRight: "2.7vw" }}
    >
      {/* bread selection */}
      <AnimatePresence>
        {stage === "bread" && (
          <motion.div
            variants={sandwichBuildVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ alignSelf: "center", visibility: "hidden" }}>
              <FontAwesomeIcon
                style={{ height: "4vh", width: "4vh", color: "#FFFFFF" }}
                icon={faArrowCircleLeft}
              />
            </div>
            <div className="bread">
              <h3
                style={{
                  fontSize: "2vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Select type of bread:
              </h3>
              <div
                style={{
                  margin: "auto",
                  width: "9rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  btnTitle="White"
                  onClickHandler={whiteHandler}
                  itemProp={optionsProp.bread.breadTopType}
                  itemVal="#FFFAD9"
                />

                <Button
                  btnTitle="Brown"
                  onClickHandler={brownHandler}
                  itemProp={optionsProp.bread.breadTopType}
                  itemVal="#C59C77"
                />

                <Button
                  btnTitle="Gluten Free"
                  onClickHandler={glutenFreeHandler}
                  itemProp={optionsProp.bread.breadTopType}
                  itemVal="#F5E5C7"
                />
              </div>
            </div>
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                visibility: selectBread ? "visible" : "hidden",
                cursor: "pointer",
                marginTop: "13vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("toasted");
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: selectBread ? "#ff003c" : "#FFFFFF",
                }}
                icon={faArrowCircleRight}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* toasted option */}
      <AnimatePresence>
        {stage === "toasted" && (
          <motion.div
            variants={sandwichBuildVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                marginTop: "10vh",
                cursor: "pointer",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("bread");
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: "#ff003c",
                }}
                icon={faArrowCircleLeft}
              />
            </motion.div>
            <div className="bread">
              <h3
                style={{
                  fontSize: "2vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Toasted?
              </h3>
              <div
                style={{
                  margin: "auto",
                  width: "9rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  btnTitle="Toasted"
                  onClickHandler={toastedHandler}
                  itemProp={optionsProp.bread.breadTopType}
                  itemVal="#DB9740"
                />
                <Button
                  btnTitle="No Thanks"
                  onClickHandler={noThanksToastHandler}
                  itemProp={noThanks}
                  itemVal={true}
                />
              </div>
            </div>
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                marginTop: "10vh",
                visibility: selectToast ? "visible" : "hidden",
                cursor: "pointer",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("meat");
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: selectToast ? "#ff003c" : "#FFFFFF",
                }}
                icon={faArrowCircleRight}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* meat selection */}
      <AnimatePresence>
        {stage === "meat" && (
          <motion.div
            variants={sandwichBuildVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "15vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("toasted");
              }}
            >
              <FontAwesomeIcon
                style={{ height: "4vh", width: "4vh", color: "#ff003c" }}
                icon={faArrowCircleLeft}
              />
            </motion.div>
            <div className="meat">
              <h3
                style={{
                  fontSize: "2vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Select type of meat:
              </h3>
              <div
                style={{
                  margin: "auto",
                  width: "9rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  btnTitle="Ham"
                  onClickHandler={hamHandler}
                  itemProp={optionsProp.meat.meatMainType}
                  itemVal="#FF8080"
                />
                <Button
                  btnTitle="Beef"
                  onClickHandler={beefHandler}
                  itemProp={optionsProp.meat.meatMainType}
                  itemVal="#CE8B7F"
                />
                <Button
                  btnTitle="Chicken"
                  onClickHandler={chickenHandler}
                  itemProp={optionsProp.meat.meatMainType}
                  itemVal="#EAD0AB"
                />
                <Button
                  btnTitle="No Meat"
                  onClickHandler={noMeatHandler}
                  itemProp={noMeat2}
                  itemVal={true}
                />
              </div>
            </div>
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                visibility: selectMeat ? "visible" : "hidden",
                cursor: "pointer",
                marginTop: "15vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("ingredients");
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: selectMeat ? "#ff003c" : "#FFFFFF",
                }}
                icon={faArrowCircleRight}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ingredients */}
      <AnimatePresence>
        {stage === "ingredients" && (
          <motion.div
            variants={sandwichBuildVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "15vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("meat");
              }}
            >
              <FontAwesomeIcon
                style={{ height: "4vh", width: "4vh", color: "#ff003c" }}
                icon={faArrowCircleLeft}
              />
            </motion.div>
            <div className="meat">
              <h3
                style={{
                  fontSize: "2vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Select Ingredients:
              </h3>
              <div
                style={{
                  margin: "auto",
                  width: "9rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  btnTitle="Cheese"
                  onClickHandler={cheeseHandler}
                  itemProp={optionsProp.ingredients.cheese}
                  itemVal={true}
                />
                <Button
                  btnTitle="Lettuce"
                  onClickHandler={lettuceHandler}
                  itemProp={optionsProp.ingredients.lettuce}
                  itemVal={true}
                />
                <Button
                  btnTitle="Tomato"
                  onClickHandler={tomatoHandler}
                  itemProp={optionsProp.ingredients.tomato}
                  itemVal={true}
                />
                <Button
                  btnTitle="None"
                  onClickHandler={noneHandler}
                  itemProp={none}
                  itemVal={true}
                />
              </div>
            </div>
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                visibility: selectIngredients ? "visible" : "hidden",
                cursor: "pointer",
                marginTop: "15vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("garnish");
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: selectIngredients ? "#ff003c" : "#FFFFFF",
                }}
                icon={faArrowCircleRight}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* garnish option */}
      <AnimatePresence>
        {stage === "garnish" && (
          <motion.div
            variants={sandwichBuildVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "10vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px whit5",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("ingredients");
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: "#ff003c",
                }}
                icon={faArrowCircleLeft}
              />
            </motion.div>
            <div className="meat">
              <h3
                style={{
                  fontSize: "2vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Extra garnish?
              </h3>
              <div
                style={{
                  margin: "auto",
                  width: "9rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  btnTitle="Olive"
                  onClickHandler={oliveHandler}
                  itemProp={optionsProp.ingredients.olive}
                  itemVal={true}
                />
                <Button
                  btnTitle="No Thanks"
                  onClickHandler={noThanksOliveHandler}
                  itemProp={noOlive}
                  itemVal={true}
                />
              </div>
            </div>
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                visibility: selectGarnish ? "visible" : "hidden",
                cursor: "pointer",
                marginTop: "10vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("confirm");
                setShowMenu(true);
                setShowCheckout(true);
                if (showMenu === false) {
                  cycle();
                }
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: selectGarnish ? "#ff003c" : "#FFFFFF",
                }}
                icon={faArrowCircleRight}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* confirm order */}
      <AnimatePresence>
        {stage === "confirm" && (
          <motion.div
            variants={sandwichBuildVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <motion.div
              style={{
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                cursor: "pointer",
                marginTop: "10vh",
              }}
              whileHover={{
                scale: [1, 1.1],
                boxShadow: "0px 0px 7px #FFFFFF",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
              onClick={() => {
                setStage("garnish");
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: "#ff003c",
                }}
                icon={faArrowCircleLeft}
                onClick={() => {
                  setStage("garnish");
                }}
              />
            </motion.div>
            <div className="meat">
              <h3
                style={{
                  fontSize: "2vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Confirm Order:
              </h3>
              <div
                style={{
                  margin: "auto",
                  width: "9rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  btnTitle="Add to Basket"
                  onClickHandler={confirmHandler}
                  itemProp={false}
                  itemVal={true}
                />
                <Button
                  btnTitle="Restart"
                  onClickHandler={cancelHandler}
                  itemProp={false}
                  itemVal={true}
                />
              </div>
              {/* testing sandwich save  for use in making the saved sandwiches*/}
              {/* <p>"Saved sandwich state to array, test val: {madeSandwichArray.length > 0 && (madeSandwichArray[0].breadTopType.toString())}"</p> */}
            </div>
            <motion.div
              style={{
                alignSelf: "center",
                width: "4vh",
                height: "4vh",
                borderRadius: "50%",
                marginBottom: 90,
                visibility: "hidden",
                cursor: "pointer",
              }}
              whileHover={{
                scale: [1, 1.2],
                boxShadow: "0px 0px 7px green",
                transition: { duration: 1.2, yoyo: Infinity },
              }}
            >
              <FontAwesomeIcon
                style={{
                  height: "4vh",
                  width: "4vh",
                  color: selectGarnish ? "#ff003c" : "#FFFFFF",
                }}
                icon={faArrowCircleRight}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SandwichOptions;
