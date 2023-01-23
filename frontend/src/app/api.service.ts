import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API = 'http://localhost:3000'

  constructor(private http: HttpClient) {}


  searchWeather(body : any) {
    const url = this.API + '/search-weather';

    return this.http.post(url, body);
  }

}
