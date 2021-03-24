import React from "react";
import Sandwich from "../stateful/Sandwich";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

const CheckoutMenu = ({
  madeSandwichArray,
  setMadeSandwichArray,
  show,
  setAddToCartTotal,
}) => {
  const sandwiches = madeSandwichArray.map((sandwich) => {
    let bread = "";
    if (sandwich.breadType === "white") {
      bread = "White";
    } else if (sandwich.breadType === "brown") {
      bread = "Brown";
    } else {
      bread = "Gluten Free";
    }

    let meat = "";
    if (sandwich.meatMainType === "#FF8080") {
      meat = "Ham";
    } else if (sandwich.meatMainType === "#CE8B7F") {
      meat = "Beef";
    } else if (sandwich.meatMainType === "#EAD0AB") {
      meat = "Chicken";
    } else {
      meat = "No Meat";
    }

    let meatLogic = "";
    if (meat === "Chicken") {
      meatLogic = <div style={{ position: "absolute", right: -88 }}>£1.50</div>;
    } else if (meat === "Beef") {
      meatLogic = (
        <div style={{ position: "absolute", right: -112 }}>£1.50</div>
      );
    } else if (meat === "Ham") {
      meatLogic = (
        <div style={{ position: "absolute", right: -110 }}>£1.50</div>
      );
    } else {
      meatLogic = <div style={{ position: "absolute", right: -83 }}>£0.00</div>;
    }

    let noIngredients = false;
    if (!sandwich.lettuce && !sandwich.tomato && !sandwich.cheese) {
      noIngredients = true;
    }

    let sandwichTotal = 0.0;
    if (sandwich.breadType === "white" || "brown" || "gluten free") {
      sandwichTotal += 0.8;
    }
    if (sandwich.breadTopType === "#DB9740") {
      sandwichTotal += 0.5;
    }
    if (sandwich.meat === true) {
      sandwichTotal += 1.5;
    }
    if (
      sandwich.cheese === true ||
      sandwich.lettuce === true ||
      sandwich.cheese === true
    ) {
      sandwichTotal += 0.7;
    }
    if (sandwich.olive === true) {
      sandwichTotal += 0.6;
    }
    let fixed = sandwichTotal.toFixed(2);

    const removeHandler = () => {
      let sandwichArrayCopy = [...madeSandwichArray];
      let update = sandwichArrayCopy.filter((item) => {
        return item.id != sandwich.id;
      });
      setMadeSandwichArray([...update]);
      setAddToCartTotal((prev) => prev - fixed);
    };

    return (
      <div
        key={sandwich.id}
        style={{
          borderStyle: "solid",
          borderColor: "#000000",
          borderRadius: 7,
          width: "25vw",
          height: show ? "33vh" : "12vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          paddingTop: "2.2vh",
          marginTop: "1vh",
        }}
      >
        <div style={{ position: "absolute", top: "0.5vw", left: "0.75vw" }}>
          <em style={{ fontSize: "1.25vw" }}>Price</em>:{" "}
          <h4 style={{ position: "absolute", top: "-1.6vw", left: "3.5vw" }}>
            £{fixed}
          </h4>
        </div>
        {/* //container per sandwich displayed */}
        <motion.div
          style={{ cursor: "pointer", zIndex: 5 }}
          onClick={removeHandler}
        >
          <FontAwesomeIcon
            style={{
              cursor: "pointer",
              position: "absolute",
              top: -4,
              right: 8,
              height: "1.7vw",
              width: "1.7vw",
              color: "red",
              paddingTop: 10,
              paddingLeft: 10,
              zIndex: 5,
            }}
            icon={faWindowClose}
          />
        </motion.div>
        <div style={{ position: "absolute", top: "-8vh" }}>
          {/* //sandwich frame */}
          <Sandwich
            olive={sandwich.olive}
            cheese={sandwich.cheese}
            lettuce={sandwich.lettuce}
            tomato={sandwich.tomato}
            meat={sandwich.meat}
            plate={false}
            breadTop={sandwich.breadTop}
            breadBot={sandwich.breadBot}
            breadTopType={sandwich.breadTopType}
            breadLSideType={sandwich.breadLSideType}
            breadRSideType={sandwich.breadRSideType}
            meatMainType={sandwich.meatMainType}
            meatShadowType={sandwich.meatShadowType}
            scale={0.4}
          />
        </div>

        <div
          style={{
            width: 200,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 130,
          }}
        >
          {show && (
            <>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  top: 10,
                }}
              >
                <em>Bread</em>:
                <div style={{ paddingRight: 10, paddingLeft: 6 }}>{bread}</div>
                {bread === "Gluten Free" && (
                  <div style={{ position: "absolute", right: -53 }}>£0.80</div>
                )}
                {bread === "Brown" && (
                  <div style={{ position: "absolute", right: -92 }}>£0.80</div>
                )}
                {bread === "White" && (
                  <div style={{ position: "absolute", right: -97 }}>£0.80</div>
                )}
              </p>

              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  top: 30,
                }}
              >
                <em>Toasted</em>:
                {sandwich.toasted === false ? (
                  <div style={{ paddingRight: 10, paddingLeft: 6 }}>Yes</div>
                ) : (
                  <div style={{ paddingRight: 10, paddingLeft: 6 }}>No</div>
                )}
                {sandwich.toasted === false ? (
                  <div style={{ position: "absolute", right: -102 }}>£0.50</div>
                ) : (
                  <div style={{ position: "absolute", right: -105 }}>£0.00</div>
                )}
              </p>

              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  top: 50,
                }}
              >
                <em>Meat</em>:{" "}
                <div style={{ paddingRight: 10, paddingLeft: 6 }}>{meat}</div>
                {meatLogic}
              </p>

              <p style={{ position: "absolute", top: 70 }}>
                <em>Ingredients</em>:
                <div>
                  <div style={{ position: "absolute", top: 20, left: 20 }}>
                    {sandwich.cheese ? <div>Cheese</div> : null}
                  </div>
                  <div style={{ position: "absolute", top: 37, left: 20 }}>
                    {sandwich.lettuce ? <div>Lettuce</div> : null}
                  </div>
                  <div style={{ position: "absolute", top: 53, left: 20 }}>
                    {sandwich.tomato ? <div>Tomato</div> : null}
                  </div>
                </div>
                <div style={{ position: "absolute", top: 65 }}>
                  {noIngredients ? (
                    <div
                      style={{ position: "absolute", right: -200, top: -64 }}
                    >
                      £0.00
                    </div>
                  ) : (
                    <div
                      style={{ position: "absolute", right: -202, top: -64 }}
                    >
                      £0.70
                    </div>
                  )}
                </div>
              </p>

              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  top: 140,
                }}
              >
                <em>Garnish:</em>
                {sandwich.olive ? (
                  <div style={{ paddingRight: 10, paddingLeft: 6 }}>Yes</div>
                ) : (
                  <div style={{ paddingRight: 10, paddingLeft: 6 }}>No</div>
                )}
                {sandwich.olive ? (
                  <div style={{ position: "absolute", right: -102 }}>£0.60</div>
                ) : (
                  <div style={{ position: "absolute", right: -108 }}>£0.00</div>
                )}
              </p>
            </>
          )}
        </div>
      </div>
    );
  });
  return <div>{sandwiches}</div>;
};

export default CheckoutMenu;
