import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { setErrorAction, unSetErrorAction } from "../../redux/actions/ui";
import { AppState } from "../../redux/store/store";
import { startRegisterWithEmailPasswordName } from "../../redux/actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state: AppState) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { name, email, password, confirmpassword } = formValues;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction({ msgError: "name is required" }));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction({ msgError: "email is invalid" }));
      return false;
    } else if (password !== confirmpassword || password.length < 5) {
      dispatch(
        setErrorAction({
          msgError:
            "Password sholud be at least 6 characters and match each other",
        })
      );
      return false;
    }
    dispatch(unSetErrorAction());
    return true;
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName({ email, password, name }));
    }
  };

  return (
    <>
      <h3 className="auth__title mb-2">Register</h3>
      {msgError && <div className="auth__alert-error">Error: {msgError}</div>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input mb-2"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="auth__input mb-2"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="off"
          className="auth__input mb-2"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm pasword"
          name="confirmpassword"
          autoComplete="off"
          className="auth__input mb-2"
          value={confirmpassword}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block mb-3"
          disabled={loading}
        >
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
