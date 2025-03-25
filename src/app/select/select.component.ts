import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { 
  IonSelect, 
  IonSelectOption, 
  IonItem, 
  IonLabel, 
  IonList,
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [
    IonSelect,
    IonSelectOption,
    IonItem,
    IonLabel,
    IonList,
    IonContent,
    NgIf
  ]
})
export class SelectComponent {
  fruits = [
    { value: 'apple', text: '🍏 Apple' },
    { value: 'banana', text: '🍌 Banana' },
    { value: 'orange', text: '🍊 Orange' }
  ];
  
  selectedFruit: string = '';
  
  constructor() {}
  
  handleChange(event: any) {
    console.log('Selected value:', event.detail.value);
    this.selectedFruit = event.detail.value;
  }
}
