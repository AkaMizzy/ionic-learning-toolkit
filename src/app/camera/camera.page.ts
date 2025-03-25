import { CameraService } from './../services/camera.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NgIf]
})
export class CameraPage implements OnInit {

  capturedImage: string | null = null;

  constructor(private cameraService: CameraService) { }

  async captureImage() {
    this.capturedImage = await this.cameraService.takePicture();
  }

  ngOnInit() {
  }

}
