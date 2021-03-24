import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const messageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const ContactMe = () => {
  //form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //contact message send status
  const [messageSent, setMessageSent] = useState(false);
  const [messageUnsent, setMessageUnsent] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name && email && message) {
      //add email js code here from email.js
      
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 3000);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setMessageUnsent(true);
      setTimeout(() => setMessageUnsent(false), 3000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.contactMeTitle}>
        <svg
          style={{ width: "27vw" }}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
          viewBox="0 0 252 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Contact Me">
            <path
              id="."
              d="M251.24 30.751C251.24 31.2933 251.137 31.8037 250.929 32.2822C250.722 32.7448 250.435 33.1515 250.068 33.5024C249.717 33.8534 249.302 34.1245 248.824 34.3159C248.361 34.5233 247.859 34.627 247.316 34.627C246.79 34.627 246.288 34.5233 245.809 34.3159C245.347 34.1245 244.94 33.8534 244.589 33.5024C244.238 33.1515 243.959 32.7448 243.751 32.2822C243.544 31.8037 243.44 31.2933 243.44 30.751C243.44 30.2087 243.544 29.7062 243.751 29.2437C243.959 28.7651 244.238 28.3504 244.589 27.9995C244.94 27.6486 245.347 27.3774 245.809 27.186C246.288 26.9787 246.79 26.875 247.316 26.875C247.859 26.875 248.361 26.9787 248.824 27.186C249.302 27.3774 249.717 27.6486 250.068 27.9995C250.435 28.3504 250.722 28.7651 250.929 29.2437C251.137 29.7062 251.24 30.2087 251.24 30.751Z"
              fill="#FA3663"
            />
            <path
              id="Contact Me_2"
              d="M16.585 33.495C13.165 33.495 10.24 32.82 7.81 31.47C5.38 30.12 3.505 28.23 2.185 25.8C0.895 23.34 0.25 20.445 0.25 17.115C0.25 13.815 0.895 10.95 2.185 8.52C3.505 6.06 5.38 4.155 7.81 2.805C10.24 1.455 13.165 0.779999 16.585 0.779999C18.685 0.779999 20.695 1.11 22.615 1.77C24.535 2.43 26.11 3.33 27.34 4.47L25.18 10.005C23.83 8.955 22.465 8.19 21.085 7.71C19.735 7.2 18.31 6.945 16.81 6.945C13.78 6.945 11.485 7.83 9.925 9.6C8.395 11.34 7.63 13.845 7.63 17.115C7.63 20.385 8.395 22.905 9.925 24.675C11.485 26.445 13.78 27.33 16.81 27.33C18.31 27.33 19.735 27.09 21.085 26.61C22.465 26.1 23.83 25.32 25.18 24.27L27.34 29.805C26.11 30.915 24.535 31.815 22.615 32.505C20.695 33.165 18.685 33.495 16.585 33.495ZM40.3657 33.495C37.9957 33.495 35.9257 33.03 34.1557 32.1C32.4157 31.14 31.0657 29.805 30.1057 28.095C29.1457 26.355 28.6657 24.3 28.6657 21.93C28.6657 19.59 29.1457 17.565 30.1057 15.855C31.0657 14.115 32.4157 12.78 34.1557 11.85C35.9257 10.92 37.9957 10.455 40.3657 10.455C42.7357 10.455 44.7907 10.92 46.5307 11.85C48.3007 12.78 49.6657 14.115 50.6257 15.855C51.6157 17.565 52.1107 19.59 52.1107 21.93C52.1107 24.3 51.6157 26.355 50.6257 28.095C49.6657 29.805 48.3007 31.14 46.5307 32.1C44.7907 33.03 42.7357 33.495 40.3657 33.495ZM40.3657 28.41C41.8057 28.41 42.9757 27.885 43.8757 26.835C44.8057 25.785 45.2707 24.15 45.2707 21.93C45.2707 19.74 44.8057 18.135 43.8757 17.115C42.9757 16.065 41.8057 15.54 40.3657 15.54C38.9257 15.54 37.7557 16.065 36.8557 17.115C35.9557 18.135 35.5057 19.74 35.5057 21.93C35.5057 24.15 35.9557 25.785 36.8557 26.835C37.7557 27.885 38.9257 28.41 40.3657 28.41ZM56.2448 33V10.905H62.9048V14.145C63.6548 12.945 64.6598 12.03 65.9198 11.4C67.1798 10.77 68.5898 10.455 70.1498 10.455C72.7598 10.455 74.7098 11.22 75.9998 12.75C77.2898 14.25 77.9348 16.575 77.9348 19.725V33H71.1398V20.04C71.1398 18.51 70.8548 17.415 70.2848 16.755C69.7148 16.065 68.8748 15.72 67.7648 15.72C66.3248 15.72 65.1698 16.17 64.2998 17.07C63.4598 17.97 63.0398 19.17 63.0398 20.67V33H56.2448ZM93.8525 33.495C87.6425 33.495 84.5375 30.48 84.5375 24.45V15.99H80.3525V10.905H84.5375V4.425H91.3325V10.905H97.8575V15.99H91.3325V24.18C91.3325 25.44 91.6175 26.385 92.1875 27.015C92.7875 27.645 93.7325 27.96 95.0225 27.96C95.4125 27.96 95.8175 27.915 96.2375 27.825C96.6875 27.735 97.1675 27.615 97.6775 27.465L98.6675 32.415C98.0375 32.745 97.2875 33 96.4175 33.18C95.5475 33.39 94.6925 33.495 93.8525 33.495ZM108.671 33.495C107.021 33.495 105.566 33.18 104.306 32.55C103.046 31.92 102.041 31.065 101.291 29.985C100.571 28.905 100.211 27.69 100.211 26.34C100.211 24.75 100.631 23.475 101.471 22.515C102.311 21.555 103.676 20.88 105.566 20.49C107.456 20.07 109.961 19.86 113.081 19.86H114.701V19.095C114.701 17.775 114.401 16.845 113.801 16.305C113.201 15.735 112.181 15.45 110.741 15.45C109.541 15.45 108.266 15.645 106.916 16.035C105.596 16.395 104.276 16.95 102.956 17.7L101.111 13.155C101.891 12.645 102.836 12.18 103.946 11.76C105.086 11.34 106.271 11.025 107.501 10.815C108.731 10.575 109.901 10.455 111.011 10.455C114.431 10.455 116.981 11.235 118.661 12.795C120.341 14.325 121.181 16.71 121.181 19.95V33H114.836V29.67C114.386 30.84 113.621 31.77 112.541 32.46C111.491 33.15 110.201 33.495 108.671 33.495ZM110.201 28.95C111.461 28.95 112.526 28.515 113.396 27.645C114.266 26.775 114.701 25.65 114.701 24.27V23.37H113.126C110.816 23.37 109.181 23.58 108.221 24C107.261 24.39 106.781 25.08 106.781 26.07C106.781 26.91 107.066 27.6 107.636 28.14C108.236 28.68 109.091 28.95 110.201 28.95ZM137.005 33.495C134.605 33.495 132.505 33.03 130.705 32.1C128.935 31.14 127.57 29.79 126.61 28.05C125.65 26.31 125.17 24.255 125.17 21.885C125.17 19.515 125.65 17.475 126.61 15.765C127.57 14.055 128.935 12.75 130.705 11.85C132.505 10.92 134.605 10.455 137.005 10.455C138.415 10.455 139.84 10.665 141.28 11.085C142.72 11.505 143.89 12.105 144.79 12.885L142.9 17.565C142.15 16.965 141.31 16.5 140.38 16.17C139.45 15.81 138.55 15.63 137.68 15.63C135.91 15.63 134.53 16.185 133.54 17.295C132.58 18.375 132.1 19.92 132.1 21.93C132.1 23.91 132.58 25.47 133.54 26.61C134.53 27.72 135.91 28.275 137.68 28.275C138.52 28.275 139.405 28.11 140.335 27.78C141.295 27.45 142.15 26.97 142.9 26.34L144.79 31.02C143.89 31.8 142.72 32.415 141.28 32.865C139.84 33.285 138.415 33.495 137.005 33.495ZM158.716 33.495C152.506 33.495 149.401 30.48 149.401 24.45V15.99H145.216V10.905H149.401V4.425H156.196V10.905H162.721V15.99H156.196V24.18C156.196 25.44 156.481 26.385 157.051 27.015C157.651 27.645 158.596 27.96 159.886 27.96C160.276 27.96 160.681 27.915 161.101 27.825C161.551 27.735 162.031 27.615 162.541 27.465L163.531 32.415C162.901 32.745 162.151 33 161.281 33.18C160.411 33.39 159.556 33.495 158.716 33.495ZM179.264 33V1.275H185.069L195.779 20.76L206.444 1.275H212.159V33H205.814V13.65L197.624 28.23H193.709L185.564 13.785V33H179.264ZM229.482 33.495C226.872 33.495 224.622 33.03 222.732 32.1C220.872 31.14 219.432 29.805 218.412 28.095C217.422 26.355 216.927 24.315 216.927 21.975C216.927 19.695 217.407 17.7 218.367 15.99C219.357 14.25 220.692 12.9 222.372 11.94C224.082 10.95 226.047 10.455 228.267 10.455C231.477 10.455 234.027 11.475 235.917 13.515C237.807 15.525 238.752 18.255 238.752 21.705V23.415H223.407C223.647 25.155 224.277 26.43 225.297 27.24C226.347 28.02 227.787 28.41 229.617 28.41C230.817 28.41 232.032 28.23 233.262 27.87C234.492 27.51 235.602 26.955 236.592 26.205L238.392 30.75C237.282 31.59 235.917 32.265 234.297 32.775C232.707 33.255 231.102 33.495 229.482 33.495ZM228.537 14.955C227.097 14.955 225.927 15.39 225.027 16.26C224.157 17.13 223.617 18.345 223.407 19.905H233.127C232.947 16.605 231.417 14.955 228.537 14.955Z"
              fill="#262626"
            />
          </g>
        </svg>
      </div>
      <form onSubmit={submitHandler}>
        <div style={styles.formContainer}>
          <div style={styles.formInputsContainer}>
            <div style={styles.input}>
              <div style={styles.title}>
                NAME:
                <AnimatePresence>
                  {messageSent && (
                    <motion.div
                      variants={messageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={styles.messageSent}
                    >
                      Message Sent
                    </motion.div>
                  )}
                  {messageUnsent && (
                    <motion.div
                      variants={messageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={styles.messageUnsent}
                    >
                      Message Not Sent: Include All Fields
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div>
                <input
                  style={styles.inputBox}
                  name="name"
                  value={name}
                  onChange={nameChangeHandler}
                  type="text"
                  placeholder="Enter your name here"
                />
              </div>
            </div>
            <div style={styles.input}>
              <div style={styles.title}>EMAIL:</div>
              <div>
                <input
                  style={styles.inputBox}
                  name="email"
                  value={email}
                  onChange={emailChangeHandler}
                  type="text"
                  placeholder="Enter your email here"
                />
              </div>
            </div>
            <div style={styles.inputMessage}>
              <div style={styles.submitContainer}>
                <div style={styles.title}>MESSAGE:</div>
                <motion.input
                  type="submit"
                  value="SEND ENQUIRY"
                  whileTap={{
                    border: "none",
                    outline: "none",
                    scale: 0.95,
                    backgroundColor: "#88D8B0",
                    color: "#FC3663",
                  }}
                  style={styles.submit}
                />
              </div>
              <div>
                <textarea
                  style={styles.textArea}
                  name="message"
                  value={message}
                  onChange={messageChangeHandler}
                  type="text"
                  placeholder="Enter your message here"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;

const styles = {
  container: {
    height: "40vw",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  contactMeTitle: {
    position: "absolute",
    top: "10%",
    left: "36%",
  },
  inputBox: {
    width: "40vw",
    padding: "1vw 1.5vw",
    margin: "0.9vw 0",
    display: "inline-block",
    border: "0.1vw solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    fontFamily: "Segoe UI",
    fontSize: "1.9vw",
  },
  textArea: {
    width: "40vw",
    height: "15vw",
    padding: "1vw 1.5vw",
    margin: "0.5vw 0",
    display: "inline-block",
    border: "0.1vw solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    fontFamily: "Segoe UI",
    fontSize: "1.9vw",
  },
  title: {
    display: "flex",
    fontWeight: "bold",
    color: "#262626",
    fontSize: "1.9vw",
  },
  formContainer: {
    width: "40vw",
    marginTop: "6vw",
    paddingTop: "20vw",
    paddingBottom: "24vw",
  },
  inputMessage: {
    position: "absolute",
    top: "34vw",
    left: "30%",
    width: "40vw",
  },
  submitContainer: {
    display: "flex",
  },
  submit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5vw",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#FC3663",
    marginLeft: "10vw",
    borderRadius: "4px",
    width: "22vw",
    padding: "0.6vw",
    paddingTop: "0.8vw",
    letterSpacing: "0.1vw",
    cursor: "pointer",
    userSelect: "none",
    border: "none",
    outline: "none",
  },
  messageSent: {
    color: "#88D8B0",
    paddingLeft: "21vw",
  },
  messageUnsent: {
    color: "#FC3663",
    paddingLeft: "1vw",
  },
  nameMessageContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};
