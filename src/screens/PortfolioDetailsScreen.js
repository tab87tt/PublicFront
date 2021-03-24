import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";
import loadingScreen from "../images/SandwichLoading.jpg";

//install https://github.com/cookpete/react-player
//
const PortfolioDetailsScreen = ({ width }) => {
  //scroll top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ready, setReady] = useState(false);

  const onReadyHandler = () => {
    setReady(true);
  };

  return (
    <>
      {width > 768 && (
        <motion.div exit={{ opacity: 0 }} style={styles.container}>
          <div style={styles.projectName}>
            <svg
              style={{
                width: "22vw",
                paddingTop: "3.5vw",
                paddingBottom: "2vw",
              }}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 196 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Portfolio">
                <path
                  id="."
                  d="M195.424 30.751C195.424 31.2933 195.321 31.8037 195.113 32.2822C194.906 32.7448 194.619 33.1515 194.252 33.5024C193.901 33.8534 193.486 34.1245 193.008 34.3159C192.545 34.5233 192.043 34.627 191.501 34.627C190.974 34.627 190.472 34.5233 189.993 34.3159C189.531 34.1245 189.124 33.8534 188.773 33.5024C188.422 33.1515 188.143 32.7448 187.936 32.2822C187.728 31.8037 187.625 31.2933 187.625 30.751C187.625 30.2087 187.728 29.7062 187.936 29.2437C188.143 28.7651 188.422 28.3504 188.773 27.9995C189.124 27.6486 189.531 27.3774 189.993 27.186C190.472 26.9787 190.974 26.875 191.501 26.875C192.043 26.875 192.545 26.9787 193.008 27.186C193.486 27.3774 193.901 27.6486 194.252 27.9995C194.619 28.3504 194.906 28.7651 195.113 29.2437C195.321 29.7062 195.424 30.2087 195.424 30.751Z"
                  fill="#FA3663"
                />
                <path
                  id="Portfolio_2"
                  d="M0.195 33V1.275H14.685C18.225 1.275 20.955 2.175 22.875 3.975C24.795 5.745 25.755 8.22 25.755 11.4C25.755 14.58 24.795 17.07 22.875 18.87C20.955 20.67 18.225 21.57 14.685 21.57H7.17V33H0.195ZM7.17 16.17H13.515C17.205 16.17 19.05 14.58 19.05 11.4C19.05 8.28 17.205 6.72 13.515 6.72H7.17V16.17ZM38.8823 33.495C36.5123 33.495 34.4423 33.03 32.6723 32.1C30.9323 31.14 29.5823 29.805 28.6223 28.095C27.6623 26.355 27.1823 24.3 27.1823 21.93C27.1823 19.59 27.6623 17.565 28.6223 15.855C29.5823 14.115 30.9323 12.78 32.6723 11.85C34.4423 10.92 36.5123 10.455 38.8823 10.455C41.2523 10.455 43.3073 10.92 45.0473 11.85C46.8173 12.78 48.1823 14.115 49.1423 15.855C50.1323 17.565 50.6273 19.59 50.6273 21.93C50.6273 24.3 50.1323 26.355 49.1423 28.095C48.1823 29.805 46.8173 31.14 45.0473 32.1C43.3073 33.03 41.2523 33.495 38.8823 33.495ZM38.8823 28.41C40.3223 28.41 41.4923 27.885 42.3923 26.835C43.3223 25.785 43.7873 24.15 43.7873 21.93C43.7873 19.74 43.3223 18.135 42.3923 17.115C41.4923 16.065 40.3223 15.54 38.8823 15.54C37.4423 15.54 36.2723 16.065 35.3723 17.115C34.4723 18.135 34.0223 19.74 34.0223 21.93C34.0223 24.15 34.4723 25.785 35.3723 26.835C36.2723 27.885 37.4423 28.41 38.8823 28.41ZM54.7614 33V10.905H61.4214V14.73C62.4714 12.15 64.7214 10.725 68.1714 10.455L70.1514 10.32L70.5564 16.035L66.7314 16.44C63.3714 16.77 61.6914 18.48 61.6914 21.57V33H54.7614ZM85.4696 33.495C79.2596 33.495 76.1546 30.48 76.1546 24.45V15.99H71.9696V10.905H76.1546V4.425H82.9496V10.905H89.4746V15.99H82.9496V24.18C82.9496 25.44 83.2346 26.385 83.8046 27.015C84.4046 27.645 85.3496 27.96 86.6396 27.96C87.0296 27.96 87.4346 27.915 87.8546 27.825C88.3046 27.735 88.7846 27.615 89.2946 27.465L90.2846 32.415C89.6546 32.745 88.9046 33 88.0346 33.18C87.1646 33.39 86.3096 33.495 85.4696 33.495ZM94.3522 33V15.99H90.1672V10.905H94.3522C94.4122 7.785 95.3122 5.445 97.0522 3.885C98.8222 2.295 101.507 1.395 105.107 1.185L107.582 1.005L107.987 5.955L105.872 6.09C104.132 6.18 102.902 6.555 102.182 7.215C101.492 7.845 101.147 8.82 101.147 10.14V10.905H106.907V15.99H101.147V33H94.3522ZM119.917 33.495C117.548 33.495 115.478 33.03 113.708 32.1C111.968 31.14 110.618 29.805 109.657 28.095C108.698 26.355 108.218 24.3 108.218 21.93C108.218 19.59 108.698 17.565 109.657 15.855C110.618 14.115 111.968 12.78 113.708 11.85C115.478 10.92 117.548 10.455 119.917 10.455C122.288 10.455 124.343 10.92 126.083 11.85C127.853 12.78 129.218 14.115 130.178 15.855C131.168 17.565 131.663 19.59 131.663 21.93C131.663 24.3 131.168 26.355 130.178 28.095C129.218 29.805 127.853 31.14 126.083 32.1C124.343 33.03 122.288 33.495 119.917 33.495ZM119.917 28.41C121.358 28.41 122.528 27.885 123.428 26.835C124.358 25.785 124.823 24.15 124.823 21.93C124.823 19.74 124.358 18.135 123.428 17.115C122.528 16.065 121.358 15.54 119.917 15.54C118.478 15.54 117.308 16.065 116.408 17.115C115.508 18.135 115.058 19.74 115.058 21.93C115.058 24.15 115.508 25.785 116.408 26.835C117.308 27.885 118.478 28.41 119.917 28.41ZM144.032 33.495C141.182 33.495 139.097 32.76 137.777 31.29C136.457 29.79 135.797 27.57 135.797 24.63V1.275H142.592V24.36C142.592 26.76 143.657 27.96 145.787 27.96C146.117 27.96 146.432 27.945 146.732 27.915C147.062 27.885 147.377 27.825 147.677 27.735L147.587 33C146.447 33.33 145.262 33.495 144.032 33.495ZM150.512 6.63V0.284997H157.847V6.63H150.512ZM150.782 33V10.905H157.577V33H150.782ZM173.443 33.495C171.073 33.495 169.003 33.03 167.233 32.1C165.493 31.14 164.143 29.805 163.183 28.095C162.223 26.355 161.743 24.3 161.743 21.93C161.743 19.59 162.223 17.565 163.183 15.855C164.143 14.115 165.493 12.78 167.233 11.85C169.003 10.92 171.073 10.455 173.443 10.455C175.813 10.455 177.868 10.92 179.608 11.85C181.378 12.78 182.743 14.115 183.703 15.855C184.693 17.565 185.188 19.59 185.188 21.93C185.188 24.3 184.693 26.355 183.703 28.095C182.743 29.805 181.378 31.14 179.608 32.1C177.868 33.03 175.813 33.495 173.443 33.495ZM173.443 28.41C174.883 28.41 176.053 27.885 176.953 26.835C177.883 25.785 178.348 24.15 178.348 21.93C178.348 19.74 177.883 18.135 176.953 17.115C176.053 16.065 174.883 15.54 173.443 15.54C172.003 15.54 170.833 16.065 169.933 17.115C169.033 18.135 168.583 19.74 168.583 21.93C168.583 24.15 169.033 25.785 169.933 26.835C170.833 27.885 172.003 28.41 173.443 28.41Z"
                  fill="#232B2B"
                />
              </g>
            </svg>
            {/* link to github repo */}
            <a style={{ textDecoration: "none" }} href="https://github.com/tab87tt/portfolio-front">
              <div
                style={{
                  borderWidth: 2.5,
                  borderStyle: "solid",
                  borderColor: "#FA3663",
                  height: "2.5vw",
                  width: "10vw",
                  color: "#FA3663",
                  fontSize: "1.3vw",
                  fontWeight: "700",
                  paddingTop: "0.6vw",
                  marginTop: "1.6vw",
                  cursor: "pointer",
                }}
              >
                SOURCE CODE
              </div>
            </a>
          </div>
          <div style={styles.description}>
            <p style={styles.heading}></p>
            <p style={styles.paragraph}>
              This site is my most recent project, I feel it most accurately
              reflects my current understanding of UI/UX design principles. The
              front end is built inside Reactjs using javascript, html and css.
              I have used several of the more advanced Reactjs features
              throughout, including functional hooks, the project code is split
              and lazy loaded in order to optimise loading times.
              <br />
              <br />
              The site is hosted on my own Linux/GNU Ubuntu cloud server, while
              more challenging, I chose this option due to the freedom and
              flexibility it offers. While also allowing me the opportunity to
              learn Linux Bash, task automation and cloud server security
              protocols including: NGINX reverse proxies, firewalls, SSH and
              SSL.
              <br />
              <br />
              The back end server is built inside of Nodejs, using Express. Feel
              free to check out my{" "}
              <a style={styles.link} href="https://github.com/tab87tt/portfolio-front">
                GitHub
              </a>{" "}
              linked above for more details.
            </p>
          </div>
          <div style={styles.videoContainerOuter}>
            <div style={styles.videoContainerInner}>
              {!ready && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <img
                    src={loadingScreen}
                    style={{ width: "100%", height: "100%" }}
                    alt="Loading Video..."
                  />
                </div>
              )}
              <ReactPlayer
                style={{ position: "absolute", top: 0, left: 0 }}
                loop
                controls
                width="100%"
                height="100%"
                onReady={onReadyHandler}
                url="https://youtu.be/DoeAO5I4Dm0"
              />
            </div>
          </div>
        </motion.div>
      )}
      {width <= 768 && (
        <motion.div exit={{ opacity: 0 }} style={styles.container}>
          <div style={styles.projectName2}>
            <svg
              style={{
                width: "50vw",
                paddingTop: "3.5vw",
                paddingBottom: "3vw",
              }}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 196 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Portfolio">
                <path
                  id="."
                  d="M195.424 30.751C195.424 31.2933 195.321 31.8037 195.113 32.2822C194.906 32.7448 194.619 33.1515 194.252 33.5024C193.901 33.8534 193.486 34.1245 193.008 34.3159C192.545 34.5233 192.043 34.627 191.501 34.627C190.974 34.627 190.472 34.5233 189.993 34.3159C189.531 34.1245 189.124 33.8534 188.773 33.5024C188.422 33.1515 188.143 32.7448 187.936 32.2822C187.728 31.8037 187.625 31.2933 187.625 30.751C187.625 30.2087 187.728 29.7062 187.936 29.2437C188.143 28.7651 188.422 28.3504 188.773 27.9995C189.124 27.6486 189.531 27.3774 189.993 27.186C190.472 26.9787 190.974 26.875 191.501 26.875C192.043 26.875 192.545 26.9787 193.008 27.186C193.486 27.3774 193.901 27.6486 194.252 27.9995C194.619 28.3504 194.906 28.7651 195.113 29.2437C195.321 29.7062 195.424 30.2087 195.424 30.751Z"
                  fill="#FA3663"
                />
                <path
                  id="Portfolio_2"
                  d="M0.195 33V1.275H14.685C18.225 1.275 20.955 2.175 22.875 3.975C24.795 5.745 25.755 8.22 25.755 11.4C25.755 14.58 24.795 17.07 22.875 18.87C20.955 20.67 18.225 21.57 14.685 21.57H7.17V33H0.195ZM7.17 16.17H13.515C17.205 16.17 19.05 14.58 19.05 11.4C19.05 8.28 17.205 6.72 13.515 6.72H7.17V16.17ZM38.8823 33.495C36.5123 33.495 34.4423 33.03 32.6723 32.1C30.9323 31.14 29.5823 29.805 28.6223 28.095C27.6623 26.355 27.1823 24.3 27.1823 21.93C27.1823 19.59 27.6623 17.565 28.6223 15.855C29.5823 14.115 30.9323 12.78 32.6723 11.85C34.4423 10.92 36.5123 10.455 38.8823 10.455C41.2523 10.455 43.3073 10.92 45.0473 11.85C46.8173 12.78 48.1823 14.115 49.1423 15.855C50.1323 17.565 50.6273 19.59 50.6273 21.93C50.6273 24.3 50.1323 26.355 49.1423 28.095C48.1823 29.805 46.8173 31.14 45.0473 32.1C43.3073 33.03 41.2523 33.495 38.8823 33.495ZM38.8823 28.41C40.3223 28.41 41.4923 27.885 42.3923 26.835C43.3223 25.785 43.7873 24.15 43.7873 21.93C43.7873 19.74 43.3223 18.135 42.3923 17.115C41.4923 16.065 40.3223 15.54 38.8823 15.54C37.4423 15.54 36.2723 16.065 35.3723 17.115C34.4723 18.135 34.0223 19.74 34.0223 21.93C34.0223 24.15 34.4723 25.785 35.3723 26.835C36.2723 27.885 37.4423 28.41 38.8823 28.41ZM54.7614 33V10.905H61.4214V14.73C62.4714 12.15 64.7214 10.725 68.1714 10.455L70.1514 10.32L70.5564 16.035L66.7314 16.44C63.3714 16.77 61.6914 18.48 61.6914 21.57V33H54.7614ZM85.4696 33.495C79.2596 33.495 76.1546 30.48 76.1546 24.45V15.99H71.9696V10.905H76.1546V4.425H82.9496V10.905H89.4746V15.99H82.9496V24.18C82.9496 25.44 83.2346 26.385 83.8046 27.015C84.4046 27.645 85.3496 27.96 86.6396 27.96C87.0296 27.96 87.4346 27.915 87.8546 27.825C88.3046 27.735 88.7846 27.615 89.2946 27.465L90.2846 32.415C89.6546 32.745 88.9046 33 88.0346 33.18C87.1646 33.39 86.3096 33.495 85.4696 33.495ZM94.3522 33V15.99H90.1672V10.905H94.3522C94.4122 7.785 95.3122 5.445 97.0522 3.885C98.8222 2.295 101.507 1.395 105.107 1.185L107.582 1.005L107.987 5.955L105.872 6.09C104.132 6.18 102.902 6.555 102.182 7.215C101.492 7.845 101.147 8.82 101.147 10.14V10.905H106.907V15.99H101.147V33H94.3522ZM119.917 33.495C117.548 33.495 115.478 33.03 113.708 32.1C111.968 31.14 110.618 29.805 109.657 28.095C108.698 26.355 108.218 24.3 108.218 21.93C108.218 19.59 108.698 17.565 109.657 15.855C110.618 14.115 111.968 12.78 113.708 11.85C115.478 10.92 117.548 10.455 119.917 10.455C122.288 10.455 124.343 10.92 126.083 11.85C127.853 12.78 129.218 14.115 130.178 15.855C131.168 17.565 131.663 19.59 131.663 21.93C131.663 24.3 131.168 26.355 130.178 28.095C129.218 29.805 127.853 31.14 126.083 32.1C124.343 33.03 122.288 33.495 119.917 33.495ZM119.917 28.41C121.358 28.41 122.528 27.885 123.428 26.835C124.358 25.785 124.823 24.15 124.823 21.93C124.823 19.74 124.358 18.135 123.428 17.115C122.528 16.065 121.358 15.54 119.917 15.54C118.478 15.54 117.308 16.065 116.408 17.115C115.508 18.135 115.058 19.74 115.058 21.93C115.058 24.15 115.508 25.785 116.408 26.835C117.308 27.885 118.478 28.41 119.917 28.41ZM144.032 33.495C141.182 33.495 139.097 32.76 137.777 31.29C136.457 29.79 135.797 27.57 135.797 24.63V1.275H142.592V24.36C142.592 26.76 143.657 27.96 145.787 27.96C146.117 27.96 146.432 27.945 146.732 27.915C147.062 27.885 147.377 27.825 147.677 27.735L147.587 33C146.447 33.33 145.262 33.495 144.032 33.495ZM150.512 6.63V0.284997H157.847V6.63H150.512ZM150.782 33V10.905H157.577V33H150.782ZM173.443 33.495C171.073 33.495 169.003 33.03 167.233 32.1C165.493 31.14 164.143 29.805 163.183 28.095C162.223 26.355 161.743 24.3 161.743 21.93C161.743 19.59 162.223 17.565 163.183 15.855C164.143 14.115 165.493 12.78 167.233 11.85C169.003 10.92 171.073 10.455 173.443 10.455C175.813 10.455 177.868 10.92 179.608 11.85C181.378 12.78 182.743 14.115 183.703 15.855C184.693 17.565 185.188 19.59 185.188 21.93C185.188 24.3 184.693 26.355 183.703 28.095C182.743 29.805 181.378 31.14 179.608 32.1C177.868 33.03 175.813 33.495 173.443 33.495ZM173.443 28.41C174.883 28.41 176.053 27.885 176.953 26.835C177.883 25.785 178.348 24.15 178.348 21.93C178.348 19.74 177.883 18.135 176.953 17.115C176.053 16.065 174.883 15.54 173.443 15.54C172.003 15.54 170.833 16.065 169.933 17.115C169.033 18.135 168.583 19.74 168.583 21.93C168.583 24.15 169.033 25.785 169.933 26.835C170.833 27.885 172.003 28.41 173.443 28.41Z"
                  fill="#232B2B"
                />
              </g>
            </svg>
            {/* link to github repo */}
            <a style={{ textDecoration: "none" }} href="https://github.com/tab87tt/portfolio-front">
              <div
                style={{
                  borderWidth: 2.5,
                  borderStyle: "solid",
                  borderColor: "#FA3663",
                  height: "3.5vw",
                  width: "15vw",
                  color: "#FA3663",
                  fontSize: "2vw",
                  fontWeight: "700",
                  paddingTop: "0.6vw",
                  marginTop: "1.6vw",
                  cursor: "pointer",
                }}
              >
                GITHUB
              </div>
            </a>
          </div>
          <div style={styles.description}>
            <p style={styles.heading}></p>
            <p style={styles.paragraph2}>
              This site is my most recent project, I feel it most accurately
              reflects my current understanding of UI/UX design principles. The
              front end is built inside Reactjs using javascript, html and css.
              I have used several of the more advanced Reactjs features
              throughout, including functional hooks, the project code is split
              and lazy loaded in order to optimise loading times.
              <br />
              <br />
              The site is hosted on my own Linux/GNU Ubuntu cloud server, while
              more challenging, I chose this option due to the freedom and
              flexibility it offers. While also allowing me the opportunity to
              learn Linux Bash, task automation and cloud server security
              protocols including: NGINX reverse proxies, firewalls, SSH and
              SSL.
              <br />
              <br />
              The back end server is built inside of Nodejs, using Express. Feel
              free to check out my{" "}
              <a style={styles.link} href="https://github.com/tab87tt/portfolio-front">
                GitHub
              </a>{" "}
              linked above for more details.
            </p>
          </div>
          <div style={styles.videoContainerOuter2}>
            <div style={styles.videoContainerInner2}>
              {!ready && (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <img
                    src={loadingScreen}
                    style={{ width: "100%", height: "100%" }}
                    alt="Loading Video..."
                  />
                </div>
              )}
              <ReactPlayer
                style={{ position: "absolute", top: 0, left: 0 }}
                loop
                controls
                width="100%"
                height="100%"
                onReady={onReadyHandler}
                url="https://youtu.be/DoeAO5I4Dm0"
              />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PortfolioDetailsScreen;

const styles = {
  container: {
    //note background clip at bottom, background color hightlight this
    //backgroundColor: "#f9f1f1",
    minHeight: "100vh",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  videoContainerOuter: {
    backgroundColor: "#424f6a",
    height: `${(75 / 1.7) * 1}vw`,
    width: "73.5vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3vh",
    zIndex: 1,
  },
  videoContainerInner: {
    height: `${(73 / 1.7) * 1}vw`,
    width: "72.5vw",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2vh",
    marginTop: "2vh",
    zIndex: 2,
    position: "relative",
  },
  paragraph: {
    width: "73.5vw",
    margin: "auto",
    paddingBottom: "3vh",
    textAlign: "left",
  },
  videoContainerOuter2: {
    backgroundColor: "#424f6a",
    height: `${(85 / 1.7) * 1}vw`,
    width: "85vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3vh",
    zIndex: 1,
  },
  videoContainerInner2: {
    height: `${(85 / 1.7) * 1}vw`,
    width: "85vw",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2vh",
    marginTop: "2vh",
    zIndex: 2,
    position: "relative",
  },
  paragraph2: {
    width: "85vw",
    margin: "auto",
    paddingBottom: "3vh",
    textAlign: "left",
  },
  projectName: {
    marginTop: "1vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2.5vw",
  },
  projectName2: {
    marginTop: "1vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1.5vw",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#FA3663",
  },
};
