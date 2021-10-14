import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliverablesComponent } from './deliverables/deliverables.component';
import { ExplodedComponent } from './exploded/exploded.component';
import { SpfComponent } from './spf/spf.component';
import { MapComponent } from './map/map.component';
import { TrafficManagerComponent } from './traffic-manager/traffic-manager.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    DeliverablesComponent,
    ExplodedComponent,
    SpfComponent,
    MapComponent,
    TrafficManagerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
