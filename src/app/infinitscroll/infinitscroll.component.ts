import { Component, OnInit } from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-infinitscroll',
  templateUrl: './infinitscroll.component.html',
  styleUrls: ['./infinitscroll.component.scss'],
  imports: [IonAvatar, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList],
  standalone: true,
})
export class InfinitscrollComponent  implements OnInit {

  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 25; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
