import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonInput,IonCardContent, IonCardHeader,  
  IonLabel, 
  IonCardTitle,
  IonItem,
  IonSegment,
  IonSegmentButton,
  IonGrid,
  IonRow,
  IonButton,
  IonBackButton,
  IonButtons,
  IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { calculatorOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.page.html',
  styleUrls: ['./calcule.page.scss'],
  standalone: true,
  imports: [IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonInput,
    IonCardContent, 
    IonCardHeader, 
    IonButton, 
    IonLabel, 
    IonCardTitle, 
    IonItem,
    IonSegment,
    IonSegmentButton,
    FormsModule,
    CommonModule,
    IonGrid,
    IonRow,
    IonButton,
    IonBackButton,
    IonButtons,
    IonIcon]
})
export class CalculePage implements OnInit {

  num1: number = 0;
  num2: number = 0;
  selectedOperation: string = '+';
  result: string = '0';


  calculateResult() {
    if (this.num1 === null || this.num2 === null) {
      this.result = 'Veuillez entrer les deux nombres';
      return;
    }

    switch (this.selectedOperation) {
      case '+':
        this.result = (this.num1 + this.num2).toString();
        break;
      case '-':
        this.result = (this.num1 - this.num2).toString();
        break;
      case '*':
        this.result = (this.num1 * this.num2).toString();
        break;
      case '/':
        if (this.num2 === 0) {
          this.result = 'Division par zéro impossible';
        } else {
          this.result = (this.num1 / this.num2).toString();
        }
        break;
      default:
        this.result = 'Opération non valide';
    }
  }

  ngOnInit() {
    addIcons({ calculatorOutline, arrowBackOutline });
  }
  constructor(private router : Router) {}
    goToHome(): void {
      this.router.navigate(['home']);
    }

}
