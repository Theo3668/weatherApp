import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  appId = '8044d8d65d49ade448d87293c0bf14fd';

  constructor(private http: HttpClient) { }

  getWeatherData(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&cnt=1&APPID=' + this.appId);
  }
  getWeatherData1(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + this.appId);
  }
}
