import { Component, OnInit } from '@angular/core';
import { WIND_DIRECTION } from '../constant/dictionary';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today: number = Date.now();
  data: any;
  temp: number = 0;
  celsius_temp: any;
  humidity: number = 0;
  wind: any;
  direction: any;
  wd = WIND_DIRECTION;

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    setInterval(() => {
    this.today = Date.now();
    }, 1000);

    this.weatherService.getWeatherData().subscribe((res:any) => {
      this.data = res;
      this.temp = this.convToCelsius(this.data.main.temp);
      this.celsius_temp = Number(this.temp).toFixed();
      this.wind = this.convToKMperHR(this.data.wind.speed);
      this.humidity = this.data.main.humidity;
      this.direction = this.convToDirection(this.data.wind.deg);
    });

  }
  convToKMperHR(speed: number): any {
    var x = (speed*18)/5;
    var x1 = Number(x).toFixed();
    return x1;
  }
  convToDirection(deg: any): any {
    deg = (deg/22.5)+1
    deg = Number(deg).toFixed();
    var x = '';
    for(var i in this.wd)
    {
      if(i == deg){
        x = this.wd[i];
      }
    }
    return x;
  }
  convToCelsius(temp: number): number {
    return (temp - 273.15);
  }

}
