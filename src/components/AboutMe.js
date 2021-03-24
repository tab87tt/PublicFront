import React from "react";
import image from "../images/Terry-sq-b&w.jpg";

const AboutMe = () => {
  return (
    <div style={styles.container}>
      <div style={styles.aboutMe}>
        <svg
          style={{ width: "26vw" }}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
          viewBox="0 0 223 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="About Me">
            <path
              id="."
              d="M222.24 29.751C222.24 30.2933 222.137 30.8037 221.929 31.2822C221.722 31.7448 221.435 32.1515 221.068 32.5024C220.717 32.8534 220.302 33.1245 219.824 33.3159C219.361 33.5233 218.859 33.627 218.316 33.627C217.79 33.627 217.288 33.5233 216.809 33.3159C216.347 33.1245 215.94 32.8534 215.589 32.5024C215.238 32.1515 214.959 31.7448 214.751 31.2822C214.544 30.8037 214.44 30.2933 214.44 29.751C214.44 29.2087 214.544 28.7062 214.751 28.2437C214.959 27.7651 215.238 27.3504 215.589 26.9995C215.94 26.6486 216.347 26.3774 216.809 26.186C217.288 25.9787 217.79 25.875 218.316 25.875C218.859 25.875 219.361 25.9787 219.824 26.186C220.302 26.3774 220.717 26.6486 221.068 26.9995C221.435 27.3504 221.722 27.7651 221.929 28.2437C222.137 28.7062 222.24 29.2087 222.24 29.751Z"
              fill="#FA3663"
            />
            <path
              id="About Me_2"
              d="M0.55 32L15.13 0.274998H20.755L35.335 32H28.315L25.345 25.115H10.54L7.615 32H0.55ZM17.875 7.7L12.88 19.67H23.05L17.965 7.7H17.875ZM51.1268 32.495C49.5668 32.495 48.1568 32.15 46.8968 31.46C45.6668 30.77 44.7518 29.855 44.1518 28.715V32H37.4918V0.274998H44.2868V12.875C44.9468 11.825 45.8768 11 47.0768 10.4C48.3068 9.77 49.6568 9.455 51.1268 9.455C53.0468 9.455 54.7268 9.92 56.1668 10.85C57.6368 11.78 58.7768 13.1 59.5868 14.81C60.3968 16.52 60.8018 18.56 60.8018 20.93C60.8018 23.3 60.3968 25.355 59.5868 27.095C58.7768 28.805 57.6368 30.14 56.1668 31.1C54.7268 32.03 53.0468 32.495 51.1268 32.495ZM49.1018 27.41C50.5418 27.41 51.7118 26.885 52.6118 25.835C53.5118 24.785 53.9618 23.15 53.9618 20.93C53.9618 18.74 53.5118 17.135 52.6118 16.115C51.7118 15.065 50.5418 14.54 49.1018 14.54C47.6318 14.54 46.4468 15.065 45.5468 16.115C44.6468 17.135 44.1968 18.74 44.1968 20.93C44.1968 23.15 44.6468 24.785 45.5468 25.835C46.4468 26.885 47.6318 27.41 49.1018 27.41ZM75.5777 32.495C73.2077 32.495 71.1377 32.03 69.3677 31.1C67.6277 30.14 66.2777 28.805 65.3177 27.095C64.3577 25.355 63.8777 23.3 63.8777 20.93C63.8777 18.59 64.3577 16.565 65.3177 14.855C66.2777 13.115 67.6277 11.78 69.3677 10.85C71.1377 9.92 73.2077 9.455 75.5777 9.455C77.9477 9.455 80.0027 9.92 81.7427 10.85C83.5127 11.78 84.8777 13.115 85.8377 14.855C86.8277 16.565 87.3227 18.59 87.3227 20.93C87.3227 23.3 86.8277 25.355 85.8377 27.095C84.8777 28.805 83.5127 30.14 81.7427 31.1C80.0027 32.03 77.9477 32.495 75.5777 32.495ZM75.5777 27.41C77.0177 27.41 78.1877 26.885 79.0877 25.835C80.0177 24.785 80.4827 23.15 80.4827 20.93C80.4827 18.74 80.0177 17.135 79.0877 16.115C78.1877 15.065 77.0177 14.54 75.5777 14.54C74.1377 14.54 72.9677 15.065 72.0677 16.115C71.1677 17.135 70.7177 18.74 70.7177 20.93C70.7177 23.15 71.1677 24.785 72.0677 25.835C72.9677 26.885 74.1377 27.41 75.5777 27.41ZM99.6017 32.495C96.7817 32.495 94.6967 31.715 93.3467 30.155C92.0267 28.595 91.3667 26.255 91.3667 23.135V9.905H98.1617V23.315C98.1617 25.925 99.2867 27.23 101.537 27.23C102.827 27.23 103.877 26.78 104.687 25.88C105.527 24.95 105.947 23.735 105.947 22.235V9.905H112.742V32H106.127V28.985C104.657 31.325 102.482 32.495 99.6017 32.495ZM128.845 32.495C122.635 32.495 119.53 29.48 119.53 23.45V14.99H115.345V9.905H119.53V3.425H126.325V9.905H132.85V14.99H126.325V23.18C126.325 24.44 126.61 25.385 127.18 26.015C127.78 26.645 128.725 26.96 130.015 26.96C130.405 26.96 130.81 26.915 131.23 26.825C131.68 26.735 132.16 26.615 132.67 26.465L133.66 31.415C133.03 31.745 132.28 32 131.41 32.18C130.54 32.39 129.685 32.495 128.845 32.495ZM149.392 32V0.274998H155.197L165.907 19.76L176.572 0.274998H182.287V32H175.942V12.65L167.752 27.23H163.837L155.692 12.785V32H149.392ZM199.611 32.495C197.001 32.495 194.751 32.03 192.861 31.1C191.001 30.14 189.561 28.805 188.541 27.095C187.551 25.355 187.056 23.315 187.056 20.975C187.056 18.695 187.536 16.7 188.496 14.99C189.486 13.25 190.821 11.9 192.501 10.94C194.211 9.95 196.176 9.455 198.396 9.455C201.606 9.455 204.156 10.475 206.046 12.515C207.936 14.525 208.881 17.255 208.881 20.705V22.415H193.536C193.776 24.155 194.406 25.43 195.426 26.24C196.476 27.02 197.916 27.41 199.746 27.41C200.946 27.41 202.161 27.23 203.391 26.87C204.621 26.51 205.731 25.955 206.721 25.205L208.521 29.75C207.411 30.59 206.046 31.265 204.426 31.775C202.836 32.255 201.231 32.495 199.611 32.495ZM198.666 13.955C197.226 13.955 196.056 14.39 195.156 15.26C194.286 16.13 193.746 17.345 193.536 18.905H203.256C203.076 15.605 201.546 13.955 198.666 13.955Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div style={styles.aboutContainer}>
        <div style={styles.pictureBox}>
          <div style={styles.pictureContainer}>
            <img style={styles.image} src={image} alt="Terry b&w Profile" />
          </div>
          <div style={styles.textContainer}>
            <div style={styles.text}>
              <div style={styles.textBold}>LOCATION:</div>Sheffield, England
            </div>
            <div style={styles.text}>
              <div style={styles.textBold}>LANGUAGE:</div>English (native)
            </div>
          </div>
        </div>
        <div style={styles.aboutText}>
          Creative full stack developer with a flair for bringing innovative
          design into reality. Passionate about implementing UI/UX design
          principles in order to facilitate a user-friendly experience. Seeking
          opportunities to further develop my skills as part of a constant
          growth mindset. I wish to use my existing knowledge to help find
          elegant solutions that suit your software needs. Working as a
          developer my patient, determined and logical approach to problem
          solving have continued to serve me well. Over the last 10 years I have
          taught maths/science in schools and colleges while running my own
          photography business. This background has allowed me to successfully
          manage, structure and teach myself how to develop software.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

const styles = {
  container: {
    height: "52vw",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272525",
    position: "relative",
  },
  aboutMe: {
    position: "absolute",
    top: "10%",
    left: "36%",
  },
  aboutContainer: {
    backgroundColor: "#272525",
    width: "90vw",
    height: "28vw",
    marginTop: "9vw",
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pictureBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#212121",
    width: "32vw",
    height: "30vw",
    marginRight: "5vw",
  },
  pictureContainer: {
    width: "20vw",
    height: "20vw",
    borderRadius: "50%",
    borderStyle: "solid",
    borderColor: "#FA3663",
    marginBottom: "1vw",
    overflow: "hidden",
  },
  text: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    fontSize: "1.9vw",
  },
  textBold: {
    color: "white",
    marginRight: "1vw",
    fontSize: "1.9vw",
  },
  aboutText: {
    width: "50vw",
    marginRight: "2vw",
    color: "white",
    fontSize: "1.95vw",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "100%",
  },
};
