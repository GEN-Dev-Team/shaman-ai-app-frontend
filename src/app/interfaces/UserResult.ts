import { IPersonaType } from './PersonaType';
import { ISkill } from './Skill';
import { IUserProfile } from './UserProfile';

export interface IUserResult {
  id_userresult: number;
  userProfile: IUserProfile;
  personType: IPersonaType;
  result_manager: number;
  result_developer: number;
  result_executor: number;
  person_type_description: string;
  skill: ISkill[];
}
