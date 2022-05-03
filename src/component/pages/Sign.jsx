import "./Sign.css";
import Sign from "./Sign.js"

export function SignForm(){
  return (
    <main>
          <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                  <form action="#" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                      <i className="fas fa-user"></i>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-lock"></i>
                      <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
                    <div className="social-media">
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
                        <i className="fab fa-google"></i>
                      </a>
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </form>
                  <form action="https://kit.fontawesome.com/64d58efce2.js" className="sign-up-form">
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
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
                        <i className="fab fa-google"></i>
                      </a>
                      <a href="https://kit.fontawesome.com/64d58efce2.js" className="social-icon">
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
                    <button className="btn transparent" id="sign-up-btn" onMouseDown={Sign}>
                      Sign up
                    </button>
                  </div>
                </div>
                <div className="panel right-panel">
                  <div className="content">
                    <h3>Already a User ?</h3>
                    <button className="btn transparent" id="sign-in-btn" onMouseDown={Sign}>
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
          </div>
    </main>
  );
};

export default SignForm;
