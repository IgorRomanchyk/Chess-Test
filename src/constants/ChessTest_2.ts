import { IChessTest } from "types";

const testTwo: IChessTest[] = [
  {
    question: "Что такое шахматная вилка(двойное нападение)?",
    id: 0,
    variants: [
      {
        title: "Нападение на короля",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Угроза съесть сразу несколько фигур противника",
        isCorrect: true,
        id: 1,
      },
      {
        title: "Нападение коня на две защищенные пешки",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question:
      "Что делать, если противник напал конем сразу на вашего ферзя и ладью?",
    id: 1,
    variants: [
      {
        title: "Спасать ферзя",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Спасать ладью",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Напасть на коня противника",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Может ли король поставить вилку?",
    id: 2,
    variants: [
      {
        title: "Может, как и любая другая фигура",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Не может",
        isCorrect: false,
        id: 1,
      },
    ],
  },
];

export default testTwo;
