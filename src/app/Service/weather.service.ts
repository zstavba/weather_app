import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../Classes/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getData = () : Observable<Weather> => {
    return this.http.get<Weather>('https://api.openweathermap.org/data/2.5/weather?q=Maribor,Slovenia&appid=379096c07a60fbe02f14349509207524')
  }

  getDataList = () : Observable<any> => {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/forecast?q=Maribor,Slovenija&appid=379096c07a60fbe02f14349509207524')
  }
  //https://pro.openweathermap.org/data/2.5/forecast/hourly?q=Maribor,Slovenia&appid=379096c07a60fbe02f14349509207524

}
