import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor(private http: HttpClient) { }

  getFlowersJSON(): Observable<any> {
    return this.http.get('http://localhost:3000/flowers', {responseType: "json"});
  }
}
