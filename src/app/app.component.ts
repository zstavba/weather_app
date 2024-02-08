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
export class AppComponent  implements OnInit{
  title = 'weather-app';

  public weather: Weather = new Weather();


  constructor(private _WeatherService : WeatherService) {}
  
  ngOnInit(): void {
      this.getList();
  }


  getList = () => {
    this._WeatherService.getData().subscribe(
      response => {
        this.weather = response;
        console.log(response)
      }
    )
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

  public getWeatherType = (type:string): string => {
    switch(type){
      case 'Clear':
        return 'assets/images/icons/clear-sky.png'
      break;
    default: 

      break;
    }

    return ''
  }


}
