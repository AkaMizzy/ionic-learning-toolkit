import { Component } from '@angular/core';
import { 
  IonButton, 
  IonContent, 
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  AlertController, IonAlert } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { alertCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  imports: [IonAlert, 
    IonButton, 
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon
  ],
  standalone: true,
})
export class AlertComponent {
  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel'
    },
    {
      text: 'OK',
      role: 'confirm'
    }
  ];
  
  constructor(private alertController: AlertController) {
    addIcons({ alertCircleOutline });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Mehbaaa bikkk!',
      subHeader: 'Important message',
      message: 'I hate rain ichigo',
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }
}