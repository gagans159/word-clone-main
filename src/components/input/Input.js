import React, { useState } from "react";

function Input({ guesses, setGuesses }) {
  const [value, setValue] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        let newGuesses = [...guesses];
        newGuesses.push({ guess: value.toUpperCase(), id: Math.random() });
        if (newGuesses.length > 6) newGuesses.length = 6;
        setGuesses(newGuesses);
        setValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={5}
        minLength={5}
      />
    </form>
  );
}

export default Input;
