import React, { useState } from "react";
import { IChessTest } from "types";
import Question from "./Question";

interface IProps {
  chessTest: IChessTest[];
  link: string;
}

const ChessTest = ({ chessTest, link }: IProps) => {
  const [score, setScore] = useState<number>(0);
  const getAmountCurrAnswers = () => {
    let num = 0;
    for (let i = 0; i < chessTest.length; i += 1) {
      for (let j = 0; j < chessTest[i].variants.length; j += 1) {
        if (chessTest[i].variants[j].isCorrect) {
          num += 1;
        }
      }
    }
    return num;
  };
  return (
    <div style={{ textAlign: "center", marginTop: "25px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {chessTest.map(({ question, id, variants }) => (
          <Question
            variants={variants}
            question={question}
            key={id}
            setScore={setScore}
            score={score}
          />
        ))}
      </div>
      {score === getAmountCurrAnswers() ? (
        <a href={link} style={{ display: "block", textAlign: "center" }}>
          <button type="button" className="button_open">
            Далее
          </button>
        </a>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button type="button" className="button_close">
            Далее
          </button>
        </div>
      )}
    </div>
  );
};

export default ChessTest;
