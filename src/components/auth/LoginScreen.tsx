import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  login,
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../redux/actions/auth";
import { AuthPayload } from "../../redux/types/types";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChanges, reset] = useForm({
    email: "dev@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    console.log("work step 1");
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <h3 className="auth__title mb-2">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="auth__input mb-2"
          value={email}
          onChange={handleInputChanges}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="off"
          className="auth__input mb-2"
          value={password}
          onChange={handleInputChanges}
        />

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks pt-4 pb-4">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
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
