import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decision-flow';
  sidebarNavs: any;

  constructor(){
    this.sidebarNavs = [
      {
        path: 'deliverables',
        name: 'Deliverables',
        icon: 'deliverables'
      },
      {
        path: 'exploded',
        name: 'Exploded \n View',
        icon: 'exploded'
      },
      {
        path: 'spf',
        name: 'Single \n Part \n Flow',
        icon: 'spf'
      },
      {
        path: 'map',
        name: 'Manufacturing \n Action \n Plan',
        icon: 'map'
      },
      {
        path: 'trafficmanager',
        name: 'Traffic \n Manager',
        icon: 'trafficmanager'
      }
    ]
  }

  

}
