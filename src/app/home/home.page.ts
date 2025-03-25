import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonCard,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  calculatorOutline, 
  layersOutline, 
  cloudyOutline, cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    FormsModule,
    HeaderComponent,
    IonCard,
    IonCardContent,
    IonIcon
  ],
})
export class HomePage {
  
  constructor(private router : Router) {
    addIcons({calculatorOutline,layersOutline,cloudyOutline,cameraOutline});
  }
  goToCalcule(): void {
    this.router.navigate(['calcule']);
  }
  goToUi(): void {
    this.router.navigate(['ui']);
  }
  goToWeather(): void {
    this.router.navigate(['weather']);
  }
  goToCamera(): void {
    this.router.navigate(['camera']);
  }
  
}