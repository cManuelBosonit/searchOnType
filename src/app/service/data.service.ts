import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../interface/city';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'http://universities.hipolabs.com/search?';

  constructor( private http:HttpClient ) { }

  universities(selectedCountry: string, term: string): Observable<City[]>{
    console.log(selectedCountry, ' ', term);
    return this.http.get<City[]>(`${this.url}country=${selectedCountry}&name=${term}`);
  }
}
