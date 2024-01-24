import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client : HttpClient) { }

  getToken() : Observable<string> {
   return this.client.post<string>("http://localhost:5266/api/auth", {})
  }
}
