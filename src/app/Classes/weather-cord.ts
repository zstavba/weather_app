export class WeatherCord {

    public id: number = 0;
    public long: number = 0;
    public lat: number = 0;

    constructor(){}

    static getKeys = () => {
        return Object.keys(new WeatherCord());
    }

}
