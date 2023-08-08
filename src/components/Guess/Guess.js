import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guesses }) {
  const results = guesses.map((e) => e.guess);
  // console.log(7, results);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((e, eindex) => {
        let answerCheck = checkGuess(results[eindex], answer);
        return (
          <p className="guess" key={eindex}>
            {range(5).map((f, findex) => (
              <span
                key={findex}
                className={`cell ${
                  answerCheck ? answerCheck[findex].status : ""
                }`}
              >
                {results[eindex] ? results[eindex][findex] : ""}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
