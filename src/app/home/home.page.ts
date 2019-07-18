import { Component } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //for the slide

  city = 'Pretoria';
  value: any;
  weatherData: any;
  cityData: any;
  name: string; 
  icon: any;
  date: number = Date.now();

  // for the card

  value1: any;
  weatherData1: any;
  cityData1: any;
  name1: string; 
  icon1: any;

  constructor(private service: WeatherServiceService) {

    this.service.getWeatherData(this.city).subscribe(myData => {

      // console.log(myData)
      // this.list = myData;

      // console.log(this.list.list)
      // this.infor = this.list.list;

    this.value = myData;
    this.weatherData = this.value.list;
    this.cityData = this.value.city;
    this.name = this.cityData.name;

    // this.icon = 'http://openweathermap.org/img/w/${res[0].weather[0].icon}.png';

    console.log(myData);

    });

    this.service.getWeatherData1(this.city).subscribe(myData1 => {

    this.value1 = myData1;
    this.weatherData1 = this.value1.list;
    this.cityData1 = this.value1.city;
    this.name1 = this.cityData1.name1;

    console.log(myData1);

    });
  }

  searchByCity(){
    this.service.getWeatherData(this.city).subscribe(myData => {
      this.value = myData;
      this.weatherData = this.value.list;
      this.cityData = this.value.city;
      this.name = this.cityData.name;
   
      console.log(myData);
   
     });

     this.service.getWeatherData1(this.city).subscribe(myData1 => {
      this.value1 = myData1;
      this.weatherData1 = this.value1.list;
      this.cityData1 = this.value1.city;
      this.name1 = this.cityData1.name1;
   
      console.log(myData1);
   
     });
   }

  // GetDay = function(time: number) {
  //   let day = new Date(time*1000); //convert time stamp to milliseconds
  //   let d = new Date(day);
  //   let weekday = [];
  //   weekday[0] = "Sun";
  //   weekday[1] = "Mon";
  //   weekday[2] = "Tue";
  //   weekday[3] = "Wed";
  //   weekday[4] = "Thu";
  //   weekday[5] = "Fri";
  //   weekday[6] = "Sat";
    
  //   let n = weekday[d.getDay()];
  //   return n;
  // } 
}
