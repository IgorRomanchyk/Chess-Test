import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "./useAuth";
import { passwordArr } from "../pages/Home";
/* eslint-disable react/jsx-props-no-spreading */

const PrivateRoute = ({ ...rest }) => {
  const auth = useAuth();

  if (auth.checkAuth || passwordArr.length) return <Route {...rest} />;
  return <Redirect to="/" />;
};

export default PrivateRoute;
