import { IChessTest } from "types";

const testFour: IChessTest[] = [
  {
    question: "Без чего невозможно вскрытое нападени?",
    id: 0,
    variants: [
      {
        title: "Без коня",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Без шаха",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Без рентгена",
        isCorrect: true,
        id: 2,
      },
    ],
  },
  {
    question: "Чем полезно вскрытое нападение?",
    id: 1,
    variants: [
      {
        title: "Можно поставить шах",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Выиграть фигуру противника",
        isCorrect: true,
        id: 1,
      },
      {
        title: "Спастись от мата",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Чем отличается вскрытое нападение от связки?",
    id: 2,
    variants: [
      {
        title: "Рентген проходит через свою фигуру, а не противника",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Вскрытое нападение может быть только с королем",
        isCorrect: false,
        id: 1,
      },
    ],
  },
];

export default testFour;
