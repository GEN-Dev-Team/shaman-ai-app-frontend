import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { IAnswer } from '../interfaces/Answer';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  apiurl = `${base_url}/answer`;

  constructor(private http: HttpClient) {}

  getAllAnswers() {
    return this.http.get<IAnswer[]>(this.apiurl);
  }

  getAnswer(id: number): Observable<IAnswer> {
    return this.http.get<IAnswer>(`${this.apiurl}/${id}`);
  }

  createAnswer(Answer: IAnswer) {
    return this.http.post(this.apiurl, Answer);
  }

  updateAnswer(Answer: IAnswer) {
    return this.http.put(this.apiurl, Answer);
  }

  deleteAnswer(id: number): Observable<IAnswer[]> {
    return this.http.delete<IAnswer[]>(`${this.apiurl}/${id}`);
  }
}
