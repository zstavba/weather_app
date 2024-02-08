import { WeatherCord } from "./weather-cord";
import { WeatherInfo } from "./weather-info";
import { WeatherMain } from "./weather-main";
import { WeatherSys } from "./weather-sys";
import { WeatherWind } from "./weather-wind";

export class Weather {
    public id: number = 0;
    public base: string = '';
    public cod: number = 0;
    public dt: number = 0;
    public name: string = '';
    public timezone: number = 0;
    public visibility:  number = 0;

    public cord: WeatherCord = new WeatherCord();
    public main: WeatherMain = new WeatherMain();
    public sys:  WeatherSys = new WeatherSys();
    public weather: Array<WeatherInfo> = new Array<WeatherInfo>();
    public wind: WeatherWind = new WeatherWind()

    constructor () {}


    static getKeys = () => {
        return Object.keys(new Weather());
    }

    public convertKelvin = (time_type: number): string => {
        let conver = (time_type - 273.15).toFixed(2);

        return conver;
    }

}
