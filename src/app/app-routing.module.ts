import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverablesComponent } from './deliverables/deliverables.component';
import { ExplodedComponent } from './exploded/exploded.component';
import { MapComponent } from './map/map.component';
import { SpfComponent } from './spf/spf.component';
import { TrafficManagerComponent } from './traffic-manager/traffic-manager.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deliverables',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'deliverables',
    component: DeliverablesComponent,
  },
  {
    path: 'exploded',
    component: ExplodedComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'spf',
    component: SpfComponent
  },
  {
    path: 'trafficmanager',
    component: TrafficManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
