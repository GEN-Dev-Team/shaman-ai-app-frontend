import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { IPersonaType } from '../interfaces/PersonaType';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class PersonaTypeService {
  apiurl = `${base_url}/persontype`;

  constructor(private http: HttpClient) {}

  getAllPersonaTypes() {
    return this.http.get<IPersonaType[]>(this.apiurl);
  }

  getPersonaType(id: number): Observable<IPersonaType> {
    return this.http.get<IPersonaType>(`${this.apiurl}/${id}`);
  }

  createPersonaType(personaType: IPersonaType) {
    return this.http.post(this.apiurl, personaType);
  }

  updatePersonaType(personaType: IPersonaType) {
    return this.http.put(this.apiurl, personaType);
  }

  deletePersonaType(id: number): Observable<IPersonaType[]> {
    return this.http.delete<IPersonaType[]>(`${this.apiurl}/${id}`);
  }
}
