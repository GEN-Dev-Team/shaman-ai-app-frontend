import { IAnswer } from './Answer';
import { IQuestion } from './Question';
import { IUserProfile } from './UserProfile';

export interface IUserAnswer {
  id_useranswer: number;
  user: IUserProfile;
  answer: IAnswer[];
}
