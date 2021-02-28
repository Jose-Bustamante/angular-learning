import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  getData() {
    return this.http.get('http://api.icndb.com/jokes/random');
  }

  constructor(private http: HttpClient) { }
}
