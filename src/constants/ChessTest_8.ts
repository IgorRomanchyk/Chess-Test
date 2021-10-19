import { IChessTest } from "types";

const testEight: IChessTest[] = [
  {
    question: "Для чго нужно правило квадрата?",
    id: 0,
    variants: [
      {
        title: "Для проверки проходимости пещки в ферзи",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Для точного расчета куда может пойти конь",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Для определения дальности действия ладьи",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Как рисуется шахматный квадрат?",
    id: 1,
    variants: [
      {
        title: "Линии, на которых есть одна фигура",
        isCorrect: true,
        id: 0,
      },
      {
        title:
          "От пешки проводим диагональную линию, опускаемся до горизонтали, на которой стоим и проводим линию до пешки",
        isCorrect: false,
        id: 1,
      },
      {
        title:
          "Рисуем вертикальную линию от ладьи до края доски и поворачиваем в сторону, дорисовываем квадрат",
        isCorrect: false,
        id: 2,
      },
    ],
  },
  {
    question: "Что такое щахматная оппозиция?",
    id: 2,
    variants: [
      {
        title: "Фигуры противника, нападающие на короля",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Ситуация на доске, когда короли стоят друг напротив друга",
        isCorrect: true,
        id: 1,
      },
      {
        title: "Положение игроков друг напротив друга в начале партии",
        isCorrect: false,
        id: 2,
      },
    ],
  },
];

export default testEight;
