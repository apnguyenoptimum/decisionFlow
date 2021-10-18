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
import { TopNavComponent } from './deliverables/top-nav/top-nav.component';
import { FilterComponent } from './deliverables/filter/filter.component';
import { TableComponent } from './deliverables/table/table.component';
import { OverviewComponent } from './deliverables/overview/overview.component';
import { DeliverablesModule } from './deliverables/deliverables.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module'


@NgModule({
  declarations: [
    AppComponent,
    DeliverablesComponent,
    ExplodedComponent,
    SpfComponent,
    MapComponent,
    TrafficManagerComponent,
    AdminComponent,
    FilterComponent,
    TableComponent,
    OverviewComponent,
    TopNavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    DeliverablesModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
