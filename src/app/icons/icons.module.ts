import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliverablesIconComponent } from './components/deliverables-icon/deliverables-icon.component';
import { ExplodedIconComponent } from './components/exploded-icon/exploded-icon.component';
import { SpfIconComponent } from './components/spf-icon/spf-icon.component';
import { MapIconComponent } from './components/map-icon/map-icon.component';
import { TrafficIconComponent } from './components/traffic-icon/traffic-icon.component';
import { IconComponent } from './icon/icon.component';



@NgModule({
  declarations: [
    DeliverablesIconComponent,
    ExplodedIconComponent,
    SpfIconComponent,
    MapIconComponent,
    TrafficIconComponent,
    IconComponent
  ],
  exports: [
    DeliverablesIconComponent,
    ExplodedIconComponent,
    SpfIconComponent,
    MapIconComponent,
    TrafficIconComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class IconsModule { }
