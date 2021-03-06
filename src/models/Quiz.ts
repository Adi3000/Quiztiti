import { AnswerStatus } from './AnswerStatus';
import { Question } from './Question';
import { QuizStatus } from './QuizStatus';

export class Quiz {
  status: QuizStatus = QuizStatus.CHOOSING_ROUND;
  category: string;
  numberOfRounds: number;
  currentRound: number = 0;
  questions: Question[];
  currentQuestion: Question;
  answerStatus: AnswerStatus = AnswerStatus.INVISIBLE;
}