import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor(private http: HttpClient) { }

  getDateFact() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return this.http.get(`http://numbersapi.com/${month}/${date}/date?json`);
  }

  getNumberFact(num) {
    return this.http.get(`http://numbersapi.com/${num}?json`);
  }

}
