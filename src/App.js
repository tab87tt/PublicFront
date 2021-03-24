import React, { useState, useEffect, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import LazyLoadingScreen from "./screens/LazyLoadingScreen";

import HomeScreen from "./screens/HomeScreen";
import GameDetailsScreen from "./screens/GameDetailsScreen";
import SandwichDetailsScreen from "./screens/SandwichDetailsScreen";
import ReminderDetailsScreen from "./screens/ReminderDetailsScreen";
import PortfolioDetailsScreen from "./screens/PortfolioDetailsScreen";
// import Game21 from "./Projects/21/Game";
// import SandwichApp from "./Projects/SandwichShop/SandwichApp";

// const HomeScreen = React.lazy(() => import("./screens/HomeScreen"));
// const GameDetailsScreen = React.lazy(() => import("./screens/GameDetailsScreen"));
// const SandwichDetailsScreen = React.lazy(() => import("./screens/SandwichDetailsScreen"));
// const ReminderDetailsScreen = React.lazy(() => import("./screens/ReminderDetailsScreen"));
// const PortfolioDetailsScreen = React.lazy(() => import("./screens/PortfolioDetailsScreen"));
const Game21 = React.lazy(() => import("./Projects/21/Game"));
const SandwichApp = React.lazy(() =>
  import("./Projects/SandwichShop/SandwichApp")
);

function App() {
  const location = useLocation();

  //test component to test width > 100vw
  // var docWidth = document.documentElement.offsetWidth;
  // [].forEach.call(
  //   document.querySelectorAll('*'),
  //   function(el) {
  //     if (el.offsetWidth > docWidth) {
  //       console.log(el);
  //     }
  //   }
  // );
  //screen dimensions state
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  //screen dimensions update func
  const updateDimensions = () => {
    if (typeof window.innerWidth !== "undefined") {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (
      typeof document.documentElement !== "undefined" &&
      typeof document.documentElement.clientWidth !== "undefined" &&
      document.documentElement.clientWidth !== 0
    ) {
      setWidth(document.documentElement.clientWidth);
      setHeight(document.documentElement.clientHeight);
    }
    // older versions of IE
    else {
      setWidth(document.getElementsByTagName("body")[0].clientWidth);
      setHeight(document.getElementsByTagName("body")[0].clientHeight);
    }
  };

  //initial render screen dimensions set
  useEffect(() => {
    updateDimensions();
  }, []);

  useEffect(() => {
    //set screen dimensions
    updateDimensions();
    //event listener to activate screen set on change
    window.addEventListener("resize", updateDimensions);
    //removal of event listener
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  return (
    <div className="App">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/game-info">
            <GameDetailsScreen width={width} />
          </Route>
          <Route path="/game">
            <Suspense fallback={<LazyLoadingScreen width={width} />}>
              <Game21 />
            </Suspense>
          </Route>
          <Route path="/sandwich">
            <Suspense fallback={<LazyLoadingScreen width={width} />}>
              <SandwichApp />
            </Suspense>
          </Route>
          <Route path="/sandwich-info">
            <SandwichDetailsScreen width={width} />
          </Route>
          <Route path="/reminder-info">
            <ReminderDetailsScreen width={width} />
          </Route>
          <Route path="/portfolio-info">
            <PortfolioDetailsScreen width={width} />
          </Route>
          <Route path="/">
            <HomeScreen height={height} width={width} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
