import { IElement } from './Element';
import { IZodiacSign } from './ZodiacSign';

export interface IUserProfile {
  id_user: number;
  element: IElement;
  user_name: string;
  user_email: string;
  user_birthday: Date;
  user_gender: string;
  zodiacsign: IZodiacSign;
}
