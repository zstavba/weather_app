export class WeatherInfo {

    public id: number = 0;
    public description: string = '';
    public main: string = '';
    public icon: string = '';

    constructor () {}

    static getKeys = () => {
        return Object.keys(new WeatherInfo());
    }


}
