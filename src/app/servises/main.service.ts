import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }


  getWeather() {
    const lat: number = 58.7984;
    const lng: number = 17.8081;
    const params: string = 'airTemperature';
    return this.http.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: new HttpHeaders(
        {
          'Authorization': '2e91a696-b77b-11ec-a97f-0242ac130002-2e91a718-b77b-11ec-a97f-0242ac130002'
        }
      )
    })
  }
}
