import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISkill } from '../interfaces/Skill';
import { Observable } from 'rxjs';
import { environment } from '../environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class SkillService {
  apiurl = `${base_url}/skill`;

  constructor(private http: HttpClient) {}

  getAllSkills() {
    return this.http.get<ISkill[]>(this.apiurl);
  }

  getSkill(id: number): Observable<ISkill> {
    return this.http.get<ISkill>(`${this.apiurl}/${id}`);
  }

  createSkill(skill: ISkill) {
    return this.http.post(this.apiurl, skill);
  }

  updateSkill(skill: ISkill) {
    return this.http.put(this.apiurl, skill);
  }

  deleteSkill(id: number): Observable<ISkill[]> {
    return this.http.delete<ISkill[]>(`${this.apiurl}/${id}`);
  }
}
