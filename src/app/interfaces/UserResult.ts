import { IPersonaType } from './PersonaType';
import { IUserProfile } from './UserProfile';

export interface IUserResult {
  id_userresult: number;
  user: IUserProfile;
  person_type: IPersonaType;
  result_percentage: number;
  person_type_description: string;
}
