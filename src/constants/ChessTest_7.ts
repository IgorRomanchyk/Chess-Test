import { IChessTest } from "types";

const testSeven: IChessTest[] = [
  {
    question: "Что такое открытые линии?",
    id: 0,
    variants: [
      {
        title: "Линии, на которых нет никаких фигур",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Линии, на которых нет пешек",
        isCorrect: true,
        id: 1,
      },
      {
        title: "Линии, на которых есть пешка",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Что такое полуоткрытые линии?",
    id: 1,
    variants: [
      {
        title: "Линии, на которых есть одна фигура",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Линии, на которых нет пешек",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Линии, на которых есть одна пешка",
        isCorrect: true,
        id: 2,
      },
    ],
  },
  {
    question: "Что такое обжорный ряд?",
    id: 2,
    variants: [
      {
        title: "Ряд, на котором стоят пешки противника",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Ряд, став на которую фигуры обедают",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Линия, на которой стоит король + фигура противника",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Как не допустить врыва фигур противника на обжорный ряд?",
    id: 3,
    variants: [
      {
        title: "Захватить открытые линии",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Защищать свои пешки",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Рано сделать рокировку",
        isCorrect: false,
        id: 2,
      },
    ],
  },
];

export default testSeven;
