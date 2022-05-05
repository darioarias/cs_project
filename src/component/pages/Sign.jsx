import "./Sign.css";
import Sign from "./Sign.js";
import axios from "axios";
import { useState } from "react";

export function SignForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("you need to fill in both, password and username");
      return;
    }
    // console.log({ username, password });

    const response = await axios
      .post(
        "http://127.0.0.1:5000/auth/v1/signin/",
        JSON.stringify({ username, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        console.log("data", data.status);
      })
      .catch((e) => {
        setError(e.response.data.message);
        console.log("error: ", e.response);
      });

    console.log(response);
  };
  return (
    <main>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <p>{error}</p>
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="btn solid"
                onClick={onsubmit}
              />
              <div className="social-media">
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>

            <form
              action="https://kit.fontawesome.com/64d58efce2.js"
              className="sign-up-form"
            >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <div className="social-media">
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="https://kit.fontawesome.com/64d58efce2.js"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onMouseDown={Sign}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Already a User ?</h3>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onMouseDown={Sign}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignForm;
