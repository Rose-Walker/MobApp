import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CountriesHttpService } from 'src/countries.httpservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countires',
  templateUrl: 'countries.page.html',
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class CountriesPage {

  constructor(private httpService: CountriesHttpService, private route: ActivatedRoute) {
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

    const options = {url: url}
    var test = await this.httpService.get(options);
    console.log("api returned", test);
  }

}
