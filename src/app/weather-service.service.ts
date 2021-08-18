import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_DATA } from './constant/api-constant';
import { APP_DATA } from './constant/app-constant';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) {}

  getWeatherData(){
    return this.http.get(API_DATA.GET_WEATHER_URL + "appid=" + APP_DATA.API_KEY + "&q=" + APP_DATA.CITY_NAME);
  }
}
