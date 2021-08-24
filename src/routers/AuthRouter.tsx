import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  console.log("Cargando");
  return (
    <div className="auth__main">
      <h2 className="auth__title_app mb-4 animate__animated animate__fadeInDown animate__faster">
        Journal <span>App</span>
      </h2>
      <div className="auth_box-container animate__animated animate__fadeInUp animate__faster">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
