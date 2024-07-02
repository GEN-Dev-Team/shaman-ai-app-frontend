import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserResult } from '../interfaces/UserResult';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class UserResultService {
  apiurl = `${base_url}/userresult`;

  constructor(private http: HttpClient) {}

  getAllUserResults() {
    return this.http.get<IUserResult[]>(this.apiurl);
  }

  getUserResult(id: number): Observable<IUserResult> {
    return this.http.get<IUserResult>(`${this.apiurl}/${id}`);
  }

  createUserResult(userResults: IUserResult) {
    return this.http.post(this.apiurl, userResults);
  }

  updateUserResult(userResults: IUserResult) {
    return this.http.put(this.apiurl, userResults);
  }

  deleteUserResult(id: number): Observable<IUserResult[]> {
    return this.http.delete<IUserResult[]>(`${this.apiurl}/${id}`);
  }
}
