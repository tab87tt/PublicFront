import React from "react";

import SandwichCheckout from "../stateful/SandwichCheckout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

/* <CheckSandwiches
    madeSandwichArray={madeSandwichArray}
    setMadeSandwichArray={setMadeSandwichArray}
    show={show}
    setShow={setShow}
    setAddToCartTotal={setAddToCartTotal}
/> */

const CheckoutSandwiches = ({
  madeSandwichArray,
  setMadeSandwichArray,
  show,
  setAddToCartTotal,
  width,
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
      meatLogic = "£1.50";
    } else if (meat === "Beef") {
      meatLogic = "£1.50";
    } else if (meat === "Ham") {
      meatLogic = "£1.50";
    } else {
      meatLogic = "£0.00";
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
        return item.id !== sandwich.id;
      });
      setMadeSandwichArray([...update]);
      setAddToCartTotal((prev) => prev - fixed);
    };

    return (
      <div style={styles.container} key={Math.random() * 1000}>
        <div style={styles.priceRemoveContainer}>
          <div style={styles.priceLine}>Price: £{fixed}</div>
          <div style={{ cursor: "pointer", zIndex: 5 }} onClick={removeHandler}>
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                height: "2.7vh",
                width: "2.7vh",
                color: "red",
                zIndex: 5,
              }}
              icon={faWindowClose}
            />
          </div>
        </div>
        {/* <div style={{ height: "20vw"}}></div> */}
        {!show && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "80%",
              // position: "absolute",
              // top: -17,
              // left: 2,
              padding: "2vw",
            }}
          >
            <SandwichCheckout
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
              scale={0.55}
            />
          </div>
        )}
        {show && !noIngredients && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "80%",
              // width: "100%",
              // height: "100%",
              // position: "absolute",
              // top: -55,
              // left: 9,
              padding: "2vw",
            }}
          >
            <SandwichCheckout
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
              scale={0.55}
            />
          </div>
        )}
        {show && noIngredients && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "80%",
              // width: "100%",
              // height: "100%",
              // position: "absolute",
              // top: -35,
              // left: 9,
              padding: "2vw",
            }}
          >
            <SandwichCheckout
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
              scale={0.55}
            />
          </div>
        )}
        {show && (
          <div style={styles.moreDetails}>
            <div style={styles.detailLine}>
              <div>Bread: {bread}</div>
              <div>
                {bread === "Gluten Free" && <div>£0.80</div>}
                {bread === "Brown" && <div>£0.80</div>}
                {bread === "White" && <div>£0.80</div>}
              </div>
            </div>
            <div style={styles.detailLine}>
              <div>Toasted: {sandwich.toasted === false ? "Yes" : "No"}</div>
              <div>{sandwich.toasted === false ? "£0.50" : "£0.00"}</div>
            </div>
            <div style={styles.detailLine}>
              <div>Meat: {meat}</div>
              <div>{meatLogic}</div>
            </div>
            <div style={styles.detailLine}>
              <div style={{ textAlign: "left" }}>
                Ingredients: {sandwich.cheese ? "Cheese " : null}
                {sandwich.lettuce ? "Lettuce " : null}
                {sandwich.tomato ? "Tomato " : null}
              </div>
              <div>{noIngredients ? "£0.00" : "£0.70"}</div>
            </div>
            <div style={styles.detailLine}>
              <div>Garnish: {sandwich.olive ? "Yes" : "No"}</div>
              <div>{sandwich.olive ? "£0.60" : "£0.00"}</div>
            </div>
          </div>
        )}
      </div>
    );
  });
  return <div>{sandwiches}</div>;
};
export default CheckoutSandwiches;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEFF9",
    width: "32vw",
    position: "relative",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    borderRadius: 5,
    paddingHorizontal: "1vw",
    marginBottom: "2vw",
  },
  priceRemoveContainer: {
    display: "flex",
    flexDirection: "row",
    width: "30vw",
    paddingTop: "1vw",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  sandwich: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "-4vw",
    left: "2vw",
  },
  sandwichPlaceholder: {
    width: "10vh",
    height: "15vh",
  },
  detailLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    fontWeight: "bold",
  },
  moreDetails: {
    width: "31vw",
    paddingBottom: "2vw",
    paddingTop: "2vw",
  },
};
