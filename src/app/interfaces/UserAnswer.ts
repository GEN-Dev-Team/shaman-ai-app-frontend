import { IAnswer } from './Answer';
import { IUserProfile } from './UserProfile';

export interface IUserAnswer {
  id_useranswer: number;
  userProfile: IUserProfile;
  answer: IAnswer[];
}
