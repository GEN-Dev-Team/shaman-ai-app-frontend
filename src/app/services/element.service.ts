import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { IElement } from '../interfaces/Element';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ElementService {
  apiurl = `${base_url}/element`;

  constructor(private http: HttpClient) {}

  getAllElements() {
    return this.http.get<IElement[]>(this.apiurl);
  }

  getElement(id: number): Observable<IElement> {
    return this.http.get<IElement>(`${this.apiurl}/${id}`);
  }

  createElement(element: IElement) {
    return this.http.post(this.apiurl, element);
  }

  updateElement(element: IElement) {
    return this.http.put(this.apiurl, element);
  }

  deleteElement(id: number): Observable<IElement[]> {
    return this.http.delete<IElement[]>(`${this.apiurl}/${id}`);
  }
}
