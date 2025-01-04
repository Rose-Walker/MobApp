import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonCardSubtitle  } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/httpservice';
import { StorageService } from 'src/storage.service';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.page.html',
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent,FormsModule,  IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonCardSubtitle],
})
export class WeatherPage {
  capital: string = "";
  APIKEY = "ac6107d516770e7e6bb69b2a50f65cc0";
  units: string = "metric";
  description: string = "";
  temp: Number = 0;
  imageUrl: string = "";

  constructor(private route: ActivatedRoute, private httpService: HttpService, private storageService: StorageService) {
  }

  async ngOnInit() {
    
    var selectedUnit = await this.storageService.get("selectedUnit");
    if(selectedUnit)
        this.units = selectedUnit;

    var queryParams = undefined;
    this.route.queryParams.subscribe(data => {
      queryParams = data;
    });
    
    if(queryParams){
        this.capital = queryParams['capital'];
        await this.getWeather(queryParams['lon'], queryParams['lat']);
    }   
  }

  async getWeather(lon: Number, lat: Number){
    const options = {url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=' + this.units + '&appid=' + this.APIKEY};
    const response = await this.httpService.get(options);
    this.description = response.weather[0].description;
    this.temp = response.main.temp;
    this.imageUrl = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
  }

}
