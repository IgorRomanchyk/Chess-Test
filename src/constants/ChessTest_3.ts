import { IChessTest } from "types";

const testThree: IChessTest[] = [
  {
    question: "Что такое шахматный рентген?",
    id: 0,
    variants: [
      {
        title: "Нападение фигуры сквозь другую",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Нападение сразу на несколько фигур",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Защита сразу трех фигур",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Что такое шахматная связка?",
    id: 1,
    variants: [
      {
        title:
          "Фигура не может проходить из-за того, фигура за ней будет под боем",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Нападение на короля",
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
    question: "Какая фигура может смотреть рентгеном?",
    id: 2,
    variants: [
      {
        title: "Конь",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Ладья",
        isCorrect: true,
        id: 1,
      },
      {
        title: "Пешка",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Может ли двигаться фигура, если она связана с ферзём?",
    id: 3,
    variants: [
      {
        title: "Да",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Нет",
        isCorrect: false,
        id: 1,
      },
    ],
  },
  {
    question: "Может ли двигаться фигура, если она связана с королем?",
    id: 4,
    variants: [
      {
        title: "Да",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Нет",
        isCorrect: true,
        id: 1,
      },
    ],
  },
];

export default testThree;
