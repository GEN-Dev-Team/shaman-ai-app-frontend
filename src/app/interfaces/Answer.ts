import { IQuestion } from './Question';

export interface IAnswer {
  id_answer: number;
  id_question: IQuestion;
  question: IQuestion;
  answer_text: string;
  value_developer: number;
  value_executor: number;
  value_manager: number;
  checked?: boolean;
}
