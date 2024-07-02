import { Injectable } from '@angular/core';
import { IUserProfile } from '../interfaces/UserProfile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  apiurl = `${base_url}/userprofile`;

  constructor(private http: HttpClient) {}

  getAllUserProfiles() {
    return this.http.get<IUserProfile[]>(this.apiurl);
  }

  getUserProfile(id: number): Observable<IUserProfile> {
    return this.http.get<IUserProfile>(`${this.apiurl}/${id}`);
  }

  createUserProfile(UserProfile: IUserProfile) {
    return this.http.post(this.apiurl, UserProfile);
  }

  updateUserProfile(UserProfile: IUserProfile) {
    return this.http.put(this.apiurl, UserProfile);
  }

  deleteUserProfile(id: number): Observable<IUserProfile[]> {
    return this.http.delete<IUserProfile[]>(`${this.apiurl}/${id}`);
  }
}
