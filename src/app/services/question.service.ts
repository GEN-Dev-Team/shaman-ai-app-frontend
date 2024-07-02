import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { IQuestion } from '../interfaces/Question';

const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  apiurl = `${base_url}/question`;

  constructor(private http: HttpClient) {}

  getAllQuestions() {
    return this.http.get<IQuestion[]>(this.apiurl);
  }

  getQuestion(id: number): Observable<IQuestion> {
    return this.http.get<IQuestion>(`${this.apiurl}/${id}`);
  }

  createQuestion(question: IQuestion) {
    return this.http.post(this.apiurl, question);
  }

  updateQuestion(question: IQuestion) {
    return this.http.put(this.apiurl, question);
  }

  deleteQuestion(id: number): Observable<IQuestion[]> {
    return this.http.delete<IQuestion[]>(`${this.apiurl}/${id}`);
  }
}
