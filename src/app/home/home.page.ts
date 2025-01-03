import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCol, IonGrid, IonRow, IonInput  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCol, IonGrid, IonRow, IonInput ],
})
export class HomePage {
  constructor() {
    addIcons({ heart, logoApple, settingsSharp, star });
  }
}
