export interface IChessVariants {
  title: string;
  isCorrect: boolean;
  id?: number;
}

export interface IChessTest {
  question: string;
  id?: number;
  variants: IChessVariants[];
}
