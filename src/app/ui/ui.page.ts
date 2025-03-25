import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonRow,IonCol,IonButton} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.page.html',
  styleUrls: ['./ui.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonGrid,IonRow,IonCol,IonButton, RouterModule]
})
export class UiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
