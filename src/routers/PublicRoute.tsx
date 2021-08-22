import React from "react";
import { Redirect, Route } from "react-router";

interface PublicRouteProps {
  exact?: boolean;
  isAuthenticated: boolean;
  path?: string | string[];
  component: React.FC;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({
  isAuthenticated,
  component,
  ...rest
}: PublicRouteProps) => {
  const Component = component;
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    ></Route>
  );
};
