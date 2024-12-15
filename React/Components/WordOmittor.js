import React, { useState } from "react";

function WordOmitter() {
  const [text, setText] = useState("");
  const [wordToOmit, setWordToOmit] = useState("");
  const [result, setResult] = useState("");

  const handleOmit = () => {
    // Split text into words and filter out the word to omit
    const words = text.split(" ");
    const filteredWords = words.filter(
      (word) => word.toLowerCase() !== wordToOmit.toLowerCase()
    );
    setResult(filteredWords.join(" "));
  };

  return (
    <div>
      <div className="layout-row justify-content-center align-items-center">
        <input
          data-testid="text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <input
          data-testid="word-input"
          type="text"
          value={wordToOmit}
          onChange={(e) => setWordToOmit(e.target.value)}
          placeholder="Enter word to omit"
        />
        <button data-testid="omit-button" onClick={handleOmit}>
          Omit Word
        </button>
      </div>
      <div
        data-testid="result"
        className="layout-row justify-content-center align-items-center"
      >
        {result}
      </div>
    </div>
  );
}

export default WordOmitter;
