import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup  } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup, FormsModule],
})
export class NewsPage {

  constructor() {
  }

  async ngOnInit() {

  }

}
