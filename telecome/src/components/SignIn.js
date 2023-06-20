import { useState } from "react";
import styles from "../styles/SignIn.module.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import form3 from "../assets/formsimg3.png";

export default function SignIn() {
  const [res, setRes] = useState({
    email: "",
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

    if (res.email === "" || res.password === "") {
      setMessage("Please fill in all the fields");
    }

    // Clear message after 2 seconds
    setTimeout(() => {
      setMessage("");
    }, 2000);

    const user = {
      email: res.email,
      password: res.password,
    };

    await axios
      .post("https://pfe-telecome-ilyes-b-h-d.vercel.app/api/auth/login", user)
      .then((response) => {
        console.log(response.data);
      });
  };
  // Function to determine the CSS class for the message based on its content
  function getMessageClassName() {
    if (message.includes("Successfully")) {
      return styles["success-message"];
    } else if (message.includes("Incorrect")) {
      return styles["error-message"];
    }
    return styles["info-message"];
  }

  return (
    <>
      <Header />
      <div className="signinn">
      <h2 className="signinHeader" style={{ textAlign: 'center', margin: '80px' }}>Sign In</h2>

        <div className={styles.container}>
          <div className={styles["image-container"]}>
            <img src={form3} alt="Image" />
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
                type="password"
                placeholder="Password"
                className={styles["form--input"]}
                onChange={handleChange}
                name="password"
                value={res.password}
              />

              <button className={styles["form--submit"]}>Sign In</button>
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
