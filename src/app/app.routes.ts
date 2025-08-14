import { Routes } from '@angular/router';
import { GarbageDetails } from './Components/garbage-details/garbage-details';
import { Dashboard } from './Components/dashboard/dashboard';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'garbage-details', component: GarbageDetails },
  { path: '**', component: Dashboard },


];
