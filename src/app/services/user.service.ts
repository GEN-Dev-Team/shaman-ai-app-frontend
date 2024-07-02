import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/UserProfile';
import { Observable } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiurl = `${base_url}/user`;

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<IUser[]>(this.apiurl);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiurl}/${id}`);
  }

  createUser(user: IUser) {
    return this.http.post(this.apiurl, user);
  }

  updateUser(user: IUser) {
    return this.http.put(this.apiurl, user);
  }

  deleteUser(id: number): Observable<IUser[]> {
    return this.http.delete<IUser[]>(`${this.apiurl}/${id}`);
  }
}
