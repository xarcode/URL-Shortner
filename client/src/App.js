import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./BackgroundAnimate";
import InputShortener from "./InputShortener";
import LinkResult from "./LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [shortenMode, setShortenMode] = useState(false); // State to track the mode

  const toggleMode = () => {
    setShortenMode(!shortenMode); // Toggle the mode
  };

  return (
    <div className="container">
      <nav className="navbar">
        <a
          href="#"
          className={`navbar-link ${
            shortenMode ? "shorten-mode" : "original-mode"
          }`}
          onClick={toggleMode}
        >
          {shortenMode ? "Shorten URL" : "Get Original URL"}
        </a>
      </nav>
      <InputShortener setInputValue={setInputValue} shortenMode={shortenMode} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} shortenMode={shortenMode} />
    </div>
  );
}

export default App;
