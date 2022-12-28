import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=key",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const createAccountHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=key", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const formSettingHandler = () => {
    setIsLoginForm((state) => {
      return !state;
    });
  };

  return (
    <>
      <div className={classes["home"]}>
        <Link to="/" className={classes["header-link"]}>
          <h1>News Website</h1>
        </Link>
      </div>

      <div className={classes["form-div"]}>
        <form className={classes["form"]}>
          {isLoginForm ? <h2>Login</h2> : <h2>Create Account</h2>}
          <input
            type="email"
            ref={emailRef}
            className={classes["email-input"]}
            placeholder="Email"
          ></input>
          <input
            type="password"
            ref={passwordRef}
            className={classes["password-input"]}
            placeholder="Password"
          ></input>

          {isLoginForm ? (
            <button onClick={loginHandler} className={classes.button}>
              Login
            </button>
          ) : (
            <button onClick={createAccountHandler} className={classes.button}>
              Create Account
            </button>
          )}
          {isLoginForm ? (
            <p
              onClick={formSettingHandler}
              style={{ cursor: "pointer" }}
              className={classes["switch-auth-button"]}
            >
              Don't Have An Account? Create Account.
            </p>
          ) : (
            <p
              onClick={formSettingHandler}
              style={{ cursor: "pointer" }}
              className={classes["switch-auth-button"]}
            >
              Already Have An Account? Login.
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default AuthPage;
