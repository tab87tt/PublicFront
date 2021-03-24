import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import {
  eyes2,
  bombKickStart2,
  bombKick2,
  tail,
  rightEar,
  leftEar,
  startPosition,
  bombKickPosition,
  handsStart,
  handsMove,
} from "../variants/variants";

const styles = {
  container: {
    position: "fixed",
    top: "65vh",
    left: "60vw",
    zIndex: 10,
  },
  clickable: {
    cursor: "pointer",
  },
  containerOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30vh",
    height: "30vh",
    position: "fixed",
    zIndex: 5,
  },
  display: {
    height: "30vh",
    width: "30vh",
  },
  monsterSize: {
    height: "20vh",
    width: "20vh",
  },
};

const P2Character = ({
  bombHitsP2,
  setBombHitsP2,
  player2,
  cycleWiggle2,
  count,
  setCount,
  turnLogic,
  turnSwap,
}) => {
  const [bombKick, cycleBombKick] = useCycle(bombKickStart2, bombKick2);
  const [bombMove, cycleBombMove] = useCycle(startPosition, bombKickPosition);
  const [hands, cycleHands] = useCycle(handsStart, handsMove);

  //onTapHandler click count animation logic
  const [tapCountP2, setTapCountP2] = useState(1);

  //reset bomb hit counter on turn swap
  useEffect(() => {
    if (turnSwap === true) {
      setBombHitsP2(0);
    }
  }, [turnSwap, setBombHitsP2]);

  const onTapHandler = () => {
    if (count < 21) {
      if (turnSwap === true && player2.computer === true) {
        if (tapCountP2 % 2 === 0 && tapCountP2 > 1) {
          cycleBombKick();
          cycleBombMove();
          cycleHands();
          cycleWiggle2();
          turnLogic();
        } else if (tapCountP2 % 2 !== 0 && tapCountP2 > 1) {
          cycleBombKick();
          cycleBombMove();
          cycleHands();
          cycleWiggle2();
        }
        setTapCountP2((prev) => prev + 1);
      }
      if (bombHitsP2 < 3 && turnSwap === false && player2.computer === false) {
        if (tapCountP2 % 2 === 0 && tapCountP2 > 1) {
          cycleBombKick();
          cycleBombMove();
          cycleHands();
          cycleWiggle2();

          setCount((prev) => prev + 1);
          if (bombHitsP2 <= 2) {
            setBombHitsP2((prev) => prev + 1);
          }
        } else if (tapCountP2 % 2 !== 0 && tapCountP2 > 1) {
          cycleBombKick();
          cycleBombMove();
          cycleHands();
          cycleWiggle2();
        }
        setTapCountP2((prev) => prev + 1);
      }
    }
  };

  return (
    <motion.div animate={bombMove} style={styles.containerOuter}>
      <div style={styles.display}>
        <motion.div initial={{ x: "26vh", y: "30vh" }}>
          <svg
            style={styles.monsterSize}
            width="162"
            height="185"
            viewBox="0 0 172 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.g
              whileHover={{ scale: 1.05 }}
              style={styles.clickable}
              onTap={onTapHandler}
              id="kicking monster"
            >
              <g id="body">
                <motion.g
                  initial={{ rotate: 0, originX: 1, originY: 0 }}
                  animate={hands}
                  id="left arm"
                >
                  <path
                    id="path2950"
                    d="M60.7841 106.593C60.7841 106.593 52.3121 115.533 30.5521 100.194C30.5521 100.194 30.8721 103.342 34.0787 105.445C31.4667 105.569 27.5161 102.153 27.5161 102.153C27.5161 102.153 28.6121 106.341 33.5054 108.489C30.7947 109.054 28.2974 108.273 28.2974 108.273C28.2974 108.273 43.4894 127.674 65.632 112.345"
                    fill="#EB740F"
                  />
                  <path
                    id="path2954"
                    d="M65.6316 112.345L63.8076 110.179L58.9849 107.817C57.6249 108.509 55.4529 109.223 52.3609 109.173C49.3223 112.441 43.4996 116.536 34.7556 113.916C41.2209 118.124 52.1303 121.692 65.6316 112.345Z"
                    fill="#EB630F"
                  />
                </motion.g>
                <motion.g
                  variants={tail}
                  initial="initial"
                  animate="animate"
                  id="tail"
                >
                  <path
                    id="path2958"
                    d="M102.886 134.814C102.886 134.814 102.184 151.762 114.63 151.686C127.075 151.609 129.463 130.577 140.324 131.041C151.187 131.502 151.263 147.525 141.479 156.538C131.696 165.551 114.748 164.705 105.274 157.926C95.7989 151.145 98.1869 137.666 98.1869 137.666L102.886 134.814Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path2962"
                    d="M143.018 154.968C144.357 153.468 145.458 151.834 146.324 150.145C138.345 146.058 134.584 139.246 132.88 134.678C130.545 137.189 128.524 140.618 126.285 143.746C131.018 150.509 137.756 154.184 143.018 154.968Z"
                    fill="#EB450F"
                  />
                  <path
                    id="path2966"
                    d="M121.586 149.038C119.668 150.598 117.469 151.614 114.81 151.677C115.276 156.158 116.365 159.83 117.669 162.731C122.256 163.447 127.108 163.235 131.602 161.937C125.885 158.166 123.005 152.885 121.586 149.038Z"
                    fill="#EB450F"
                  />
                  <path
                    id="path2970"
                    d="M109.413 150.436C107.552 149.403 106.218 147.819 105.264 146.043C103.689 147.89 102.177 150.644 100.938 153.267C101.994 154.978 103.398 156.582 105.274 157.926C106.213 158.598 107.242 159.191 108.313 159.743C108.204 156.092 108.81 152.762 109.413 150.436Z"
                    fill="#EB450F"
                  />
                  <path
                    id="path2974"
                    d="M104.041 143.116C102.717 138.944 102.886 134.813 102.886 134.813L98.1859 137.665C98.1859 137.665 97.4059 142.095 98.5192 147.149C100.63 144.936 102.599 143.747 104.041 143.116"
                    fill="#EB450F"
                  />
                </motion.g>
                <motion.g
                  variants={rightEar}
                  initial="initial"
                  animate="animate"
                  id="right ear"
                >
                  <path
                    id="path2986"
                    d="M124.844 42.0667C124.844 42.0667 161.704 39.4333 161.109 46.0173C160.519 52.5973 153.409 61.484 142.153 58.7853C130.899 56.088 124.185 46.608 124.185 46.608L124.844 42.0667Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path2994"
                    d="M126.62 43.9105C126.62 43.9105 149.921 45.9491 148.669 50.8865C147.42 55.8225 136.953 57.1398 126.62 47.3971C126.687 44.6345 126.62 43.9105 126.62 43.9105Z"
                    fill="#EB3D0F"
                  />
                </motion.g>
                <motion.g
                  variants={leftEar}
                  initial="initial"
                  animate="animate"
                  id="left ear"
                >
                  <path
                    id="path2990"
                    d="M30.5406 48.5536C30.5406 48.5536 -0.491419 46.3376 0.00591464 51.8789C0.503248 57.4203 6.48991 64.9029 15.9659 62.6296C25.4419 60.3589 31.0939 52.3763 31.0939 52.3763L30.5406 48.5536Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path2998"
                    d="M29.0444 50.1057C29.0444 50.1057 9.42708 51.8244 10.4791 55.9804C11.5311 60.1364 20.3444 61.2444 29.0444 53.0431C28.9897 50.7151 29.0444 50.1057 29.0444 50.1057Z"
                    fill="#EB3D0F"
                  />
                </motion.g>
                <g id="eye brows">
                  <path
                    id="path3082"
                    d="M51.4586 42.4129C51.4586 42.4129 48.2239 31.8316 37.6093 37.7276C41.5773 37.5142 45.8986 36.4862 51.4586 42.4129Z"
                    fill="#000000"
                  />
                  <path
                    id="path3086"
                    d="M65.7007 33.762C65.7007 33.762 75.0313 29.6886 82.5367 36.978C79.2127 29.902 71.0607 27.5846 65.7007 33.762Z"
                    fill="#000000"
                  />
                  <path
                    id="path3090"
                    d="M92.7216 41.9104C92.7216 41.9104 101.514 37.5557 106.339 42.4131C103.015 37.4077 97.1909 35.4957 92.7216 41.9104Z"
                    fill="#000000"
                  />
                </g>
                <motion.g
                  initial={{ rotate: 0, originX: 0.8, originY: 0.2 }}
                  animate={bombKick}
                  id="kick leg"
                >
                  <path
                    id="path2978"
                    d="M58.2971 136.434C58.2971 136.434 49.2842 133.199 42.6049 142.766C35.9255 152.332 51.0765 168.599 51.0765 168.599C51.0765 168.599 36.2815 159.205 32.2754 172.833C43.2215 175.582 56.7503 175.997 57.1468 174.733C57.5444 173.468 48.621 156.659 70.357 149.33C69.3003 146.958 58.2971 136.434 58.2971 136.434Z"
                    fill="#0A6C7C"
                  />
                  <path
                    id="path2982"
                    d="M49.7622 136.843C51.7282 137.921 58.5136 142.408 54.4028 151.196C49.6273 161.401 55.4659 172.458 55.4659 172.458C55.4659 172.458 39.5719 174.011 34.6161 168.28C33.6637 169.387 32.8546 170.863 32.2752 172.832C43.2214 175.582 56.7501 175.996 57.1466 174.732C57.5442 173.468 48.6216 156.659 70.3569 149.33C69.3002 146.957 58.297 136.433 58.297 136.433C58.297 136.433 54.3575 135.043 49.7622 136.843"
                    fill="#075F68"
                  />
                </motion.g>
                <g id="rest of body">
                  <path
                    id="path2910"
                    d="M50.5367 28.4235C50.5367 28.4235 41.5394 2.34079 16.058 8.37412C21.0914 9.75145 35.5487 11.8795 38.938 34.1995C45.1127 31.5741 50.5367 28.4235 50.5367 28.4235Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path2914"
                    d="M20.107 7.67602L20.2377 8.72002L19.511 7.75468C19.7083 7.72802 19.9097 7.69735 20.107 7.67602Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2918"
                    d="M22.1329 7.5145C22.3543 7.50384 22.5849 7.48117 22.8049 7.47584C22.7609 8.0825 22.7049 8.8265 22.6863 8.9185C22.5129 8.6425 22.3129 8.08517 22.1329 7.5145Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2922"
                    d="M33.4247 13.9885C33.318 12.4992 33.7847 11.1272 34.5647 9.97251C34.9674 10.1658 35.3647 10.3685 35.7527 10.5792C34.854 11.1912 33.602 12.3325 33.4247 13.9885Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2926"
                    d="M30.228 11.4573C30.036 10.548 30.1933 9.35065 30.3907 8.38932C30.7507 8.48799 31.0933 8.60532 31.44 8.71732C30.9333 9.47332 30.3693 10.488 30.228 11.4573Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2930"
                    d="M26.0731 7.60827C26.4691 7.64694 26.8598 7.68961 27.2438 7.74427C26.9225 8.23627 26.5331 9.00961 26.5038 9.95494C26.2291 9.52294 26.1198 8.47761 26.0731 7.60827Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2934"
                    d="M39.5157 24.288C40.1211 22.6627 43.8184 20.924 46.0104 20.0147C46.5491 20.7773 47.0371 21.52 47.4731 22.2333C45.7731 22.0507 42.6544 22.1187 39.5157 24.288Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2938"
                    d="M35.6395 16.7411C35.8395 15.0824 37.6382 13.4357 38.7955 12.5331C39.2115 12.8371 39.6115 13.1531 40.0022 13.4731C38.6489 13.8611 36.8795 14.7357 35.6395 16.7411Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2942"
                    d="M42.7723 16.0536C43.2163 16.5202 43.635 16.9936 44.0363 17.4656C42.4843 17.6789 39.6083 18.3736 37.799 20.6629C37.855 18.8736 40.9016 17.0229 42.7723 16.0536Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path2946"
                    d="M96.5029 25.8974C96.5029 25.8974 102.186 -1.10264 128.219 1.71469C123.396 3.70936 109.315 7.61869 108.73 30.1867C102.276 28.3507 96.5029 25.8974 96.5029 25.8974Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path3002"
                    d="M105.294 100.145L55.4984 105.385C55.4984 105.385 55.4171 114.363 52.9451 118.481C50.6118 122.366 40.6664 137.905 59.5131 146.249C59.4651 146.541 59.4171 146.833 59.3824 147.139C57.8411 161.082 81.0291 167.861 81.0291 167.861C81.0291 167.861 65.4691 164.241 64.8518 176.413C71.8624 177.259 92.4318 175.257 92.0451 172.405C91.6598 169.557 81.0078 154.751 82.2398 150.669C92.3224 148.134 98.7131 144.221 101.91 139.355C101.914 139.353 101.912 139.347 101.912 139.342C109.109 131.265 111.886 118.358 105.294 100.145Z"
                    fill="#0F9494"
                  />
                  <path
                    id="path3006"
                    d="M54.1955 115.395C53.8675 116.548 53.4595 117.624 52.9461 118.48C50.6115 122.367 40.6675 137.905 59.5128 146.249C59.5128 146.249 73.5155 128.421 54.1955 115.395Z"
                    fill="#34DEDE"
                  />
                  <path
                    id="path3010"
                    d="M55.4988 105.384C55.4988 105.384 55.4868 106.546 55.3602 108.212C60.2602 109.63 78.6868 114.064 101.083 108.406C102.416 124.226 101.023 143.966 71.7188 147.095C78.4162 155.78 89.7482 161.486 79.7495 175.966L79.7535 175.968C86.3388 175.239 92.2535 173.947 92.0455 172.406C91.6602 169.556 81.0082 154.751 82.2402 150.668C92.3228 148.135 98.7135 144.22 101.911 139.356C101.915 139.354 101.912 139.348 101.912 139.343C109.11 131.264 111.887 118.358 105.295 100.144L55.4988 105.384Z"
                    fill="#0A7F7C"
                  />
                  <path
                    id="path3014"
                    d="M73.9324 23.301C48.5711 25.553 34.8591 30.233 28.3471 44.937C21.8351 59.6424 19.7351 105.44 51.1404 107.749C82.5458 110.061 107.336 106.069 121.41 98.7157C135.486 91.3637 131.703 72.877 128.972 50.8197C126.242 28.7624 111.743 19.9397 73.9324 23.301Z"
                    fill="#15A4AB"
                  />
                  <path
                    id="path3018"
                    d="M46.1903 89.8375C46.1903 89.8375 47.6436 102.811 49.329 103.132C51.013 103.455 51.4583 91.9802 51.4583 91.9802L46.1903 89.8375Z"
                    fill="white"
                  />
                  <path
                    id="path3022"
                    d="M79.7502 92.1943C79.7502 92.1943 81.7368 104.634 83.2102 104.634C84.6822 104.634 85.3262 91.4449 85.3262 91.4449L79.7502 92.1943Z"
                    fill="white"
                  />
                  <path
                    id="path3026"
                    d="M33.5367 69.465C33.5367 69.465 26.7821 98.093 67.6327 95.8424C108.485 93.5904 113.954 79.1157 112.881 67.213"
                    fill="#15A4AB"
                  />
                  <path
                    id="path3030"
                    d="M33.5368 69.4651C33.5368 69.4651 33.1501 71.1891 33.2554 74.2277C33.3154 75.7424 33.5181 77.5837 34.0821 79.6091C34.6688 81.6224 35.6301 83.8131 37.1434 85.8824C38.6848 87.9291 40.7981 89.7984 43.3581 91.2331C45.9194 92.6771 48.9021 93.6491 52.0461 94.3277C55.1981 94.9997 58.5461 95.2611 61.9421 95.3171C65.3514 95.4064 68.7808 95.1157 72.2648 94.8157L74.8701 94.6224L77.4381 94.3051C79.1434 94.0611 80.8621 93.9544 82.5314 93.6011C84.2034 93.2771 85.8808 93.0291 87.5061 92.6531C89.1181 92.2317 90.7288 91.8691 92.2821 91.4157C93.8048 90.8811 95.3381 90.4304 96.7794 89.8544C97.4914 89.5477 98.1968 89.2437 98.8941 88.9437L99.9341 88.4957L100.906 87.9544C101.551 87.5944 102.187 87.2384 102.814 86.8877C103.437 86.5331 103.974 86.0731 104.546 85.6797C105.719 84.9237 106.635 83.9437 107.579 83.0717C109.282 81.1691 110.675 79.2157 111.398 77.2411C112.241 75.3171 112.545 73.4837 112.759 71.9877C112.885 70.4784 112.961 69.2797 112.909 68.4651C112.891 67.6491 112.881 67.2131 112.881 67.2131C112.881 67.2131 112.915 67.6477 112.982 68.4611C113.075 69.2757 113.087 70.4797 113.017 72.0104C112.866 73.5317 112.639 75.4091 111.861 77.4211C111.207 79.4837 109.859 81.5717 108.13 83.5824C107.181 84.5104 106.249 85.5517 105.065 86.3637C104.486 86.7837 103.938 87.2744 103.307 87.6584C102.674 88.0357 102.029 88.4184 101.377 88.8064L100.389 89.3891L99.3368 89.8771C98.6288 90.2037 97.9141 90.5331 97.1914 90.8677C95.7341 91.5077 94.1714 91.9544 92.6208 92.5224C91.0421 92.9971 89.4101 93.3811 87.7741 93.8224C86.1261 94.2184 84.4341 94.4851 82.7408 94.8264C81.0528 95.2011 79.3074 95.3264 77.5794 95.5864L74.9728 95.9304L72.3688 96.1437C68.9061 96.4117 65.3741 96.6797 61.9181 96.5571C58.4594 96.4717 55.0448 96.1757 51.8034 95.4571C48.5674 94.7544 45.5048 93.6437 42.8754 92.0731C40.2461 90.5077 38.0848 88.4931 36.5381 86.3211C35.0034 84.1304 34.1114 81.8171 33.6048 79.7331C33.1181 77.6384 32.9928 75.7637 32.9981 74.2317C33.0021 72.6984 33.1621 71.5011 33.2888 70.6944C33.4221 69.8864 33.5368 69.4651 33.5368 69.4651Z"
                    fill="#094242"
                  />
                  <path
                    id="path3034"
                    d="M45.1851 44.6708C39.1278 43.9735 29.8598 54.3041 34.2705 63.7561C38.6825 73.2095 51.7638 67.9055 53.6558 61.1841C55.5465 54.4601 50.6465 45.3015 45.1851 44.6708Z"
                    fill="#108C8C"
                  />
                  <path
                    id="path3038"
                    d="M46.6146 42.4468C40.5586 41.7495 31.2893 52.0801 35.7 61.5321C40.112 70.9855 53.1946 65.6815 55.0866 58.9601C56.976 52.2361 52.076 43.0775 46.6146 42.4468Z"
                    fill="white"
                  />
                  <path
                    id="path3042"
                    d="M38.9182 55.4781C37.5622 52.5741 37.5022 49.5875 38.2395 46.8608C35.0675 50.6142 33.2195 56.2128 35.7008 61.5328C40.1128 70.9861 53.1942 65.6808 55.0862 58.9595C55.2448 58.3901 55.3408 57.7981 55.4062 57.1995C50.7835 61.2955 42.3022 62.7301 38.9182 55.4781Z"
                    fill="#E3DDDD"
                  />
                  <path
                    id="path3046"
                    d="M60.6695 46.2047C61.7708 39.2673 66.7828 36.45 75.8962 37.95C85.0095 39.4527 86.7242 47.6007 83.6148 54.462C80.5055 61.3247 74.6095 63.47 68.8188 63.254C63.0295 63.0407 59.2748 54.9993 60.6695 46.2047Z"
                    fill="#108C8C"
                  />
                  <path
                    id="path3050"
                    d="M58.8387 44.2697C59.9373 37.3324 64.9507 34.5151 74.064 36.0151C83.1773 37.5177 84.892 45.6657 81.784 52.5271C78.6747 59.3897 72.7773 61.5351 66.9867 61.3191C61.1973 61.1057 57.4427 53.0644 58.8387 44.2697Z"
                    fill="white"
                  />
                  <path
                    id="path3054"
                    d="M70.1499 56.0145C64.3592 55.7985 60.6059 47.7571 62.0006 38.9651C62.0659 38.5611 62.1446 38.1758 62.2339 37.8011C60.4286 39.2491 59.2926 41.3998 58.8392 44.2691C57.4432 53.0638 61.1966 61.1051 66.9872 61.3198C72.7779 61.5358 78.6752 59.3891 81.7846 52.5278C81.9526 52.1545 82.0992 51.7771 82.2392 51.3998C78.9886 54.9785 74.5406 56.1758 70.1499 56.0145Z"
                    fill="#E3DDDD"
                  />
                  <path
                    id="path3058"
                    d="M99.3388 46.8869C99.2041 46.8376 99.0534 46.8763 98.9108 46.8763C94.2174 46.8376 89.3921 49.6603 86.6868 58.2203C83.8988 67.0429 95.0494 75.4083 101.268 74.0149C107.487 72.6189 111.24 68.2229 108.667 58.7883C106.093 49.3536 101.699 47.7443 99.3388 46.8869Z"
                    fill="#108C8C"
                  />
                  <path
                    id="path3062"
                    d="M97.9742 43.1968C97.8395 43.1501 97.6888 43.1861 97.5462 43.1861C92.8528 43.1501 88.0275 45.9701 85.3222 54.5328C82.5342 63.3554 93.6848 71.7181 99.9035 70.3248C106.122 68.9314 109.875 64.5354 107.302 55.1008C104.729 45.6634 100.334 44.0568 97.9742 43.1968Z"
                    fill="white"
                  />
                  <path
                    id="path3066"
                    d="M99.9038 61.9782C95.3944 62.9888 88.2958 58.8688 85.7944 53.1635C85.6318 53.6035 85.4718 54.0568 85.3211 54.5328C82.5344 63.3555 93.6851 71.7182 99.9038 70.3248C105.922 68.9755 109.61 64.8035 107.516 55.9888C106.346 59.2928 103.557 61.1608 99.9038 61.9782Z"
                    fill="#E3DDDD"
                  />
                  <path
                    id="path3094"
                    d="M42.116 73.6473C42.116 73.6473 42.544 60.566 54.0173 64.2127C58.8027 65.7327 62.6747 65.614 65.7 65.4287C69.932 65.174 72.5133 64.798 73.6387 68.6087C75.568 75.15 70.636 86.8353 56.8053 86.514C42.9747 86.194 42.0107 80.0793 42.116 73.6473Z"
                    fill="#C82619"
                  />
                  <path
                    id="path3098"
                    d="M73.6382 68.6083C72.9115 66.1443 71.5729 65.4363 69.5769 65.3056C70.6782 67.635 71.2555 70.275 70.3929 72.9283C67.9809 80.3536 47.2635 80.1323 42.4582 71.187C42.1515 72.603 42.1155 73.647 42.1155 73.647C42.0102 80.0803 42.9742 86.1936 56.8049 86.515C70.6355 86.835 75.5675 75.1496 73.6382 68.6083Z"
                    fill="#B32619"
                  />
                  <path
                    id="path3102"
                    d="M52.9455 85.3349C52.9455 85.3349 50.1562 76.7202 47.0468 77.8656C43.9375 79.0096 46.4042 85.5509 52.9455 85.3349Z"
                    fill="#3A0805"
                  />
                  <path
                    id="path3106"
                    d="M57.0887 85.8844C57.0887 85.8844 59.878 77.2724 62.986 78.4151C66.0954 79.5591 63.6287 86.1004 57.0887 85.8844Z"
                    fill="#3A0805"
                  />
                  <path
                    id="path3110"
                    d="M117.109 89.8375C117.109 93.4469 118.429 96.7175 120.565 99.1242C120.841 98.9855 121.14 98.8562 121.411 98.7149C129.435 94.5229 131.652 86.7069 131.572 76.6789C130.864 76.5402 130.14 76.4575 129.399 76.4575C122.612 76.4575 117.109 82.4469 117.109 89.8375Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path3114"
                    d="M25.9859 83.1448C27.7246 90.6395 31.0139 97.4835 36.4832 102.059C37.1992 100.361 37.6099 98.4782 37.6099 96.4888C37.6099 89.3422 32.4606 83.5248 25.9859 83.1448Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path3122"
                    d="M69.4923 26.2229C69.4923 26.2229 56.2443 9.66828 59.5776 9.00161C62.9109 8.33495 69.7349 22.3376 70.4163 22.0403C71.7923 21.4363 64.1949 0.222947 67.9723 0.00161391C71.7496 -0.219719 72.4869 22.3429 74.1189 21.2829C75.7496 20.2229 77.7483 8.00161 79.7496 9.11361C81.7496 10.2229 77.9763 24.8896 77.9763 24.8896"
                    fill="#15A4AB"
                  />
                  <path
                    id="path3126"
                    d="M124.115 1.52497V2.57964L124.716 1.5303C124.516 1.52764 124.312 1.5223 124.115 1.52497Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path3130"
                    d="M122.084 1.61867C121.862 1.63734 121.63 1.64 121.413 1.66267C121.532 2.25867 121.68 2.99067 121.709 3.08C121.846 2.78534 121.977 2.20667 122.084 1.61867Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path3134"
                    d="M111.685 9.44682C111.606 7.95749 110.973 6.65216 110.054 5.60282C109.678 5.84816 109.31 6.09482 108.952 6.35616C109.918 6.85082 111.305 7.82416 111.685 9.44682Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path3138"
                    d="M114.542 6.53801C114.621 5.61401 114.314 4.44201 113.998 3.51401C113.657 3.65801 113.329 3.81668 112.999 3.97001C113.595 4.65801 114.281 5.59268 114.542 6.53801Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path3142"
                    d="M118.185 2.20197C117.798 2.28997 117.414 2.37931 117.042 2.48331C117.422 2.92864 117.904 3.64997 118.049 4.58464C118.268 4.12064 118.248 3.06864 118.185 2.20197Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path3146"
                    d="M106.922 20.4234C106.119 18.8874 102.235 17.6208 99.9487 16.9941C99.5074 17.8168 99.1167 18.6141 98.7727 19.3768C100.437 18.9834 103.539 18.6634 106.922 20.4234Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path3150"
                    d="M109.831 12.4547C109.424 10.8347 107.435 9.42403 106.175 8.6707C105.803 9.02536 105.442 9.3867 105.095 9.7547C106.486 9.9707 108.352 10.6187 109.831 12.4547Z"
                    fill="#891D0F"
                  />
                  <path
                    id="path3154"
                    d="M102.667 12.6604C102.285 13.1791 101.928 13.6991 101.588 14.2178C103.153 14.2364 106.096 14.5698 108.176 16.6138C107.899 14.8458 104.645 13.3898 102.667 12.6604Z"
                    fill="#891D0F"
                  />
                </g>
                <motion.g variants={eyes2} animate="animate" id="eyes">
                  <path
                    id="path3070"
                    d="M104.301 55.5823C104.301 57.6836 102.861 59.3876 101.084 59.3876C99.3076 59.3876 97.8676 57.6836 97.8676 55.5823C97.8676 53.481 99.3076 51.7756 101.084 51.7756C102.861 51.7756 104.301 53.481 104.301 55.5823Z"
                    fill="#000000"
                  />
                  <path
                    id="path3074"
                    d="M75.9259 48.9885C75.9259 51.0899 74.4872 52.7939 72.7099 52.7939C70.9326 52.7939 69.4926 51.0899 69.4926 48.9885C69.4926 46.8872 70.9326 45.1819 72.7099 45.1819C74.4872 45.1819 75.9259 46.8872 75.9259 48.9885Z"
                    fill="#000000"
                  />
                  <path
                    id="path3078"
                    d="M51.4585 53.9208C51.4585 56.0221 50.0185 57.7261 48.2412 57.7261C46.4652 57.7261 45.0252 56.0221 45.0252 53.9208C45.0252 51.8195 46.4652 50.1141 48.2412 50.1141C50.0185 50.1141 51.4585 51.8195 51.4585 53.9208Z"
                    fill="#000000"
                  />
                </motion.g>
                <motion.g
                  initial={{ rotate: 0, originX: 1, originY: 0 }}
                  animate={hands}
                  id="right arm"
                >
                  <path
                    id="path3118"
                    d="M96.5029 117.223C92.2362 143.811 63.4176 134.994 63.4176 134.994C63.4176 134.994 65.9176 134.223 67.8336 132.223C62.5842 133.223 59.3082 130.39 59.3082 130.39C59.3082 130.39 64.5002 130.974 66.5842 129.39C62.7509 129.474 60.7042 127.056 60.7042 127.056C87.3256 127.39 89.2509 115.223 89.2509 115.223C89.2509 115.223 90.3749 113.442 91.8176 112.707C94.2349 111.48 97.3896 111.699 96.5029 117.223Z"
                    fill="#EB740F"
                  />
                  <path
                    id="path3158"
                    d="M96.5029 117.223C97.3895 111.699 94.2349 111.48 91.8175 112.707C91.1242 113.062 90.5082 113.655 90.0495 114.179C91.0362 118.116 92.5815 131.199 71.7189 136.335C80.5842 136.827 93.7295 134.51 96.5029 117.223Z"
                    fill="#EB630F"
                  />
                </motion.g>
              </g>
            </motion.g>
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default P2Character;
