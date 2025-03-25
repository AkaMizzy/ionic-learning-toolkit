import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'calcule',
    loadComponent: () => import('./calcule/calcule.page').then( m => m.CalculePage)
  },
  {
    path: 'ui',
    loadComponent: () => import('./ui/ui.page').then( m => m.UiPage)
  },
  {
    path: 'infinitscroll',
    loadComponent: () => import('./infinitscroll/infinitscroll.component').then(m => m.InfinitscrollComponent)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.component').then(m => m.AlertComponent)
  },
  {
    path: 'actionsheet',
    loadComponent: () => import('./actionsheet/actionsheet.component').then(m => m.ActionsheetComponent)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.component').then(m => m.BadgeComponent)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.component').then(m => m.SearchComponent)
  },
  {
    path: 'select',
    loadComponent: () => import('./select/select.component').then(m => m.SelectComponent)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.component').then(m => m.TabsComponent)
  },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./camera/camera.page').then( m => m.CameraPage)
  }
];
