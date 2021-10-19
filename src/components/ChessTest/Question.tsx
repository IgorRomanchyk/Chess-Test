import React, { useState } from "react";
import { IChessTest } from "types";
import Answers from "./Answers";

interface IProps extends IChessTest {
  setScore(e: number): void;
  score: number;
}

function Question({ variants, question, score, setScore }: IProps) {
  const [state, setState] = useState<number>(0);

  const result = variants.filter((item) => item.isCorrect);

  return (
    <div
      className={state === result.length ? "testBlockImpressed" : "testBlock"}
    >
      <div className="question">{question}</div>
      <ul>
        {variants.map(({ title, isCorrect, id }) => (
          <Answers
            title={title}
            isCorrect={isCorrect}
            key={id}
            setScore={setScore}
            score={score}
            setState={setState}
            state={state}
          />
        ))}
      </ul>
    </div>
  );
}

export default Question;
