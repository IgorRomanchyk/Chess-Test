import { IChessTest } from "types";

const testOne: IChessTest[] = [
  {
    question: "Чем отличается шах от мата?",
    id: 0,
    variants: [
      {
        title:
          "Когда королю шах, то он не может спастись, озночает конец игры, а когда королю мат, то у короля есть спасение",
        isCorrect: false,
        id: 0,
      },
      {
        title:
          "Когда королю поставили шах то он может спастись, а когда мат, то спасения не найти",
        isCorrect: true,
        id: 1,
      },
    ],
  },
  {
    question: "Как можно защититься от шаха?",
    id: 1,
    variants: [
      {
        title: "Убежать",
        isCorrect: true,
        id: 0,
      },
      {
        title: "Телепортироваться",
        isCorrect: false,
        id: 1,
      },
      {
        title: "Поставить щит",
        isCorrect: true,
        id: 2,
      },
      {
        title: "Сбить обидчика",
        isCorrect: true,
        id: 3,
      },
      {
        title: "Спрятаться",
        isCorrect: false,
        id: 4,
      },
    ],
  },
  {
    question: "Как лучше всего начать поиски мата в позиции?",
    id: 2,
    variants: [
      {
        title: "В первую очередь ищем нападения на короля-шахи!",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Смотрим куда может уйти король!",
        isCorrect: true,
        id: 1,
      },
    ],
  },
  {
    question:
      "После того как нашли все возможные пути отступления короля, что будешь делать дальше?",
    id: 3,
    variants: [
      {
        title: "Искать возможности поставить шах, чтобы он не мог отойти!",
        isCorrect: false,
        id: 0,
      },
      {
        title: "Ищем как нам перекрыть пути отступления короля (если они есть)",
        isCorrect: true,
        id: 1,
      },
    ],
  },
];

export default testOne;
