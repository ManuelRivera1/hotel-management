import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:3000/users'; // URL de tu json-server

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    const newUser = {
      id: Math.floor(Math.random() * 10), // Genera un ID aleatorio
      username: username,
      password: password,
      role: 'user'
    };
    return this.http.post<any>(this.apiUrl, newUser);
  }
}
