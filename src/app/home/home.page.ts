import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCol, IonGrid, IonRow, IonInput  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
import { CountriesHttpService } from 'src/countries.httpservice';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCol, IonGrid, IonRow, IonInput, FormsModule ],
})
export class HomePage {
  searchString: string = '';

  constructor(private httpService: CountriesHttpService) {
    addIcons({ heart, logoApple, settingsSharp, star });
    //https://restcountries.com/v3.1/name/ire
  }

  async ngOnInit(){
    const options = {url: "https://restcountries.com/v3.1/name/ireland"}
    var test = await this.httpService.get(options);
    console.log("api returned", test);
  }

  onSearch(){
    console.log("Search value is", this.searchString);
  }
}
