import { useState } from "react";
import "./Sign.css";
import Sign from "./Sign.js";
import { auth_instance, resources_instance } from "../../networking/axios.js";
import FlashMessage from "./flash_message";
// import { ReactSession } from "react-client-session";
// import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
export function SignForm() {
  const cookies = new Cookies();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showFlash, setShowFlash] = useState(false);
  const [feedback, setFeedback] = useState("");
  // const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const signinOnSubmit = (e = new Event()) => {
    e.preventDefault();
    // const url = `${process.env.REACT_APP_API_ROOT_URL}/signin/`;
    // ReactSession.remove("token");
    // if (ReactSession.get("token")) {
    //   console.log("already signed in");
    //   return;
    // }

    auth_instance()
      .post("/signin/", { username, password })
      .then(({ data: { access_token, message } }) => {
        // save token, maybe in cookie or redux
        // ReactSession.set("token", access_token);
        // ReactSession.set("username", username);
        // setCookie("token", access_token, { maxAge: 5000 });

        cookies.set("token", access_token, {
          maxAge: process.env.REACT_APP_COOKIES_MAX_AGE,
        });

        cookies.set("username", username, {
          maxAge: process.env.REACT_APP_COOKIES_MAX_AGE,
        });

        setFeedback(message);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          setFeedback(error.response.data.message);
        } else {
          setFeedback(error.message);
          console.log("err", error);
        }
      })
      .finally(() => {
        setShowFlash(true);
      });
  };

  const signupOnSubmit = (e = new Event()) => {
    e.preventDefault();
    resources_instance()
      .post("/users/", {
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      })
      .then(({ data }) => {
        console.log(data);
        // ReactSession.set("username", username);
        setFeedback("account created. Be sure to verify email.");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          setFeedback(error.response.data.message);
        } else setFeedback(error.message);
      })
      .finally(() => {
        setShowFlash(true);
      });
  };
  // console.log(cookies.remove("_xsrf"));
  console.log(cookies.getAll());
  return (
    <main>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Login"
                onClick={signinOnSubmit}
                className="btn solid"
              />

              {showFlash && (
                <div>
                  <FlashMessage
                    duration={2000}
                    persistOnHover={true}
                    isShowing={setShowFlash}
                  >
                    {feedback}
                  </FlashMessage>
                </div>
              )}

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
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(evt) => setFirstName(evt.target.value)}
                  value={firstName}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(evt) => setLastName(evt.target.value)}
                  value={lastName}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(evt) => setUsername(evt.target.value)}
                  value={username}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(evt) => setEmail(evt.target.value)}
                  value={email}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(evt) => setPassword(evt.target.value)}
                  value={password}
                />
              </div>
              <input
                type="submit"
                className="btn"
                value="Sign up"
                onClick={signupOnSubmit}
              />
              {showFlash && (
                <div>
                  <FlashMessage
                    duration={2000}
                    persistOnHover={true}
                    isShowing={setShowFlash}
                  >
                    {feedback}
                  </FlashMessage>
                </div>
              )}

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
