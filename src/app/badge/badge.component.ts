import { Component } from '@angular/core';
import { IonBadge, IonItem, IonLabel, IonList, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  peopleOutline, 
  heartOutline, 
  starOutline, 
  checkmarkCircleOutline, 
  warningOutline, 
  notificationsOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  imports: [IonBadge, IonItem, IonLabel, IonList, IonIcon],
  standalone: true,
})
export class BadgeComponent {
  constructor() {
    addIcons({ 
      peopleOutline, 
      heartOutline, 
      starOutline, 
      checkmarkCircleOutline, 
      warningOutline, 
      notificationsOutline 
    });
  }
}
