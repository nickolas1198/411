import React from "react";
const valueContext = React.createContext({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {},
});
export default valueContext;
