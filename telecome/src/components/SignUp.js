import { useState } from "react";
import styles from "../styles/SignUp.module.css"; // Import CSS module
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import form3 from "../assets/formsimg3.png";

export default function App() {
  const [res, setRes] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setRes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (res.email === "" || res.password === "" || res.confirmPassword === "") {
      setMessage("Please fill in all the fields");
    } else if (res.password === res.confirmPassword) {
      const user = {
        name: res.username,
        email: res.email,
        password: res.password,
      };
      await axios
        .post(
          "https://pfe-telecome-ilyes-b-h-d.vercel.app/api/auth/register",
          user
        )
        .then((response) => {
          console.log(response.data);
        });
      setMessage("Successfully signed up");
    } else {
      setMessage("Passwords do not match");
    }

    // Clear message after 2 seconds
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  // Function to determine the CSS class for the message based on its content
  function getMessageClassName() {
    if (message.includes("Successfully")) {
      return styles["success-message"];
    } else if (message.includes("Passwords")) {
      return styles["error-message"];
    }
    return styles["info-message"];
  }

  return (
    <>
      <Header />
      <div>
      <h2 className="signupHeader" style={{ textAlign: 'center', margin: '60px' }}>Sign UP</h2>
        <div className={styles.container}>
          <div className={styles["image-container"]}>
            <img src={form3} alt="Imagee" />
          </div>
          <div className={styles["form-container"]}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email address"
                className={styles["form--input"]}
                onChange={handleChange}
                name="email"
                value={res.email}
              />
              <input
                type="username"
                placeholder="username"
                className={styles["form--input"]}
                onChange={handleChange}
                name="username"
                value={res.username}
              />
              <input
                type="password"
                placeholder="Password"
                className={styles["form--input"]}
                onChange={handleChange}
                name="password"
                value={res.password}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className={styles["form--input"]}
                onChange={handleChange}
                name="confirmPassword"
                value={res.confirmPassword}
              />
              <button className={styles["form--submit"]}>Sign up</button>
            </form>
          </div>
        </div>
        <div className={styles["message-container"]}>
          {message && (
            <div className={`${styles.message} ${getMessageClassName()}`}>
              {message}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
