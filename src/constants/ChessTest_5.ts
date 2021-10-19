import { IChessTest } from "types";

const testFive: IChessTest[] = [
  {
    question: "Что такое уничтожение защиты?",
    id: 0,
    variants: [
      {
        title: "Намеренное взятие фигуры, которая нам мешает",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Уничтожение пешек в рокировке",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Вилка",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Что такое отвлечение?",
    id: 1,
    variants: [
      {
        title: "Прием, который заставляет мешающую нам фигуру уйти",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Прием, который ведет к выигрышу ферзя",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Спасение от мата",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Чем отличается отвлечение от уничтожения защитника?",
    id: 2,
    variants: [
      {
        title:
          "При уничтожении защитника мы сбиваем фигуру, а при отвлечении заставляем её уйти",
        isCorrect: true,
        id: 0,
      },
      {
        title:
          "При отвлечении мы обязательно отдаем фигуру, а при уничтожении защитника сбиваем",
        isCorrect: false,
        id: 1,
      },
    ],
  },
];

export default testFive;
