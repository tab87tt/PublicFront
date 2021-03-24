import React, { useState, useEffect } from "react";
import { useCycle } from "framer-motion";
import WrestlingRing from "../stateful/WrestlingRing";
import PlayerSelectScreen from "../stateful/PlayerSelectScreen";
import IntroScreen from "../stateful/IntroScreen";
import {
  bombWiggleStart,
  bombWiggle,
  bombWiggleStart2,
  bombWiggle2,
  bP1,
  bP2,
  bP3,
  bP2c,
  bP3c,
} from "../variants/variants";

const Controller = () => {
  //screen dimension updates
  // const [screenSize, setScreenSize] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });

  //tests screen tilt/expand message
  //console.log(`Height: ${screenSize.height}, Width: ${screenSize.width}`);
  /*
  if(screenSize.width < (screenSize.height*1.2)){
    console.log("mobile: turn screen to play; desktop: expand screen width");
  }else{
    console.log("playable screen");
  }
  */

  //set up/tear down dimensions event listener
  // useEffect(() => {
  //   const dimensions = () => {
  //     setScreenSize({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   };
  //   window.addEventListener("resize", dimensions);

  //   return () => {
  //     window.removeEventListener("resize", dimensions);
  //   };
  // }, [setScreenSize]);

  //screen render logic
  const [screen, setScreen] = useState("start");

  //starting count
  let [count, setCount] = useState(0);

  //turnSwap === true means computer moves
  const [turnSwap, setTurnSwap] = useState(null);

  const [player1, setPlayer1] = useState(null);

  const [player2, setPlayer2] = useState(null);

  //bomb wiggle logic
  const [wiggle, cycleWiggle] = useCycle(bombWiggleStart, bombWiggle);
  const [wiggle2, cycleWiggle2] = useCycle(bombWiggleStart2, bombWiggle2);

  //bombPosition logic
  //computer player 1
  const [bombPositionC1, cycleBombPositionC1] = useCycle(
    bP1,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3,
    bP2c,
    bP3
  );
  //computer player 2
  const [bombPositionC2, cycleBombPositionC2] = useCycle(
    bP1,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c,
    bP2,
    bP3c
  );

  //bomb hits to unlock bomb position and player turn change over
  const [bombHitsP1, setBombHitsP1] = useState(0);
  const [bombHitsP2, setBombHitsP2] = useState(0);

  const turnLogic = () => {
    if (turnSwap === true) {
      if (count === 0 && player1.computer === true) {
        setCount((count += Math.floor(Math.random() * 3) + 1));
        if (count <= 20) {
          setTurnSwap(false);
        }
        cycleBombPositionC1();
        cycleBombPositionC2();
      } else if (count !== 0 && count <= 20) {
        if ((count + 1) % 4 === 0) {
          setCount((count += 1));
          if (count <= 20) {
            setTurnSwap(false);
          }
          cycleBombPositionC1();
          cycleBombPositionC2();
        } else if ((count + 2) % 4 === 0) {
          setCount((count += 2));
          if (count <= 20) {
            setTurnSwap(false);
          }
          cycleBombPositionC1();
          cycleBombPositionC2();
        } else if ((count + 3) % 4 === 0) {
          setCount((count += 3));
          if (count <= 20) {
            setTurnSwap(false);
          }
          cycleBombPositionC1();
          cycleBombPositionC2();
        } else {
          setCount((count += Math.floor(Math.random() * 3) + 1));
          if (count <= 20) {
            setTurnSwap(false);
          }
          cycleBombPositionC1();
          cycleBombPositionC2();
        }
      }
    }
  };

  //changing background colour on screen change
  const [background, setBackground] = useState("#FFFFFF");

  useEffect(() => {
    if (screen === "start") {
      setBackground("white");
    }
    if (screen === "player") {
      setBackground("white");
    }
    if (screen === "game") {
      setBackground("#000019");
    }
  }, [screen]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: background,
        zIndex: 3,
      }}
    >
      {screen === "start" && <IntroScreen setScreen={setScreen} />}
      {screen === "player" && (
        <PlayerSelectScreen
          setTurnSwap={setTurnSwap}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setScreen={setScreen}
          cycleBombPositionC1={cycleBombPositionC1}
          cycleBombPositionC2={cycleBombPositionC2}
        />
      )}
      {screen === "game" && (
        <WrestlingRing
          bombHitsP1={bombHitsP1}
          setBombHitsP1={setBombHitsP1}
          bombHitsP2={bombHitsP2}
          setBombHitsP2={setBombHitsP2}
          setScreen={setScreen}
          player1={player1}
          setPlayer1={setPlayer1}
          player2={player2}
          setPlayer2={setPlayer2}
          turnSwap={turnSwap}
          setTurnSwap={setTurnSwap}
          wiggle={wiggle}
          cycleWiggle={cycleWiggle}
          wiggle2={wiggle2}
          cycleWiggle2={cycleWiggle2}
          count={count}
          setCount={setCount}
          bombPositionC1={bombPositionC1}
          cycleBombPositionC1={cycleBombPositionC1}
          bombPositionC2={bombPositionC2}
          cycleBombPositionC2={cycleBombPositionC2}
          turnLogic={turnLogic}
          bP2c={bP2c}
          bP3c={bP3c}
          bP2={bP2}
          bP3={bP3}
        />
      )}
    </div>
  );
};

export default Controller;
