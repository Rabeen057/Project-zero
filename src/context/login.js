import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import "./login.css";
function Login() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <h1 className={`text-${theme}`}>Login</h1>
      <label htmlFor="firstName">First Name</label>
      <input type="text" />
    </div>
  );
}

export default Login;
