import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {

  initialCityName = 'Rio de Janeiro';
  weatherDatas!: WeatherDatas;

  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }


  ngOnInit(): void {
    this.getWatherDatas(this.initialCityName);
    this.initialCityName = '';
  }


  getWatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName).subscribe({
     next: (response) => {
      response && (this.weatherDatas = response)
      console.log(this.weatherDatas);
     },
     error: (err) => {
      console.error(err);
     }

    });
  }

  onSubmit(): void{
    this.getWatherDatas(this.initialCityName);
    this.initialCityName = '';
  }





}
