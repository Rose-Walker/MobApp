import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent],
})
export class SettingsPage {
  constructor() {
  }
}
