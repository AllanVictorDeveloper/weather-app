import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '65f2b7e20123f97fe8b338063623c814';

constructor(private http: HttpClient) { }


getWeatherDatas(cityName: string): Observable<any>{
  return this.http
  .get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
  .pipe(first(), tap(res => console.log(res)))
}



}
