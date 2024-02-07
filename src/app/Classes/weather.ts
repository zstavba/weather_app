import { WeatherCord } from "./weather-cord";
import { WeatherMain } from "./weather-main";

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

    constructor () {}


    static getKeys = () => {
        return Object.keys(new Weather());
    }

}
