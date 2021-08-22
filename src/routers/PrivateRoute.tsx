import React from "react";
import { Redirect, Route } from "react-router";

interface PrivateRouteProps {
  exact?: boolean;
  isAuthenticated: boolean;
  path?: string | string[];
  component: React.FC;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  component,
  ...rest
}) => {
  const Component = component;
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    ></Route>
  );
};
