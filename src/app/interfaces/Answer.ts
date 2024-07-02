import { IQuestion } from './Question';

export interface IAnswer {
  id_answer: number;
  question: IQuestion;
  answer_text: string;
  value_developer: number;
  value_executor: number;
  value_manager: number;
}
