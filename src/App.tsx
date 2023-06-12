import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/task";

function App() {
  return (
    <div className="App">
      <Task taskName="Do Homework" id={1} isLoggedIn={false} />
      <Task taskName="Learn TypeScript" id={2} isLoggedIn={true} />
    </div>
  );
}

export default App;
