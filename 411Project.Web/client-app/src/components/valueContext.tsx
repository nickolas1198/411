import React from "react";
const valueContext = React.createContext({
  loggedIn: true,
  setLoggedIn: (loggedIn: boolean) => {},
});
export default valueContext;
