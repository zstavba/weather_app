
enum CountryType  {
    SLOVENIA = 'SL',
    NEMČIJA = 'DE',
    AVSTRIJA = 'AT',
    HRVAŠKA = 'HR',

}

export class WeatherSys {


    public id: number = 0;
    public country: CountryType = CountryType.SLOVENIA;
    public sunrise: number = 0;
    public sunset: number = 0;
    

    constructor() {}

 

}
