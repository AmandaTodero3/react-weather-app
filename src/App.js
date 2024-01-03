import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Amanda Todero and is
          <a
            href="https://github.com/AmandaTodero3/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
