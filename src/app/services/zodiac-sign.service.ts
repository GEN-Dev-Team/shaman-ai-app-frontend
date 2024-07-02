import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { IZodiacSign } from '../interfaces/ZodiacSign';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class ZodiacSignService {
  apiurl = `${base_url}/zodiacsign`;

  constructor(private http: HttpClient) {}

  getAllZodiacs() {
    return this.http.get<IZodiacSign[]>(this.apiurl);
  }

  getZodiac(id: number): Observable<IZodiacSign> {
    return this.http.get<IZodiacSign>(`${this.apiurl}/${id}`);
  }

  createZodiac(zodiac: IZodiacSign) {
    return this.http.post(this.apiurl, zodiac);
  }

  updateZodiac(zodiac: IZodiacSign) {
    return this.http.put(this.apiurl, zodiac);
  }

  deleteZodiac(id: number): Observable<IZodiacSign[]> {
    return this.http.delete<IZodiacSign[]>(`${this.apiurl}/${id}`);
  }
}
