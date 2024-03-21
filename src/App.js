import logo from "./logo.svg";
import "./App.css";
import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";
import React, { useState } from "react";
import Login from "./context/login";
import Counter from "./Reducer/counterReducer";
import Form from "./component/Focus";
import Api from "./component/api";
import { createPortal } from "react-dom";
import UncontrolledComponent from "./Uncontrolled";
import PostData from "./component/postData";

function App() {
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme);

  return (
    <div className="App" id="App">
      <ThemeContext.Provider value={mode}>
        <h1>Project zero </h1>
        <Login />
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`bth-${mode}`}
        >
          Dark Mode
        </button>
      </ThemeContext.Provider>
      <br />
      <br />
      <Form />
      <br />
      <br />
      <Counter />
      <Api />
      <UncontrolledComponent />
      <PostData />
      <>
        <h1>Fragment example</h1>
        {createPortal(
          <p>This child is present inside of the division</p>,
          document.body
        )}
      </>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
