import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCol, IonGrid, IonRow, IonInput  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCol, IonGrid, IonRow, IonInput, FormsModule ],
})
export class HomePage {
  searchString: string = '';

  constructor(private router: Router) {
    addIcons({ heart, logoApple, settingsSharp, star });
  }

  onSearch(){
    console.log("Search value is", this.searchString);
    this.router.navigateByUrl('/countries?search=' + this.searchString);
  }
}
