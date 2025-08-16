import { Routes } from '@angular/router';
import { GarbageDetails } from './Components/garbage-details/garbage-details';
import { Dashboard } from './Components/dashboard/dashboard';
import { MapComponent } from './Components/map-component/map-component';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'garbage-details', component: GarbageDetails },
  { path: 'map', component: MapComponent },
  { path: '**', component: Dashboard },
];
