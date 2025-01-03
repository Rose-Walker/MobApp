import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup  } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { StorageService } from 'src/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonRadio, IonRadioGroup, FormsModule],
})
export class SettingsPage {

  selectedUnit: string = 'metric'; // Default value

  constructor(private storageService: StorageService) {
  }

  async ngOnInit() {
    var savedUnit = await this.storageService.get("selectedUnit");
    if(savedUnit)
        this.selectedUnit = savedUnit;
  }

  async onRadioSelectedChanged(){
    await this.storageService.set("selectedUnit", this.selectedUnit)
  }
}
