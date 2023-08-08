import React, { useState } from "react";
import Input from "../input/Input";
import Guess from "../Guess/Guess";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const isAnswerPresent = guesses.map((e) => e.guess).includes(answer);
  const isGuessesExhausted = guesses.length == 6;

  const renderWinMessage = () => {
    return (
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 18,
          backgroundColor: "aqua",
          padding: "10px",
          fontWeight: "500",
        }}
      >
        Congratulations! Got it in{" "}
        {guesses.findIndex((e) => e.guess == answer) + 1} guess
      </p>
    );
  };

  const renderGuessExhaustMessage = () => {
    return (
      <p
        style={{
          fontFamily: "monospace",
          fontSize: 18,
          backgroundColor: "aqua",
          padding: "10px",
          fontWeight: "500",
        }}
      >
        Sorry, the correct answer is {answer}
      </p>
    );
  };

  const renderResetButton = () => {
    return (
      <button
        type="submit"
        style={{
          fontFamily: "monospace",
          fontSize: 18,
          backgroundColor: "red",
          padding: "10px",
          fontWeight: "600",
          color: "white",
          width: "100px",
          margin: "0 auto",
          textAlign: "center",
        }}
        onClick={() => setGuesses([])}
      >
        {" "}
        Restart
      </button>
    );
  };

  return (
    <>
      {renderResetButton()}
      <Guess answer={answer} guesses={guesses} />
      {isAnswerPresent ? (
        renderWinMessage()
      ) : isGuessesExhausted ? (
        renderGuessExhaustMessage()
      ) : (
        <Input guesses={guesses} setGuesses={setGuesses} />
      )}
    </>
  );
}

export default Game;
