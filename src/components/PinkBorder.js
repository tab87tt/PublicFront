import React, { useState, useEffect } from "react";

const PinkBorder = ({ screenHeight, screenWidth }) => {
  const [height, setHeight] = useState();

  useEffect(() => {
    if (screenWidth > 1024) {
      //pc
      setHeight(`${screenHeight / 5.5}px`);
    } else if (screenWidth < 1023 && screenWidth > 768) {
      //tablet
      setHeight(`${screenHeight / 5.5}px`);
    } else {
      //mobile
      setHeight(`${screenHeight / 8}px`);
    }
  });

  return (
    <div style={styles.container}>
      <svg
        style={{ width: `${screenWidth}px`, height: height }}
        preserveAspectRatio="none"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0 0 773 386"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="2nd transition"
          d="M773 0H0.000152588V323C0.000152588 323 83.5 354 162.5 372C241.5 390 310.5 387.182 361.5 381C412.5 374.818 486 353.5 522.5 342C559 330.5 601 313 669 308.5C737 304 773 323 773 323V0Z"
          fill="#FA3663"
        />
      </svg>
    </div>
  );
};

export default PinkBorder;

const styles = {
  container: {
    backgroundColor: "#272525",
    overflow: "hidden",
  },
};
