import { Route, Redirect } from "react-router-dom";

export const PrivateRouteList = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("s11g2") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
