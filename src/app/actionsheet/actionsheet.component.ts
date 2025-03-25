import { Component } from '@angular/core';
import { IonButton, IonContent, ActionSheetController, IonActionSheet, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, trashOutline, shareSocialOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.component.html',
  styleUrls: ['./actionsheet.component.scss'],
  imports: [IonActionSheet, IonButton, IonIcon],
  standalone: true,
})
export class ActionsheetComponent {
  actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash-outline',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      icon: 'share-social-outline',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      icon: 'close-outline',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor(private actionSheetCtrl: ActionSheetController) {
    addIcons({ 
      menuOutline, 
      trashOutline, 
      shareSocialOutline, 
      closeOutline 
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Choose an Action',
      cssClass: 'custom-action-sheet',
      buttons: this.actionSheetButtons,
    });

    await actionSheet.present();
  }
}
