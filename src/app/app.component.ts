import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Init } from 'node:v8';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './Service/weather.service';
import { response } from 'express';
import { WeatherCord } from './Classes/weather-cord';
import { Weather } from './Classes/weather';
import { WeatherList } from './Classes/weather-list';
import { WeatherMain } from './Classes/weather-main';
import { WeatherSys } from './Classes/weather-sys';
import { WeatherWind } from './Classes/weather-wind';

import moment from 'moment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  providers: [
    WeatherService,
    Weather,
    WeatherCord,
    WeatherList,
    WeatherMain,
    WeatherSys,
    WeatherWind
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// Žan ubij se 
export class AppComponent  implements OnInit{
  title = 'weather-app';

  public weather: Weather = new Weather();
  public weatherList: Array<Weather> = new Array<Weather>()

  public responseTime: any;

  public startTime?: moment.Moment;


  constructor(private _WeatherService : WeatherService) {}
  
  ngOnInit(): void {
      this.startTime = moment();      
      this.getList();
      this.getFiveDays();
  }


  getList = () => {
    this._WeatherService.getData().subscribe(
      response => {
        this.weather = response;
      }
    )
  }

  getFiveDays = () => {
    this._WeatherService.getDataList().subscribe(
      response => {
        this.weather.list = response.list;

        this.weatherList = this.weather.list.filter((item: any) => {
          if(this.isLastHour(item.dt)){
            return item;
          }
        });

        const endTime = moment();
        const diffMilliseconds = endTime.diff(this.startTime);
        this.responseTime = (diffMilliseconds / 1000).toFixed(2); // Convert milliseconds to seconds with 2 decimal places
        
    

        
      }
    )

  }
  storeResponseTime(responseTime: number): void {
    this.responseTime = responseTime;
  }


  convertKelvin = (farenheit: number) : number => {
    return (farenheit - 273.15)
  }

  public  convertSunriseTime = (sunrise: number ): string => {
    let newTime: Date = new Date(sunrise * 1000);

    return `${newTime.getHours()} : ${newTime.getMinutes()}: ${newTime.getSeconds()}`;
  }

  public convertSunset = (sunset: number): string => {
      let newTime: Date = new Date(sunset * 1000);

      return `${newTime.getHours()} : ${newTime.getMinutes()} : ${newTime.getSeconds()}`;
  }

  public  convertDateTime = (timestamp: string | any ): string => {
    let newTime: Date = new Date(timestamp * 1000);
    let daysList = ["Nedelja","Ponedeljek","Torek","Sreda","Četrtek", "Petek", "Sobota"]
    let name = daysList[newTime.getDay()];

    return `${name}`;
  }

  public isLastHour = (timestamp: number): boolean => {
    const date = new Date(timestamp * 1000);
    return (date.getHours() == 22) ? true: false;
  }

  public getWeatherType = (type:string): string => {
    switch(type){
      case 'Clear':
        return 'assets/images/icons/clear-sky.png'
      break;
    case 'Clouds':
        return 'assets/images/icons/clouds.png'
      break;
    case 'Rain':
        return 'assets/images/icons/rain.png'
      break;
    default: 

      break;
    }

    return ''
  }


}
