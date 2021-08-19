import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-2">Register</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input mb-2"
        />
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
        <input
          type="password"
          placeholder="Confirm pasword"
          name="confirmpass"
          autoComplete="off"
          className="auth__input mb-2"
        />

        <button type="submit" className="btn btn-primary btn-block mb-3">
          Login
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
