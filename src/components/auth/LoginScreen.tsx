import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-2">Login</h3>
      <form>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="auth__input mb-2"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="off"
          className="auth__input mb-2"
        />

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks pt-4 pb-4">
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
