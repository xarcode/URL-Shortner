import { useState } from "react";

const InputShortener = ({ setInputValue, shortenMode }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");

  const handleClick = () => {
    if (shortenMode) {
      if (customUrl.trim() !== "") {
        setInputValue(customUrl);
      } else {
        setInputValue(originalUrl);
      }
    } else {
      // Handle getting original URL logic
    }

    setOriginalUrl("");
    setCustomUrl("");
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        {/* {!shortenMode && (
          <input
            type="text"
            placeholder="Custom URL (optional)"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
          />
        )} */}
        <input type="submit" value={!shortenMode ? "Shorten" : "Get Original URL"} />
      </form>
    </div>
  );
};

export default InputShortener;
