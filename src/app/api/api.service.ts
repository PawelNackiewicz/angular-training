import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IResp {
  location: {
    name: string,
    country: string
  }
  current: {
    temp_c: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  headers = {
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    "x-rapidapi-key": "3f27872098mshd9ba26fa8b5cc4dp1499c8jsn21d51a865774"
  }

  url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Paris'

  getData(): Observable<IResp> {
    return this.http.get<IResp>(this.url, {headers: this.headers});
  }
  
}
