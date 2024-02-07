export class WeatherMain {

    public id: number = 0;
    public feels_like: number = 0;
    public humidity: number = 0;
    public pressure: number = 0;
    public temp: number = 0;
    public temp_max: number = 0;
    public temp_min: number = 0;

    constructor () {}

    static getKeys = () => {
        return Object.keys(new WeatherMain())
    }

}
