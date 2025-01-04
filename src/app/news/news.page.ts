import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonCardSubtitle } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/httpservice';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, NgFor, IonCard, IonCardHeader, IonCardTitle, IonList, IonItem, IonCardSubtitle],
})
export class NewsPage {
  countryName: string = "";
  news: any[] = [];
  showNoNewsMessage: boolean = true;

  APIKEY = "pub_643637f7879e8f408fab033890a8ec046748b";

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  async ngOnInit() {
    var queryParams = undefined;
    this.route.queryParams.subscribe(data => {
      queryParams = data;
    });
    
    if(queryParams){
        this.countryName = queryParams['name'];
        await this.getNews(queryParams['cca2']);
    }   
  }

  async getNews(cca2: string){
    const options = {url: 'https://newsdata.io/api/1/latest?apikey=' + this.APIKEY + '&country=' + cca2};
    const response = await this.httpService.get(options);
    if(response.status === "success"){
        this.news = response.results;
        this.showNoNewsMessage = false;
    }
  }

}
