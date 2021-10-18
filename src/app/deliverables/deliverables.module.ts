import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { PerformanceComponent } from './performance/performance.component';
import { ChartsComponent } from './charts/charts.component';
import { TopPanelComponent } from './overview/top-panel/top-panel.component';



@NgModule({
  declarations: [
    InventoryComponent,
    PerformanceComponent,
    ChartsComponent,
    TopPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartsComponent,
    InventoryComponent,
    PerformanceComponent,
    TopPanelComponent
  ]
})
export class DeliverablesModule { }
