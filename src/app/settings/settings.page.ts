import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup  } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup, FormsModule],
})
export class SettingsPage {

    selectedUnit: string = 'metric'; // Default value

  constructor() {
  }

  async ngOnInit() {
    var savedUnit = localStorage.getItem("selectedUnit");
    if(savedUnit)
        this.selectedUnit = savedUnit;
  }

  async onRadioSelectedChanged(){
    localStorage.setItem("selectedUnit", this.selectedUnit)
  }
}
