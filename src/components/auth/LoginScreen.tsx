import React, { isValidElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  startGoogleLoginAction,
  startLoginEmailPasswordAction,
} from "../../redux/actions/auth";

import validator from "validator";
import { setErrorAction, unSetErrorAction } from "../../redux/actions/ui";
import { AppState } from "../../redux/store/store";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state: AppState) => state.ui);

  const [formValues, handleInputChanges, reset] = useForm({
    email: "dev@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const isFormValid = (): boolean => {
    if (email.trim().length === 0 || !validator.isEmail(email)) {
      dispatch(setErrorAction({ msgError: "Email is invalid" }));
      return false;
    } else if (password.trim().length === 0) {
      dispatch(setErrorAction({ msgError: "Password is required" }));
      return false;
    }

    dispatch(unSetErrorAction());

    return true;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailPasswordAction(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLoginAction());
  };

  return (
    <>
      <h3 className="auth__title mb-2">Login</h3>

      {msgError && <div className="auth__alert-error">Error: {msgError}</div>}
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

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
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
