import { IChessTest } from "types";

const testSix: IChessTest[] = [
  {
    question: "Почему так важен центр?",
    id: 0,
    variants: [
      {
        title: "Из-за того, что у всех фигур больше пространства в центре",
        isCorrect: true,
        id: 0,
      },
      {
        title: "В центре проще атаковать",
        isCorrect: false,
        id: 1,
      },
    ],
  },
  {
    question: "Для чего нужно захватывать центр?",
    id: 1,
    variants: [
      {
        title: "Чтобы вывести ферзя и открыть дорогу королю",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Чтобы его не захватил противник",
        isCorrect: true,
        id: 1,
      },
      {
        title: "Чтобы сделать рокировку",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Почему в начале лучше не выводить тяжелые фигуры(ферзь, ладья)?",
    id: 2,
    variants: [
      {
        title: "Из-за того, что они не могут атаковать в начале",
        isCorrect: false,
        id: 0,
      },
      {
        title:
          "Из-за того, что на них будут нападать легкие фигуры противника и их легко будет потерять",
        isCorrect: true,
        id: 1,
      },
    ],
  },
  {
    question: "Для чего нужна рокировка?",
    id: 3,
    variants: [
      {
        title: "Для безопасности короля",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Для того, чтобы вывести ладью",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Для всего вышеперечисленного",
        isCorrect: true,
        id: 2,
      },
    ],
  },
];

export default testSix;
