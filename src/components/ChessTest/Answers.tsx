import React, { useState } from "react";
import { IChessVariants } from "types";

interface IProps extends IChessVariants {
  setScore(e: number): void;
  score: number;
  setState(e: number): void;
  state: number;
}

function Answers({
  title,
  isCorrect,
  score,
  setScore,
  state,
  setState,
}: IProps) {
  const [value, setCorrect] = useState<boolean>(true);
  const [valueCheck, setValue] = useState<boolean>(false);

  const classes: string = value ? "correct" : "incorrect";
  const getCorrectAnswer = () => {
    if (isCorrect) {
      const updatedScore = score + 1;
      const updatedState = state + 1;
      setState(updatedState);
      setScore(updatedScore);
      setValue(true);
      setCorrect(true);
    } else {
      setValue(true);
      setCorrect(false);

      setTimeout(() => {
        setValue(false);
      }, 1000);
    }
  };
  return (
    <li className={valueCheck ? `answer ${classes}` : `answer`}>
      <button type="button" onClick={getCorrectAnswer}>
        {title}
      </button>
    </li>
  );
}

export default Answers;
