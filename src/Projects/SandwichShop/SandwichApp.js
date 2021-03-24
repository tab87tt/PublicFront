import Controller from "./components/stateful/Controller";
import React, { useState, useEffect } from "react";

function SandwichApp() {
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
    <div>
      <Controller width={width} height={height} style={styles.sandwich} />
    </div>
  );
}

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateAreas: `
    'menu' 'sandwich' 'sandwich' 'checkout'
    `,
  },
  menu: {
    gridArea: "menu",
    backgroundColor: "pink",
  },
  sandwich: {
    margin: "auto",
  },
  checkout: {
    gridArea: "checkout",
    backgroundColor: "yellow",
  },
};

export default SandwichApp;
