import { IAnswer } from './Answer';
import { IElement } from './Element';
import { ISkill } from './Skill';

export interface IQuestion {
  id_question: number;
  skill: ISkill;
  element: IElement;
  question_text: string;
  answer: IAnswer[];
}
