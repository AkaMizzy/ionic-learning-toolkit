import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle, 
  IonList, 
  IonItem,
  IonCardSubtitle, 
  IonLabel, 
  IonInput, 
  IonIcon,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { addIcons } from 'ionicons';
import { 
  thermometerOutline, 
  waterOutline, 
  speedometerOutline, 
  arrowUpOutline, 
  arrowDownOutline, 
  cloudyOutline, 
  rainyOutline, 
  sunnyOutline, 
  snowOutline,
  arrowBackOutline 
} from 'ionicons/icons';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule,
    IonLabel, 
    IonButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle, 
    IonList, 
    IonItem,
    IonCardSubtitle,
    IonInput, 
    IonIcon,
    IonButtons,
    IonBackButton
  ]
})
export class WeatherPage implements OnInit {
  private readonly API_KEY = 'e1895434a7b06937c4edea98fe5353ce';
  
  country: string = '';
  countryFlag: SafeUrl = '';
  temp: number = 0;
  pres: number = 0;
  humidity: number = 0;
  weatherData: any;
  ville: string = 'Paris';
  feels_like: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  weatherIcon: string = '';
  weatherDescription: string = '';
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private http: HttpClient, 
    private alertController: AlertController, 
    private sanitizer: DomSanitizer
  ) { 
    addIcons({ 
      thermometerOutline, 
      waterOutline, 
      speedometerOutline, 
      arrowUpOutline, 
      arrowDownOutline,
      cloudyOutline,
      rainyOutline,
      sunnyOutline,
      snowOutline,
      arrowBackOutline
    });
  }

  ngOnInit() {
    if (this.ville) {
      this.getWeatherData();
    }
  }

  getWeatherData() {
    if (!this.ville) {
      this.error = 'Please enter a city name';
      return;
    }
    
    this.isLoading = true;
    this.error = '';

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.ville}&appid=${this.API_KEY}&units=metric`;
    
    this.http.get(weatherUrl).subscribe({
      next: (data: any) => {
        this.weatherData = data;

        // Handle country flag
        if (this.weatherData.sys?.country) {
          this.country = this.weatherData.sys.country;
          if (this.country === "EH") {
            this.country = "MA";
          }
          const flagUrl = `https://flagsapi.com/${this.country}/flat/64.png`;
          this.countryFlag = this.sanitizer.bypassSecurityTrustResourceUrl(flagUrl);
        }

        // Handle weather data
        if (this.weatherData.main) {
          this.temp = this.weatherData.main.temp;
          this.pres = this.weatherData.main.pressure;
          this.humidity = this.weatherData.main.humidity;
          this.feels_like = this.weatherData.main.feels_like;
          this.temp_min = this.weatherData.main.temp_min;
          this.temp_max = this.weatherData.main.temp_max;
        }

        // Handle weather icon and description
        if (this.weatherData.weather?.[0]) {
          this.weatherDescription = this.weatherData.weather[0].description;
          this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`;
        }

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Weather API Error:', error);
        this.error = 'Failed to fetch weather data. Please try again.';
        this.isLoading = false;
      }
    });
  }

  async showWeatherDetails() {
    const alert = await this.alertController.create({
      header: 'Weather Details',
      message: `
        Weather: ${this.weatherDescription}
        Pressure: ${this.pres} hPa
        Feels Like: ${this.feels_like}°C
        Min Temp: ${this.temp_min}°C
        Max Temp: ${this.temp_max}°C
      `,
      buttons: ['OK'],
      cssClass: 'weather-alert'
    });

    await alert.present();
  }
}