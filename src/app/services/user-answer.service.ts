import { Injectable } from '@angular/core';
import { IUserAnswer } from '../interfaces/UserAnswer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { IUserResult } from '../interfaces/UserResult';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class UserAnswerService {
  apiurl = `${base_url}/useranswer`;

  constructor(private http: HttpClient) {}

  getAllUserAnswers() {
    return this.http.get<IUserAnswer[]>(this.apiurl);
  }

  getUserResults(email: string): Observable<IUserResult> {
    return this.http.get<IUserResult>(`${this.apiurl}/userresult/${email}`);
  }

  createUserProfileAnswers(UserAnswers: IUserAnswer) {
    return this.http.post(this.apiurl, UserAnswers);
  }

  updateUserAnswer(UserAnswer: IUserAnswer) {
    return this.http.put(this.apiurl, UserAnswer);
  }

  deleteUserAnswer(id: number): Observable<IUserAnswer[]> {
    return this.http.delete<IUserAnswer[]>(`${this.apiurl}/${id}`);
  }
}
