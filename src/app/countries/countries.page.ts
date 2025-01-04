import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/httpservice';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-countires',
  templateUrl: 'countries.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, IonList, IonItem, NgFor, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton],
})
export class CountriesPage {
  foundCountries: any[] = [];
  showNoCountriesFound: boolean = false;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) {
  }

  async ngOnInit(){
    var queryParams = undefined;
    this.route.queryParams.subscribe(data => {
      queryParams = data;
    });
    var searchParam = undefined;
    if(queryParams && queryParams['search'])
      searchParam = queryParams['search'];

    var url = "https://restcountries.com/v3.1/all";
    if(searchParam)
      url = "https://restcountries.com/v3.1/name/" + searchParam;

    await this.getDataFromApi(url);
  }

  async getDataFromApi(url: string){
    const options = {url: url}
    const response = await this.httpService.get(options);

    //If we did not find anything from the search
    if(response.status !== 404){
      this.foundCountries = response;
      this.showNoCountriesFound = true;
    }
  }

  newsSelected(country: any){
    this.router.navigateByUrl('/news?cca2=' + country.cca2 + '&name=' + country.name.official);
  }

  weatherSelected(country: any){
    var latAndLon = country.capitalInfo.latlng;
    this.router.navigateByUrl('/weather?lat=' + latAndLon[0] + '&lon=' + latAndLon[1] + '&capital=' + country.capital[0]);
  }
}
